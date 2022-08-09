<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
                        <template slot="header">
                            <h5 class="card-title" style="font-weight: bold">
                                Danh sách đơn hàng
                            </h5>
                        </template>
                        <div style="background-color:#fff">
                            <form class="form-inline my-2 my-lg-0 ml-5" style="width:100%;">
                                <input @keypress.enter="findByID(id)" v-model="id" class="form-control mr-sm-2"
                                    style="width:80%;" type="search" placeholder="Tìm kiếm" aria-label="Search">
                                <button @click="findByID(id)" @keypress.enter="findByID(id)" type="button"
                                    class="btn btn-light" style="color:black;background-color:#fff;border-color:cyan">
                                    <i class="nc-icon nc-zoom-split" style="color:black;font-size: 16px;"></i>
                                </button>
                            </form>
                        </div>
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
                                <tr v-for="(order, index) in pageOfitems" :key="index">
                                    <td @click="detail(order.ID)">{{ index + 1 }}</td>
                                    <td>{{ order.ID }}</td>
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
                                        <button @click="confirm(order.ID)" type="button"
                                            class="btn btn-primary btn-fill float-righ">
                                            Chờ xác nhận
                                        </button>
                                        &nbsp;
                                        <button @click="cancel(order.ID)" type="button"
                                            class="btn btn-danger btn-fill float-righ">
                                            Hủy
                                        </button>
                                    </template>
                                    <template v-else-if="order.TRANGTHAI == 1">
                                        <button @click="moving(order.ID)" type="button"
                                            class="btn btn-info btn-fill float-righ">
                                            Đã xác nhận
                                        </button>
                                    </template>
                                    <template v-else-if="order.TRANGTHAI == 2">
                                        <button @click="completed(order.ID)" type="button"
                                            class="btn btn-warning btn-fill float-righ">
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
            id: null
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

        async findByID(id) {
            const result = await axios.get(
                `http://localhost:3000/order/find-order-by-id/${id}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
            );
            this.orders = result.data;
        },

        async listOrder() {
            const result = await axios.get(`http://localhost:3000/order/get-all-order`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            this.orders = result.data;
        },
        async confirm(id) {
            const text = "XÁC NHẬN ĐƠN HÀNG ??"
            if (confirm(text) == true) {
                const result = await axios.get(`http://localhost:3000/order/confirm-oder/${id}`, {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        // "Content-type": "Application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                alert("XÁC NHẬN THÀNH CÔNG")
                window.location.reload();
            }
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
                location.reload();
            }
        },
        async moving(id) {
            const text = "ĐƠN HÀNG ĐANG ĐƯỢC VẬN CHUYỂN ??"
            if (confirm(text) == true) {
                const result = await axios.get(`http://localhost:3000/order/moving-oder/${id}`, {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        // "Content-type": "Application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                alert("ĐƠN HÀNG ĐANG VẬN CHUYỂN")
                location.reload();
            }
        },
        async completed(id) {
            const text = "HOÀN THÀNH ĐƠN HÀNG ??"
            if (confirm(text) == true) {
                const result = await axios.get(`http://localhost:3000/order/completed-oder/${id}`, {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        // "Content-type": "Application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }); alert("ĐƠN HÀNG ĐÃ HOÀN THÀNH")
                location.reload();
            }
        },
    }
}
</script>
<style>
td {
    cursor: pointer;
}
</style>
