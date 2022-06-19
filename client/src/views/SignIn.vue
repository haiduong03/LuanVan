<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar is-blur="blur blur-rounded my-3 py-2 start-0 end-0 mx-4 shadow" btn-background="bg-gradient-success"
          :dark-mode="true" />
      </div>
    </div>
  </div>
  <main class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-8 card card-plain">
                <div class="pb-0 card-header text-start">
                  <h3 class="font-weight-bolder text-success text-gradient">
                    Đăng Nhập
                  </h3>
                  <p class="mb-0">Nhập email and mật khẩu để đăng nhập</p>
                </div>
                <div class="card-body">



                  <form role="form" class="text-start" methods="POST" @submit.prevent="login">

                   <!-- <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text"  readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" >
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword">
    </div>
  </div> -->

                    <div>
                    <label >Email</label>
                    <input id="email" type="email" placeholder="Email" name="email" v-model="user_email" />
                    </div>
                    <div >
                    <label >Mật khẩu</label>
                   <input id="password" type="password" placeholder="Mật khẩu" name="password" v-model="user_pass"/>
                  </div>
                    <div class="text-center">
                       
                      <button class="my-4 mb-2" variant="gradient" color="success" full-width ><a href="/dashboard">Đăng nhập</a>
                      </button>                   
                    </div>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Bạn không có tài khoản?
                    <router-link :to="{ name: 'Sign Up' }" class="text-success text-gradient font-weight-bold">Đăng ký
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="top-0 oblique position-absolute h-100 d-md-block d-none me-n8">
                <div class="bg-cover oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" :style="{
                  backgroundImage:
                    'url(' +
                    require('@/assets/img/curved-images/curved9.jpg') +
                    ')',
                }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer />
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
const body = document.getElementsByTagName("body")[0];
import { mapMutations } from "vuex";
// eslint-disable-next-line no-unused-vars
import axios from "axios"
import console from "console";

export default {
  name: "SignIn",
  data(){
    return {
      user_email: "",
      user_pass: "",
      res:'',
    };
  },
  components: {
    Navbar,
    AppFooter,
  },
  created() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.add("bg-gray-100");
  },
  methods: {
     ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
     
    async login(){
      // let res= await axios.get("http://localhost:3000/user/login", {
      //   user_email: this.user_email,
      //   user_pass: this.user_pass,
      // });
      // console.warn(res);
      const res = await axios.post("http://localhost:3000/user/login", {
        user_email: this.user_email,
        user_pass: this.user_pass,
      });
      console.log(res.data.key);

       localStorage.setItem('token', res.data.key);
      
    }
  },
};
</script>
