<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
                        <template slot="header">
                            <h5 class="card-title" style="font-weight: bold">
                                Danh sách khách hàng
                            </h5>
                        </template>

                        <div style="text-align:right">
                            <router-link to="/quanlyuser/themnv">
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    class="btn btn-primary btn-fill float-righ">
                                    Khách hàng mới
                                </button>
                            </router-link>
                        </div>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Email</th>
                                    <th>Họ tên</th>
                                    <th>SĐT</th>
                                    <th>ĐỊA CHỈ</th>
                                    <th>GIỚI TÍNH</th>
                                    <th>Trạng thái</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(use, index) in pageOfitems" :key="index">
                                    <template v-if="use.LOAI == 0">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ use.EMAIL }}</td>
                                        <td>{{ use.TEN }}</td>
                                        <td>{{ use.SODIENTHOAI }}</td>
                                        <td>{{ use.DIACHI }}</td>
                                        <template v-if="use.GIOITINH == 0">
                                            <td>Nam</td>
                                        </template>
                                        <template v-else>
                                            <td>Nữ</td>
                                        </template>
                                        <template v-if="use.TRANGTHAI == 0">
                                            <td>Hoạt động</td>
                                        </template>
                                        <template v-else>
                                            <td>Không hoạt động</td>
                                        </template>
                                        <td style="text-align: center">
                                            <button @click.prevent="onDel(use.ID)" type="button"
                                                class="btn btn-danger btn-fill float-righ">
                                                Xóa
                                            </button>
                                        </td>
                                    </template>
                                </tr>
                            </tbody>
                        </table>
                        <div style="text-align: center">
                            <jw-pagination :pageSize="15" :items="users" @changePage="onChangePage">
                            </jw-pagination>
                        </div>
                    </card>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import Paginate from 'vuejs-paginate'
import axios from "axios";
import LTable from "src/components/Table.vue";
import Card from "src/components/Cards/Card.vue";
export default {
    components: {
        LTable,
        Card,
        //   Paginate,
    },
    data() {
        return {
            data: [],
            users: [],
            pageOfitems: [],
        };
    },
    mounted() {
        this.solieu();
    },

    methods: {
        onChangePage(pageOfitems) {
            this.pageOfitems = pageOfitems;
        },

        async solieu() {
            const token = localStorage.token;
            this.data = await axios.get(`http://localhost:3000/user/get-all-usr`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            // console.log(this.data);
            //  console.log(this.data.data.data);
            this.users = this.data.data;
        },

        async onDel(ID) {
            const token = localStorage.token;
            const result = axios.delete(`http://localhost:3000/user/remove-usr/${ID}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
            ).then((result) => {
                console.warn(result);
            });
        },
        // clickCallback (pageNum) => {
        //  console.log(pageNum)
        // },
    }
}
</script>
<style>
</style>
