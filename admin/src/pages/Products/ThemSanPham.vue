<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <card>
                        <h4 slot="header" class="card-title">Thêm sản phẩm mới</h4>
                        <form enctype="multipart/form-data">
                            <div class="row">
                                <div class="col-md-6">
                                    <base-input type="text" label="Tên sản phẩm" placeholder="Nhập tên sản phẩm"
                                        v-model="TEN" required>
                                    </base-input>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputState" required>Hệ điều hành</label>
                                    <select v-model="HEDIEUHANH" id="inputState" class="form-control" required>
                                        <option value="Window 11">Window 11</option>
                                        <option value="Window 10">Window 10</option>
                                        <option value="Window 8">Window 8</option>
                                        <option value="Windows 7">Windows 7</option>
                                        <option value="MACOS">MAC OS</option>
                                        <option value="Linux">Linux</option>
                                    </select>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="inputState">Thương hiệu</label>
                                    <select v-model="THUONGHIEU" class="form-control" required>
                                        <option value="DELL">DELL</option>
                                        <option value="LENOVO">LENOVO</option>
                                        <option value="ASUS">ASUS</option>
                                        <option value="ACER">ACER</option>
                                        <option value="MACBOOK">MACBOOK</option>
                                        <option value="HP">HP</option>
                                        <option value="MSI">MSI</option>
                                        <option value="RAZER">RAZER</option>
                                        <option value="SAMSUNG">SAMSUNG</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <label for="inputState">CPU</label>
                                    <select v-model="CPU" class="form-control" required>
                                        <option value="i3">i3</option>
                                        <option value="i5">i5</option>
                                        <option value="i7">i7</option>
                                        <option value="i9">i9</option>
                                        <option value="Xeon">Xeon</option>
                                        <option value="Ryzen3">Ryzen 3</option>
                                        <option value="Ryzen5">Ryzen 5</option>
                                        <option value="Ryzen7">Ryzen 7</option>
                                        <option value="Ryzen9">Ryzen 9</option>
                                        <option value="Threadripper">Threadripper</option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <base-input v-model="THONGTINCPU" type="text" label="Thông tin cpu" required>
                                    </base-input>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <base-input v-model="GIA" type="number" label="Giá sản phẩm" required>
                                    </base-input>
                                </div>
                                <div class="col-md-2">
                                    <label for="inputState">LOẠI Ổ CỨNG</label>
                                    <select v-model="OCUNG" id="inputState" class="form-control" required>
                                        <option value="SSD">SSD</option>
                                        <option value="HDD">HDD</option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <!-- <base-input v-model="DUNGLUONGOCUNG" type="number" min="1" max="500"
                                        label="dung lượng ổ cứng" required>
                                    </base-input> -->
                                    <label for="inputState">DUNG LƯỢNG Ổ CỨNG</label>
                                    <select v-model="DUNGLUONGOCUNG" id="inputState" class="form-control" required>
                                        <option value="128">128GB</option>
                                        <option value="240">240GB</option>
                                        <option value="256">256GB</option>
                                        <option value="500">500GB</option>
                                        <option value="1">1TB</option>
                                        <option value="2">2TB</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="inputState">LOẠI RAM</label>
                                    <select v-model="RAM" id="inputState" class="form-control" required>
                                        <option value="DDR3">DDR3</option>
                                        <option value="DDR3L">DDR3L</option>
                                        <option value="DDR4">DDR4</option>
                                        <option value="DDR5">DDR5</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <label for="inputState">DUNG LƯỢNG RAM</label>
                                    <select v-model="DUNGLUONGRAM" id="inputState" class="form-control" required>
                                        <option value="4">4GB</option>
                                        <option value="8">8GB</option>
                                        <option value="12">12GB</option>
                                        <option value="16">16GB</option>
                                        <option value="32">32GB</option>
                                        <option value="64">64GB</option>
                                    </select>
                                </div>
                                <!-- <div class="col-md-6">
                                    <base-input v-model="SOLUONGSP" type="number" label="Số lượng sản phẩm"
                                        required>
                                    </base-input>
                                </div> -->
                                <div class="col-md-6">
                                    <label for="formFile" class="form-label">Ảnh sản phẩm</label>
                                    <base-input v-model="ANH" @change="onFileChange" type="file">
                                    </base-input>
                                </div>
                                <image src="http://localhost:3000/${ANH}" />
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
                            <div class="col-6">
                                <div class="text-center" style="text-align: center">
                                    <button @click.prevent="themsp()" type="submit"
                                        class="btn btn-primary btn-fill float-right">
                                        Xác nhận
                                    </button>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </form>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { required, minLength, between } from 'vuelidate/lib/validators'
