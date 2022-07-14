<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
                        <template slot="header">
                            <h5 class="card-title" style="font-weight: bold">
                                Danh sách đơn hàng
                            </h5>
                        </template>
                        <!-- <div style="background-color:#fff">
                            <form class="form-inline my-2 my-lg-0 ml-5" style="width:100%;">
                                <input v-model="name" class="form-control mr-sm-2" style="width:80%;" type="search"
                                    placeholder="Tìm kiếm" aria-label="Search" @keyup.enter="findByName(name)">
                                <button @click="findByName(name)" type="button" class="btn btn-light"
                                    style="color:black;background-color:#fff;border-color:cyan">
                                    <i class="nc-icon nc-zoom-split" style="color:black;font-size: 16px;"></i>
                                </button>
                            </form>
                        </div> -->
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
                                <tr v-for="(order, index) in pageOfitems" :key="index" @click="detail(order.ID)">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ order.ID }}</td>
                                    <td>{{ order.TEN }}</td>
                                    <td style="text-align: center;">{{ order.SOLUONG }}</td>
                                    <td>{{ order.TONG | numeral("0,0") }} VND</td>
                                    <td>{{ order.NGAYDAT | formatDate }}</td>
                                    <template v-if="order.TRANGTHAI == 0">
                                        <button type="button" class="btn btn-primary btn-fill float-righ">
                                            Chờ xác nhận
                                        </button>
                                        &nbsp;
                                        <button type="button" class="btn btn-danger btn-fill float-righ">
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
            this.$router.push(`/quanlydonhang/chitietdonhang/${id}`)
        },
        async listOrder() {
            const token = localStorage.token;
            const result = await axios.get(`http://localhost:3000/order/get-all-order`, {
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
