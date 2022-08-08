<template>
    <div class="content">
        <!-- <div class="container-fluid"> -->
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#/giohang">Giỏ hàng</a></li>
                    <li class="breadcrumb-item"><a href="#">Thông tin giao hàng</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Phương thức thanh toán</li>
                </ol>
            </nav>

            <div class="row">
                <!-- left -->

                <div class="col-md-5">
                    <div class="col-12">
                        <h5 class="card-title" style="font-weight: bold">
                            Thông tin giao hàng
                        </h5>
                        <form>
                            <div class="form-group">
                                <label for="inputEmail4">Họ và tên:</label>
                                <input type="text" class="form-control" id="inputAddress2" :value="user.TEN">
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Email:</label>
                                    <input type="email" class="form-control" id="inputEmail4" :value="user.EMAIL">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Số điện thoại:</label>
                                    <input type="text" class="form-control" id="inputPassword4"
                                        :value="user.SODIENTHOAI">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputEmail4">Địa chỉ:</label>
                                <input type="text" class="form-control" id="inputAddress" :value="user.DIACHI">
                            </div>
                            <button type="submit" class="row-sm-2 btn-primary btn-fill btn btn-lg btn-block"
                                @click="order()">Thanh toán</button>
                        </form>
                    </div>
                </div>



                <!--right-->
                <div class="col-md-7">
                    <div class="col-md-12">
                        <h5 class="card-title" style="font-weight: bold">
                            &nbsp;
                        </h5>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="col-md-2"
                                        style="text-align: center !important ; font-weight: bold; color:black">
                                        Sản phẩm</th>
                                    <th class="col-md-5"
                                        style="text-align: center !important ; font-weight: bold; color:black">
                                        Tên sản phẩm</th>
                                    <th class="col-md-2"
                                        style="text-align: center !important ; font-weight: bold; color:black">
                                        Số lượng</th>
                                    <th class="" style="text-align: center !important ; font-weight: bold; color:black">
                                        Giá sản phẩm</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="cart in carts">
                                    <tr>
                                        <th scope="row"><img class="img-fluid"
                                                :src="'http://localhost:3000/' + cart.ANH + ''" alt="..." />
                                        </th>
                                        <td>{{ cart.TEN }}</td>
                                        <td style="text-align: center !important">{{ cart.SL }}</td>
                                        <td style="text-align: center !important">{{ cart.SL * cart.GIA |
                                                numeral("0,0")
                                        }}
                                            VND</td>
                                    </tr>
                                </template>
                                <!-- <tr>
                                    <th scope="row"><img class="img-fluid" src="img/faces/laptop-2.jpg" alt="..." />
                                    </th>
                                    <td>Laptop ASUS TUF Gaming F15 FX506LHB HN188W</td>
                                    <td style="text-align: center !important">2</td>
                                    <td style="text-align: center !important">45.000.000</td>
                                </tr>
                                <tr>
                                    <th scope="row"><img class="img-fluid" src="img/faces/laptop-1.jpg" alt="..." />
                                    </th>
                                    <td>Laptop ASUS TUF Gaming F15 FX506LHB HN188W</td>
                                    <td style="text-align: center !important">1</td>
                                    <td style="text-align: center !important">45.000.000</td>
                                </tr> -->
                                <tr>
                                    <td colspan="3">
                                        Tạm tính:
                                        <br>
                                        Phí vận chuyển:
                                    </td>
                                    <td style="text-align: center !important">
                                        {{ sum | numeral("0,0") }} VND
                                        <br>
                                        {{ cod = 100000 | numeral("0,0") }} VND
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3" style=" font-weight: bold; color:black">
                                        Tổng cộng</td>
                                    <td style="text-align: center !important ; font-weight: bold; color:black">
                                        {{ total = sum + cod | numeral("0,0") }} VND</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    components: {

    },
    data() {
        return {
            type: ['', 'info', 'success', 'warning', 'danger'],
            notifications: {
                topCenter: false
            },
            user: [],
            carts: JSON.parse(localStorage.cart),
            sum: null,
            // price: 0
        }
    },
    mounted() {
        this.getInfo();
        this.data();
    },
    methods: {
        data() {
            this.carts.forEach(e => {
                this.sum += e.SL * e.GIA
            });
        },

        async order() {
            const token = localStorage.token;

            const today = new Date();
            const datetime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let qty = 0;
            this.carts.forEach(e => {
                qty += e.SL
            });

            const result = await axios.post(`http://localhost:3000/order/add-order`,
                {
                    ID: this.user.ID,
                    SUM: this.total,
                    QTY: qty,
                    DATE: datetime,
                    CART: this.carts
                },
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        // "Content-type": "Application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

            if (result.data === "ĐẶT HÀNG THÀNH CÔNG") {
                this.$notifications.notify(
                    {
                        message: `<span>Đặt hàng thành công !! <b>LaptopDD</b> - xin cảm ơn quý khách.</span>`,
                        icon: 'nc-icon nc-send',
                        horizontalAlign: 'right',
                        verticalAlign: 'top',
                        type: 'success'
                    })
                localStorage.removeItem("cart");
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
                this.$router.push("/")
            }
        },


        async getInfo() {
            const token = localStorage.token;
            const mail = localStorage.user;
            const result = await axios.get(`http://localhost:3000/user/find-usr-mail/${mail}`,
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        // "Content-type": "Application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
            this.user = result.data[0];
        }
    }
};
</script>
<style lang="scss">
</style>
