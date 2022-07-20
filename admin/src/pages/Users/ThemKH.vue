<template>
    <div class="content">
        <!-- <div class="container-fluid"> -->
        <div class="row">
            <div class="container col-6">
                <card>
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="inputEmail4">Email</label>
                                <input v-model="EMAIL" type="email" class="form-control" id="inputEmail4"
                                    placeholder="abc@gmail.com">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="inputPassword4">Password</label>
                                <input v-model="PASS" type="password" class="form-control" id="inputPassword4">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="inputEmail4">Họ và tên</label>
                                <input v-model="TEN" type="text" class="form-control" id="inputEmail4">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="inputPassword4">Số điện thoại</label>
                                <input v-model="SODIENTHOAI" type="number" class="form-control" id="inputPassword4">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="inputCity">Địa chỉ</label>
                                <input v-model="DIACHI" type="text" class="form-control" id="inputCity">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="inputCity">Giới tính</label>
                                <select v-model="GIOITINH" class="form-control" id="exampleFormControlSelect1">
                                    <option value="0">Nam</option>
                                    <option value="1">Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group col-md-7">
                            <button @click.prevent="createKH()" style="align:center"
                                class="btn btn-primary btn-fill float-right">Thêm
                                mới</button>
                        </div>
                    </form>
                </card>
            </div>
        </div>
        <!-- </div> -->
    </div>
</template>
<script>
import axios from "axios";
// import BaseInput from '../../components/Inputs/BaseInput.vue';
export default {
    components: {
        // BaseInput
    },
    data() {
        return {
            TEN: null,
            EMAIL: null,
            PASS: null,
            SODIENTHOAI: null,
            DIACHI: null,
            GIOITINH: null,
        };
    },
    methods: {
        async createKH() {
            const token = localStorage.token;
            const result = await axios.post("http://localhost:3000/user/create-usr",
                {
                    TEN: this.TEN,
                    EMAIL: this.EMAIL,
                    PASS: this.PASS,
                    SODIENTHOAI: this.SODIENTHOAI,
                    DIACHI: this.DIACHI,
                    GIOITINH: this.GIOITINH,
                },
            );
            if (result.data.message === "ĐĂNG KÍ THÀNH CÔNG") {
                alert("THÊM MỚI THÀNH CÔNG");
                this.$router.push('/quanlyuser/khachhang')
            }
            else {
                alert(result.data.message);
            }
        },
    }
};
</script>