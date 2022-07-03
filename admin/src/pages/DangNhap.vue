<template>
    <div class="page-header min-vh-75">
        <div class="container">
            <div class=" row">
                <div class="mx-auto col-xl-6 col-lg-5 col-md-6 d-flex flex-column">
                    <div class="mt-8 card card-plain">
                        <div class="pb-5 card-header text-start">
                            <div class="center" style="margin-top: 20px; border: 1px solid black;border-radius:1%">
                                <card>
                                    <h4 slot="header" class="card-title" style="text-align: center; font-weight: bold">
                                        Đăng nhập</h4>
                                    <form>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <base-input type="email" label="Email*" placeholder="abc@gmail.com"
                                                    v-model="EMAIL">
                                                </base-input>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <base-input v-model="PASS" type="password" label="Mật khẩu*"
                                                    placeholder="8 kí tự bao gồm chữ hoa và thường">
                                                </base-input>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5">
                                                <button @click.prevent="login()" type="submit"
                                                    class="btn btn-primary btn-fill float-right">
                                                    Đăng nhập
                                                </button>
                                            </div>
                                            <div class="col-4">
                                                <button type="reset" class="btn btn-danger btn-fill float-right">
                                                    Huỷ bỏ
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
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
// import { info } from "console";
export default {
    data() {
        return {
            EMAIL: null,
            PASS: null,
        };
    },
    methods: {
        async login() {
            if (!this.EMAIL || !this.PASS) {
                alert("Vui lòng nhập đầy đủ thông tin")
            }
            else {
                const result = await axios.post("http://localhost:3000/user/login", {
                    EMAIL: this.EMAIL,
                    PASS: this.PASS,
                });
                if (result.data.key) {
                    localStorage.setItem('token', result.data.key)
                    localStorage.setItem('admin', this.EMAIL)
                    this.$router.push('/');
                    alert("Đăng nhập thành công !!")
                } else {
                    alert("Sai mật khẩu hoặc email không đúng !!")
                }
            }
        },
    }
}
</script>