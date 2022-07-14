<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
                        <!-- <template slot="header">
                            <h5 class="card-title" style="font-weight: bold">
                                Chi tiết đơn hàng
                            </h5>
                        </template> -->
                        <h1 class="col-12" style="text-align: center; color:orangered;"> Đơn Hàng: {{
                                orders[0].ID
                        }}
                        </h1>
                        <h2 class="col-12" style="text-align: center">Khách hàng: {{ orders[0].TEN }}</h2>
                        <h5 class="col-12" style="text-align: center">Số điện thoại: {{ orders[0].SODIENTHOAI }}</h5>
                        <h5 class="col-12" style="text-align: center">Địa chỉ: {{ orders[0].DIACHI }}</h5>
                        <h5 class="col-12" style="text-align: center">Email: {{ orders[0].EMAIL }}</h5>

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Ảnh</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Số lượng sản phẩm</th>
                                    <th>Giá </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(order, index) in pageOfitems" :key="index" @click="detail()">
                                    <td>{{ index + 1 }}</td>
                                    <td width="13%" height="13%"><img class="img-thumbnail" :src="'http://localhost:3000/' +
                                    order.ANH + ''" alt=" ..." />
                                    </td>
                                    <td>{{ order.THUONGHIEU + " " + order.TENSP }}</td>
                                    <td>{{ order.SOLUONG }}</td>
                                    <td>{{ order.GIA | numeral("0,0") }} VND</td>
                                </tr>
                            </tbody>
                        </table>
                        <div style="text-align: center">
                            <jw-pagination :pageSize="10" :items="orders" @changePage="onChangePage"
                                :labels="customLabels">
                            </jw-pagination>
                        </div>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Paginate from "vuejs-paginate"
import axios from "axios";

const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};

export default {
    components: {
        Paginate,
    },
    data() {
        return {
            orders: [],
            pageOfitems: [],
            customLabels,
        };
    },
    mounted() {
        this.listOrder();
    },

    methods: {
        onChangePage(pageOfitems) {
            this.pageOfitems = pageOfitems;
        },
        detail() {
            return console.log(1);
        },
        async listOrder() {
            const token = localStorage.token;
            const result = await axios.get(`http://localhost:3000/order/get-order-detail/${this.$route.params.id}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            this.orders = result.data;
        },
    }
}
</script>
<style>
</style>
