<template>
    <div class="container col-md-7" style="align:center;">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
                        <template slot="header">
                            <h5 class="card-title" style="font-weight: bold">
                                Danh sách đơn hàng
                            </h5>
                        </template>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Mã đơn hàng</th>
                                    <th>Tên Khách Hàng</th>
                                    <th>Số lượng</th>
                                    <th>Tổng </th>
                                    <th>Ngày đặt hàng</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="mouse-hover" v-for="(order, index) in pageOfitems" :key="index">
                                    <td @click="detail(order.ID)">{{ index + 1 }}</td>
                                    <td @click="detail(order.ID)">{{ order.ID }}</td>
                                    <td @click="detail(order.ID)">{{ order.TEN }}</td>
                                    <td @click="detail(order.ID)" style="text-align: center;">{{ order.SOLUONG }}</td>
                                    <td @click="detail(order.ID)">{{ order.TONG | numeral("0,0") }} VND</td>
                                    <td @click="detail(order.ID)">{{ order.NGAYDAT | formatDate }}</td>
                                    <template v-if="order.TRANGTHAI == 4">
                                        <button ype="button" class="btn btn-danger btn-fill float-righ">
                                            Đã hủy
                                        </button>
                                    </template>
                                    <template v-else-if="order.TRANGTHAI == 0">
                                        <button type="button" class="btn btn-primary btn-fill float-righ">
                                            Chờ xác nhận
                                        </button>
                                        &nbsp;
                                        <button @click="cancel(order.ID)" type="button"
                                            class="btn btn-danger btn-fill float-righ">
                                            Hủy
                                        </button>
                                    </template>
                                    <template v-else-if="order.TRANGTHAI == 1">
                                        <button type="button" class="btn btn-info btn-fill float-righ">
                                            Đã xác nhận
                                        </button>
                                    </template>
                                    <template v-else-if="order.TRANGTHAI == 2">
                                        <button type="button" class="btn btn-warning btn-fill float-righ">
                                            Đang vận chuyển
                                        </button>
                                    </template>
                                    <template v-else-if="order.TRANGTHAI == 3">
                                        <button type="button" class="btn btn-success btn-fill float-righ">
                                            Đã hoàn thành
                                        </button>
                                    </template>
                                    <template v-else>
                                        <button type="button" class="btn btn-warning btn-fill float-righ">
                                            Đã hủy
                                        </button>
                                    </template>
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

const token = localStorage.token;
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
        detail(id) {
            this.$router.push(`/giohang/chitietdonhang/${id}`)
        },
        async listOrder() {
            const user = localStorage.user;
            const result = await axios.get(`http://localhost:3000/user/find-usr-mail/${user}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token} `
                }
            });
            const id = result.data[0].ID;
            const result1 = await axios.get(`http://localhost:3000/order/get-order-user/${id}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            this.orders = result1.data;
        },
        async cancel(id) {
            const text = "HUỶ ĐƠN HÀNG ??"
            if (confirm(text) == true) {
                const result = await axios.get(`http://localhost:3000/order/cencel-oder/${id}`, {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        // "Content-type": "Application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                alert(result.data)
                if (result.data === "HỦY THÀNH CÔNG")
                    location.reload();
            }
        },
    }
}
</script>
<style>
.mouse-hover {
    cursor: pointer;
}
</style>
