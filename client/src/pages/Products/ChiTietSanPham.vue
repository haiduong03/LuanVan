<template>

    <div class="content"><br>
        <!-- <div class="container-fluid"> -->
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
                    <li class="breadcrumb-item"><a href="#">Sản phẩm</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Chi tiết sản phẩm</li>
                </ol>
            </nav>
            <div class="row">
                <!-- <h4 class="card-title" style="font-weight: bold; text-align: center;">
                    LAPTOP
                    {{ THUONGHIEU + " " + TEN + " " + CPU + " " + THONGTINCPU + "/" + DUNGLUONGRAM + "GB/" +
                            DUNGLUONGOCUNG + "GB/" + HEDIEUHANH
                    }}
                </h4> -->
            </div><br>
            <div class="row">
                <!-- left -->
                <div class="col-md-6">
                    <div class="col-12">
                        <div class="container"><br><br>
                            <img class="img-fluid" :src="'http://localhost:3000/' + ANH + ''" alt="..." />
                        </div>
                    </div>
                </div>
                <!--right-->
                <div class="col-md-6">
                    <div class="card-title" style="font-weight: bold; text-align: center; font-size: 20px;">
                        <!-- LAPTOP -->
                        {{ THUONGHIEU + " " + TEN }}
                        <br>
                        {{ CPU + " " + THONGTINCPU + "/" + DUNGLUONGRAM + "GB/" + DUNGLUONGOCUNG + "GB/" + HEDIEUHANH }}
                    </div>
                    <div class="col-12">
                        <table class="table table-bordered  ">
                            <thead>
                                <tr>
                                    <td colspan="2" style="font-weight: bold; text-align: center!important;">Thông số
                                        chi tiết</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width="30%">Hãng</td>
                                    <td>{{ THUONGHIEU }}</td>
                                </tr>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>15.6 inch, 1920 x 1080 Pixels, IPS, 144 Hz, Anti-glare LED-backlit
                                    </td>
                                </tr>
                                <tr>
                                    <td>CPU</td>
                                    <td>{{ CPU }}&nbsp;&nbsp;{{ THONGTINCPU }} 4.5 GHz</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>
                                        {{ RAM + " " + DUNGLUONGRAM }}GB
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ổ cứng</td>
                                    <td>{{ OCUNG + " " + DUNGLUONGOCUNG }}GB</td>
                                </tr>
                                <tr>
                                    <td>Đồ họa</td>
                                    <td>
                                        NVIDIA GeForce GTX 1650 4GB
                                        <br>
                                        Intel UHD Graphics
                                    </td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{{ HEDIEUHANH }}</td>
                                </tr>
                                <tr>
                                    <td>Bảo hành</td>
                                    <td>{{ BAOHANH }} tháng</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <button type="button" class="row-sm-2 btn-danger btn-fill btn btn-lg btn-block"
                        @click="addToCart(ID)">Thêm vào giỏ hàng</button>
                </div>
                <div class="col-6">
                    <!-- <h5 class="card-title" style="font-weight: bold">Giá sản phẩm:</h5> -->
                    <div style="
                          font-weight: bold;
                          font-size: 50px;
                          color: #363636;
                          line-height: 1.25;
                          /* margin-top: 10px; */
                        ">Giá:
                        <span style="color:#FF4A55">{{ GIA | numeral("0,0") }} VND</span>
                    </div>
                </div>
            </div>
            <!-- Mô tả sản phẩm -->
        </div>
        <br>
        <div class="container">
            <p class="text-justify">{{ MOTA }}.
                <!-- Hiệu năng cực đỉnh cho mọi tác vụ
                Hiệu năng đáng tin cậy trên ASUS TUF Gaming F15 FX506LH HN188W giúp bạn chơi game, livestream và
                thực hiện đa tác vụ.
                CPU Intel i5 tốc độ cao có thể kích hoạt nhiều luồng để xử lý đa nhiệm.
                Kết hợp với card màn hình GTX 1650, đáp ứng tốc độ khung hình cao của nhiều tựa game phổ biến.
                Tăng tốc độ tải ứng dụng với ổ SSD 512GB NVMe PCIe® và dễ dàng nâng cấp khả năng lưu trữ với ổ SSD
                thứ hai. -->
            </p>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            ID: null,
            TEN: null,
            CPU: null,
            RAM: null,
            OCUNG: null,
            DUNGLUONGOCUNG: null,
            DUNGLUONGRAM: null,
            GIA: null,
            HEDIEUHANH: null,
            MOTA: null,
            THONGTINCPU: null,
            THUONGHIEU: null,
            ANH: null,
            BAOHANH: null,
        }
    },
    mounted() {
        this.findSP()
    },
    methods: {
        noityAdd(verticalAlign, horizontalAlign) {
            const color = Math.floor((Math.random() * 4) + 1)
            this.$notifications.notify(
                {
                    message: `<span>Thêm vào giỏ hàng thành công !!</span>`,
                    icon: 'nc-icon nc-app',
                    horizontalAlign: horizontalAlign,
                    verticalAlign: verticalAlign,
                    type: this.type[2]
                })
        },

        async findSP() {
            const result = await axios.get(`http://localhost:3000/product/find-product-by-id/${this.$route.params.id}`);
            this.ID = result.data[0].ID;
            this.TEN = result.data[0].TEN;
            this.CPU = result.data[0].CPU;
            this.RAM = result.data[0].RAM;
            this.OCUNG = result.data[0].OCUNG;
            this.DUNGLUONGOCUNG = result.data[0].DUNGLUONGOCUNG;
            this.DUNGLUONGRAM = result.data[0].DUNGLUONGRAM;
            this.GIA = result.data[0].GIA;
            this.HEDIEUHANH = result.data[0].HEDIEUHANH;
            this.MOTA = result.data[0].MOTA;
            this.THONGTINCPU = result.data[0].THONGTINCPU;
            this.THUONGHIEU = result.data[0].THUONGHIEU;
            this.ANH = result.data[0].ANH;
            this.BAOHANH = result.data[0].BAOHANH;
            console.log(result.data);

        },

        addToCart() {
            const cartItems = {
                ID: this.ID,
                TEN: this.TEN,
                GIA: this.GIA,
                ANH: this.ANH,
                THUONGHIEU: this.THUONGHIEU,
                SL: 1,
            };

            if (!localStorage.cart) {
                localStorage.setItem("cart", JSON.stringify([]));
                const cart = JSON.parse(localStorage.cart);
                cart.push(cartItems);
                localStorage.setItem("cart", JSON.stringify(cart));
            }
            else {
                const cart = JSON.parse(localStorage.cart);
                let flag = 0;
                for (let index = 0; index < cart.length; index++) {
                    if (cart[index].ID == cartItems.ID) {
                        cart[index].SL++;
                        localStorage.setItem("cart", JSON.stringify(cart));
                        flag = 1;
                    }
                }
                if (flag == 0) {
                    cart.push(cartItems);
                    localStorage.setItem("cart", JSON.stringify(cart));
                }
            }
            this.$notifications.notify(
                {
                    message: `<span>Thêm sản phẩm hàng thành công !!</span>`,
                    icon: 'nc-icon nc-cart-simple',
                    horizontalAlign: 'right',
                    verticalAlign: 'top',
                    type: 'success'
                })
            setTimeout(function () {
                window.location.reload();
            }, 1000);
        },
    },
};

</script>
<style>
</style>
