<template>
    <div class="content">
        <!-- <div class="container-fluid"> -->
        <div class="row">
            <div class=" container col-6 ">
                <card>
                    <h4 slot="header" class="card-title">Sửa sản phẩm</h4>
                    <form enctype="multipart/form-data">
                        <div class="row ">
                            <div class="col-md-12">
                                <img class="img-thumbnail" v-bind:src="'http://localhost:3000/' + ANHCU + ''"
                                    alt="..." />
                                <label>{{ ANHCU }}</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <base-input type="text" label="Tên sản phẩm" placeholder="Nhập tên sản phẩm"
                                    v-model="TEN" required>
                                </base-input>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <label for="inputState" required>Hệ điều hành</label>
                                <select class="form-control">
                                    <option v-for=" (os, index) in LIST_HEDIEUHANH" :key="index"
                                        :selected="os.ID == HEDIEUHANH">
                                        {{ os.TEN }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <label for="inputState">Thương hiệu</label>
                                <select class="form-control">
                                    <option v-for="(brand, index) in LIST_THUONGHIEU" :key="index"
                                        :selected="brand.ID == THUONGHIEU">
                                        {{ brand.TEN }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <label for="inputState">CPU</label>
                                <select class="form-control">
                                    <option v-for=" (cpu, index) in LIST_CPU" :key="index" :selected="cpu.ID == CPU">
                                        {{ cpu.TEN }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <base-input v-model="THONGTINCPU" type="text" label="Thông tin cpu" required>
                                </base-input>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <base-input v-model="GIA" type="number" label="Giá sản phẩm" required>
                                </base-input>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label for="inputState">LOẠI Ổ CỨNG</label>
                                <select class="form-control">
                                    <option v-for=" (drive, index) in LIST_OCUNG" :key="index"
                                        :selected="drive.ID == OCUNG">
                                        {{ drive.TEN }}
                                    </option>
                                </select>
                            </div>
                            <div class="col-md-8">
                                <base-input v-model="DUNGLUONGOCUNG" type="number" min="1" max="500"
                                    label="dung lượng ổ cứng (GB)" required>
                                </base-input>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label for="inputState">LOẠI RAM</label>
                                <select class="form-control">
                                    <option v-for=" (ram, index) in LIST_RAM" :key="index" :selected="ram.ID == RAM">
                                        {{ ram.TEN }}
                                    </option>
                                </select>
                            </div>
                            <div class="col-md-8">
                                <base-input v-model="DUNGLUONGRAM" type="number" min="1" max="500"
                                    label="dung lượng ram (GB)" required>
                                </base-input>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <label for="formFile" class="form-label">Ảnh sản phẩm </label>

                                <base-input v-model="ANH" @change="onFileChange" type="file">
                                </base-input>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Mô tả</label>
                                    <textarea v-model="MOTA" class="form-control" id="exampleFormControlTextarea1"
                                        rows="6"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-7">
                                <button @click.prevent="updateSP()" type="submit"
                                    class="btn btn-primary btn-fill float-right">
                                    Sửa sản phẩm
                                </button>
                            </div>
                        </div>
                    </form>
                </card>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import BaseInput from '../../../components/Inputs/BaseInput.vue';
export default {
    components: { BaseInput },
    data() {
        return {
            TEN: null,
            HEDIEUHANH: null,
            THUONGHIEU: null,
            CPU: null,
            THONGTINCPU: null,
            GIA: null,
            OCUNG: null,
            DUNGLUONGOCUNG: null,
            RAM: null,
            DUNGLUONGRAM: null,
            MOTA: null,
            ANH: null,
            ANHCU: null,
            LIST_HEDIEUHANH: [],
            LIST_THUONGHIEU: [],
            LIST_CPU: [],
            LIST_OCUNG: [],
            LIST_RAM: [],
        }
    },
    mounted() {
        this.findSP();
        this.listBrand();
        this.listCpu();
        this.listRam();
        this.listDrive();
        this.listOS();
    },
    methods: {
        onFileChange(e) {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append("file", file);

            axios
                .post("http://localhost:3000/upload", formData)
                .then(res => {
                    alert(res.data.msg);
                    this.ANH.name = res.data.name;
                    console.log(res)
                }).catch(err => {
                    console.log(err);
                });

        },
        async listBrand() {
            const result = await axios.get("http://localhost:3000/product/get-all-brand");
            this.LIST_THUONGHIEU = result.data;
        },
        async listCpu() {
            const result = await axios.get("http://localhost:3000/product/get-all-cpu");
            this.LIST_CPU = result.data;
        },
        async listRam() {
            const result = await axios.get("http://localhost:3000/product/get-all-ram");
            this.LIST_RAM = result.data;
        },

        async listDrive() {
            const result = await axios.get("http://localhost:3000/product/get-all-drive");
            this.LIST_OCUNG = result.data;
        },

        async listOS() {
            const result = await axios.get("http://localhost:3000/product/get-all-os");
            this.LIST_HEDIEUHANH = result.data;
        },
        async findSP() {
            const token = localStorage.token;
            const result = await axios.get(`http://localhost:3000/product/find-spec-product-by-id/${this.$route.params.id}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token} `
                }
            });
            this.TEN = result.data[0].TEN;
            this.HEDIEUHANH = result.data[0].HEDIEUHANH_ID;
            this.THUONGHIEU = result.data[0].THUONGHIEU_ID;
            this.CPU = result.data[0].CPU_ID;
            this.THONGTINCPU = result.data[0].THONGTINCPU;
            this.GIA = result.data[0].GIA;
            this.OCUNG = result.data[0].OCUNG_ID;
            this.DUNGLUONGOCUNG = result.data[0].DUNGLUONGOCUNG;
            this.RAM = result.data[0].RAM_ID;
            this.DUNGLUONGRAM = result.data[0].DUNGLUONGRAM;
            this.MOTA = result.data[0].MOTA;
            this.ANHCU = result.data[0].ANH;
            // console.log(result.data[0])
        },
        async updateSP() {
            if (this.ANH == null) {
                this.ANH = this.ANHCU;
            }
            const token = localStorage.token;
            const result = await axios.put(`http://localhost:3000/product/update-product/${this.$route.params.id}`,
                {
                    TEN: this.TEN,
                    HEDIEUHANH_ID: this.HEDIEUHANH,
                    THUONGHIEU_ID: this.THUONGHIEU,
                    CPU_ID: this.CPU,
                    THONGTINCPU: this.THONGTINCPU,
                    GIA: this.GIA,
                    OCUNG_ID: this.OCUNG,
                    DUNGLUONGOCUNG: this.DUNGLUONGOCUNG,
                    RAM_ID: this.RAM,
                    DUNGLUONGRAM: this.DUNGLUONGRAM,
                    MOTA: this.MOTA,
                    ANH: this.ANH
                }, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token} `
                }
            });
            if (result.data === "SỬA THÀNH CÔNG") {
                alert(result.data);
                this.$router.push('/quanlysanpham/sanpham');
            }
            else {
                alert(result.data);
            }
        }
    }
}
</script>