import axios from "axios";
import BaseInput from '../../components/Inputs/BaseInput.vue';
export default {
    components: { BaseInput },
    data() {
        return {
            // form: {
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
            ANH: ""
            // },
        };
    },
    validations: {
        // form: {
        TEN: {
            required,
            minLength: minLength(6),
        },
        // },
    },
    // mounted() {
    //     this.solieu();
    // },
    methods: {
        onFileChange(e) {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append("file", file);

            axios
                .post("http://localhost:3000/upload", formData)
                .then(res => {
                    alert(res.data.msg);
                    this.ANH = res.data.name;
                }).catch(err => {
                    console.log(err);
                });
        },
        // async solieu() {
        //     const token = localStorage.token;
        //     this.data = await axios.get(`http://localhost:3000/product/get-all-brand-active`, {
        //         headers: {
        //             "Access-Control-Allow-Origin": "*",
        //             // "Content-type": "Application/json",
        //             "Authorization": `Bearer ${token}`
        //         }
        //     });
        //     console.log(this.data.data);
        //     //  console.log(this.data.data.data);
        //     this.danhSachThuongHieu = this.data.data;
        // },
        themsp() {
            // const data = new FormData();
            // const data = new URLSearchParams();
            // data.append("TEN", this.TEN);
            // data.append("HEDIEUHANH", this.HEDIEUHANH);
            // data.append("THUONGHIEU", this.THUONGHIEU);
            // data.append("CPU", this.CPU);
            // data.append("THONGTINCPU", this.THONGTINCPU);
            // data.append("GIA", this.GIA);
            // data.append("OCUNG", this.OCUNG);
            // data.append("DUNGLUONGOCUNG", this.DUNGLUONGOCUNG);
            // data.append("RAM", this.RAM);
            // data.append("DUNGLUONGRAM", this.DUNGLUONGRAM);
            // data.append("MOTA", this.MOTA);
            // data.append("ANH", this.ANH);

            // console.log(Object.fromEntries(data));

            const token = localStorage.token;
            const result = axios.post("http://localhost:3000/product/create-product",
                {
                    TEN: this.TEN,
                    HEDIEUHANH: this.HEDIEUHANH,
                    THUONGHIEU: this.THUONGHIEU,
                    CPU: this.CPU,
                    THONGTINCPU: this.THONGTINCPU,
                    GIA: this.GIA,
                    OCUNG: this.OCUNG,
                    DUNGLUONGOCUNG: this.DUNGLUONGOCUNG,
                    RAM: this.RAM,
                    DUNGLUONGRAM: this.DUNGLUONGRAM
                    // {}
                    // nam: "áđắ"
                }
                , {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        // "Content-type": "aplication/x-www-form-urlencoded",
                        // "Content-Type": "multipart/form-data",
                        "Authorization": `Bearer ${token}`
                    }
                });
        }

        //         //         .then(
        //         //       response => {
        //         // console.log(response)

        //         //  alert("success");
        //         //       });

        //     } catch(error) {
        //         console.log(error);
        //     }
        // },

        // async onCreate() {
        //   const token = localStorage.token;
        //   let result = await axios.post("http://localhost:3000/admin/create-adm",
        //     {
        //       headers: {
        //         "Access-Control-Allow-Origin": "*",
        //         // "Content-type": "Application/json",
        //         "Authorization": `Bearer ${token}`
        //       }
        //     },
        //     {
        //       TEN: this.form.TEN,
        //       EMAIL: this.form.EMAIL,
        //       PASS: this.form.PASS,
        //       SODIENTHOAI: this.form.SODIENTHOAI,
        //       DIACHI: this.form.DIACHI,
        //       GIOITINH: this.form.GIOITINH,

        //     },

        //   );
        //   console.log(result);
        //    this.$router.push('/quanlyuser/nhanvien')
        // },
    }
};
</script>