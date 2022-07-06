<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-3">
                    <card class=" strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
                        <template slot="header">
                            <h5 class="card-title" style="font-weight: bold">
                                CPU
                            </h5>
                        </template>
                        <div style="text-align:right">
                            <div class="row-1">
                                <div>
                                    <label style="text-align:left"> Tên cpu</label>
                                </div>
                                <input type="text" v-model="TENCPU">
                            </div>
                            <br>
                            <div>
                                <button @click.prevent="addCpu()" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    class="btn btn-primary btn-fill float-righ">
                                    Thêm
                                </button>
                            </div>
                        </div>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th></th>
                                    <th>TÊN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(cpu, index) in pageOfitems" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td></td>
                                    <td>{{ cpu.TEN }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div style="text-align: center">
                            <jw-pagination :pageSize="10" :items="listCPU" @changePage="onChangePage"
                                :labels="customLabels">
                            </jw-pagination>
                        </div>
                    </card>
                </div>
                <div class="col-3">
                    <card class=" strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
                        <template slot="header">
                            <h5 class="card-title" style="font-weight: bold">
                                RAM
                            </h5>
                        </template>
                        <div style="text-align:right">
                            <div class="row-1">
                                <div>
                                    <label style="text-align:left"> Tên ram</label>
                                </div>
                                <input type="text" v-model="TENRAM">
                            </div>
                            <br>
                            <div>
                                <button @click.prevent="addRam()" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    class="btn btn-primary btn-fill float-righ">
                                    Thêm
                                </button>
                            </div>
                        </div>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th></th>
                                    <th>TÊN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(ram, index) in pageOfitems" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td></td>
                                    <td>{{ ram.TEN }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div style="text-align: center">
                            <jw-pagination :pageSize="10" :items="listRAM" @changePage="onChangePage"
                                :labels="customLabels">
                            </jw-pagination>
                        </div>
                    </card>
                </div>
                <!-- <div class="col-4">
                    <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
                        <template slot="header">
                            <h5 class="card-title" style="font-weight: bold">
                                Linh kiện RAM
                            </h5>
                        </template>

                        <div style="text-align:right">
                            <router-link to="/quanlyuser/themnv">
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    class="btn btn-primary btn-fill float-righ">
                                    Thêm
                                </button>
                            </router-link>
                        </div>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>TÊN</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(use, index) in pageOfitems" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ use.TEN }}</td>
                                    <td style="text-align: center">
                                        <template v-if="use.TRANGTHAI == 0">
                                            <button @click.prevent="deleteKH(use.ID)" type="button"
                                                class="btn btn-danger btn-fill float-righ">
                                                Xóa
                                            </button>
                                            &nbsp;
                                        </template>
                                        <template v-else>
                                            <button @click.prevent="activeKH(use.ID)" type="button"
                                                class="btn btn-success btn-fill float-righ">
                                                Kích hoạt
                                            </button>
                                        </template>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div style="text-align: center">
                            <jw-pagination :pageSize="10" :items="users" @changePage="onChangePage"
                                :labels="customLabels">
                            </jw-pagination>
                        </div>
                    </card>

                </div>
                <div class="col-4">
                    <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
                        <template slot="header">
                            <h5 class="card-title" style="font-weight: bold">
                                Linh kiện Ổ Cứng
                            </h5>
                        </template>

                        <div style="text-align:right">
                            <router-link to="/quanlyuser/themnv">
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    class="btn btn-primary btn-fill float-righ">
                                    Thêm
                                </button>
                            </router-link>
                        </div>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>TÊN</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(use, index) in pageOfitems" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ use.TEN }}</td>
                                    <td style="text-align: center">
                                        <template v-if="use.TRANGTHAI == 0">
                                            <button @click.prevent="deleteKH(use.ID)" type="button"
                                                class="btn btn-danger btn-fill float-righ">
                                                Xóa
                                            </button>
                                            &nbsp;
                                        </template>
                                        <template v-else>
                                            <button @click.prevent="activeKH(use.ID)" type="button"
                                                class="btn btn-success btn-fill float-righ">
                                                Kích hoạt
                                            </button>
                                        </template>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div style="text-align: center">
                            <jw-pagination :pageSize="10" :items="users" @changePage="onChangePage"
                                :labels="customLabels">
                            </jw-pagination>
                        </div>
                    </card>

                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
// import Paginate from 'vuejs-paginate'
import axios from "axios";
import LTable from "src/components/Table.vue";
import Card from "src/components/Cards/Card.vue";

const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};


export default {
    components: {
        LTable,
        Card,
        // Paginate,
    },
    data() {
        return {
            TENCPU: null,
            listCPU: [],
            TENRAM: null,
            listRAM: [],
            users: [],
            pageOfitems: [],
            customLabels
        };
    },
    mounted() {
        this.listCpu();
        this.listRam();
    },

    methods: {
        onChangePage(pageOfitems) {
            this.pageOfitems = pageOfitems;
        },

        async listCpu() {
            const result = await axios.get(`http://localhost:3000/product/get-all-cpu`);
            this.listCPU = result.data;
        },

        async addCpu() {
            const token = localStorage.token;
            const name = this.TENCPU
            const result = await axios.post(`http://localhost:3000/product/add-cpu/${name}`, {}, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            if (result.data === "THÊM THÀNH CÔNG") {
                alert(result.data);
                location.replace();
            } else alert(result.data);
        },

        async listRam() {
            const result = await axios.get(`http://localhost:3000/product/get-all-ram`);
            this.listRAM = result.data;
        },

        async addRam() {
            const token = localStorage.token;
            const name = this.TENRAM
            const result = await axios.post(`http://localhost:3000/product/add-ram/${name}`, {}, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            if (result.data === "THÊM THÀNH CÔNG") {
                alert(result.data);
                location.replace();
            } else alert(result.data);
        }

    }
}
</script>
<style>
</style>
