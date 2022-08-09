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
                                    <label style="text-align:left"> cpu</label>
                                </div>
                                <input @keypress.enter="addCpu()" type="text" v-model="TENCPU">
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
                                <tr v-for="(cpu, index) in pageCpu" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td></td>
                                    <td>{{ cpu.TEN }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div style="text-align: center">
                            <jw-pagination :pageSize="7" :items="listCPU" @changePage="onChangePageCpu"
                                :labels="customLabels">
                            </jw-pagination>
                        </div>
                    </card>
                </div>
                <div class="col-3">
                    <card class=" strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
                        <template slot="header">
                            <h5 class="card-title" style="font-weight: bold">
                                HÃNG
                            </h5>
                        </template>
                        <div style="text-align:right">
                            <div class="row-1">
                                <div>
                                    <label style="text-align:left"> HÃNG</label>
                                </div>
                                <input @keypress.enter="addBrand()" type="text" v-model="TENHANG">
                            </div>
                            <br>
                            <div>
                                <button @click.prevent="addBrand()" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" class="btn btn-primary btn-fill float-righ">
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
                                <tr v-for="(brand, index) in pageBrand" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td></td>
                                    <td>{{ brand.TEN }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div style="text-align: center">
                            <jw-pagination :pageSize="7" :items="listBrand" @changePage="onChangePageBrand"
                                :labels="customLabels">
                            </jw-pagination>
                        </div>
                    </card>
                </div>
                <div class="col-3">
                    <card class=" strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
                        <template slot="header">
                            <h5 class="card-title" style="font-weight: bold">
                                HỆ ĐIỀU HÀNH
                            </h5>
                        </template>
                        <div style="text-align:right">
                            <div class="row-1">
                                <div>
                                    <label style="text-align:left"> HỆ ĐIỀU HÀNH</label>
                                </div>
                                <input @keypress.enter="addOS()" type="text" v-model="TENHDH">
                            </div>
                            <br>
                            <div>
                                <button @click.prevent="addOS()" data-bs-toggle="modal" data-bs-target="#exampleModal"
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
                                <tr v-for="(os, index) in pageOS" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td></td>
                                    <td>{{ os.TEN }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div style="text-align: center">
                            <jw-pagination :pageSize="7" :items="listOS" @changePage="onChangePageOS"
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
                                    <label style="text-align:left"> ram</label>
                                </div>
                                <input @keypress.enter="addRam()" type="text" v-model="TENRAM">
                            </div>
                            <br>
                            <div>
                                <button @click.prevent="addRam()" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    class="btn btn-primary btn-fill float-righ">
                                    Thêm
                                </button>
                            </div>
                        </div>
                        <br>

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th></th>
                                    <th>TÊN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(ram, index) in pageRam" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td></td>
                                    <td>{{ ram.TEN }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div style="text-align: center">
                            <jw-pagination :pageSize="7" :items="listRAM" @changePage="onChangePageRam"
                                :labels="customLabels">
                            </jw-pagination>
                        </div>
                    </card>
                </div>
                <div class="col-3">
                    <card class=" strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
                        <template slot="header">
                            <h5 class="card-title" style="font-weight: bold">
                                Ổ CỨNG
                            </h5>
                        </template>
                        <div style="text-align:right">
                            <div class="row-1">
                                <div>
                                    <label style="text-align:left"> ổ cứng</label>
                                </div>
                                <input @keypress.enter="addDrive()" type="text" v-model="TENOCUNG">
                            </div>
                            <br>
                            <div>
                                <button @click.prevent="addDrive()" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" class="btn btn-primary btn-fill float-righ">
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
                                <tr v-for="(drive, index) in pageDrive" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td></td>
                                    <td>{{ drive.TEN }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div style="text-align: center">
                            <jw-pagination :pageSize="7" :items="listDrive" @changePage="onChangePageDrive"
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
import axios from "axios";
// import LTable from "src/components/Table.vue";
import Card from "src/components/Cards/Card.vue";

const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};


export default {
    components: {
        // LTable,
        Card,
    },
    data() {
        return {
            TENCPU: null,
            TENRAM: null,
            TENOCUNG: null,
            TENHANG: null,
            TENHDH: null,
            listCPU: [],
            listRAM: [],
            listDrive: [],
            listOS: [],
            listBrand: [],
            pageRam: [],
            pageCpu: [],
            pageDrive: [],
            pageBrand: [],
            pageOS: [],
            customLabels
        };
    },
    mounted() {
        this.listCpu();
        this.listRam();
        this.listOcung();
        this.listHang();
        this.listHeDieuHanh();
    },

    methods: {
        onChangePageCpu(pageCpu) {
            this.pageCpu = pageCpu;
        },

        onChangePageRam(pageRam) {
            this.pageRam = pageRam;
        },

        onChangePageDrive(pageDrive) {
            this.pageDrive = pageDrive;
        },

        onChangePageBrand(pageBrand) {
            this.pageBrand = pageBrand;
        },

        onChangePageOS(pageOS) {
            this.pageOS = pageOS;
        },

        async listCpu() {
            const result = await axios.get(`http://localhost:3000/product/get-all-cpu`);
            this.listCPU = result.data;
        },

        async listRam() {
            const result = await axios.get(`http://localhost:3000/product/get-all-ram`);
            this.listRAM = result.data;
        },

        async listOcung() {
            const result = await axios.get(`http://localhost:3000/product/get-all-drive`);
            this.listDrive = result.data;
            console.log(result.data);
        },

        async listHeDieuHanh() {
            const result = await axios.get(`http://localhost:3000/product/get-all-os`);
            this.listOS = result.data;
        },

        async listHang() {
            const result = await axios.get(`http://localhost:3000/product/get-all-brand`);
            this.listBrand = result.data;
        },

        async addCpu() {
            const token = localStorage.token;
            const name = this.TENCPU;
            const result = await axios.post(`http://localhost:3000/product/add-cpu/${name}`, {}, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            if (result.data === "THÊM THÀNH CÔNG") {
                alert(result.data);
                location.reload();
            } else alert(result.data);
        },

        async addRam() {
            const token = localStorage.token;
            const name = this.TENRAM;
            const result = await axios.post(`http://localhost:3000/product/add-ram/${name}`, {}, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            if (result.data === "THÊM THÀNH CÔNG") {
                alert(result.data);
                location.reload();
            } else alert(result.data);
        },

        async addDrive() {
            const token = localStorage.token;
            const name = this.TENOCUNG;
            const result = await axios.post(`http://localhost:3000/product/add-drive/${name}`, {}, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            if (result.data === "THÊM THÀNH CÔNG") {
                alert(result.data);
                location.reload();
            } else alert(result.data);
        },

        async addOS() {
            const token = localStorage.token;
            const name = this.TENHDH;
            const result = await axios.post(`http://localhost:3000/product/add-os/${name}`, {}, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            if (result.data === "THÊM THÀNH CÔNG") {
                alert(result.data);
                location.reload();
            } else alert(result.data);
        },

        async addBrand() {
            const token = localStorage.token;
            const name = this.TENHANG;
            const result = await axios.post(`http://localhost:3000/product/add-brand/${name}`, {}, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            if (result.data === "THÊM THÀNH CÔNG") {
                alert(result.data);
                location.reload();
            } else alert(result.data);
        }

    }
}
</script>
<style>
</style>
