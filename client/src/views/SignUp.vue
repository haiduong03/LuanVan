<template>
  <navbar btn-background="bg-gradient-primary" />
  <div class="pt-5 m-3 page-header align-items-start min-vh-50 pb-11 border-radius-lg" :style="{
    backgroundImage:
      'url(' + require('@/assets/img/curved-images/curved6.jpg') + ')',
  }">
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container">
      <div class="row justify-content-center">
        <div class="mx-auto text-center col-lg-5">
          <h1 class="mt-5 mb-2 text-white">Đăng ký!</h1>
          <p class="text-white text-lead">
            Đăng ký để trở thành thành viên và nhận nhiều ưu đãi.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
      <div class="mx-auto col-xl-4 col-lg-5 col-md-7">
        <div class="card z-index-0">
          <div class="pt-4 text-center card-header">
            <h5>Đăng ký</h5>
          </div>
          <div class="card-body">
            <!-- <form  role="form"  methods="POST"> -->
               <!-- methods="POST"@submit.prevent="register"  -->
              <div class="mb-3">
                <!-- <vsud-input :id="user_name" :name="user_name" type="text" :value="user_name" placeholder="Họ&Tên" v-model="user_name"  aria-label="Name" />
                 -->
                 <input v-model="user_name" type="text" placeholder="Tên" />
                 <!-- class="form-control" -->
                 <!-- :id="user_name" :name="user_name" type="text" placeholder="Tên"  aria-label="Tên" -->
              </div>
              <div class="mb-3">
                <input v-model="user_email" type="email" placeholder="Email"/>
                <!-- <input :id="user_email" :name="user_email" type="email" placeholder="Email" v-model="user_email" aria-label="Email" /> -->
              </div>
              <div class="mb-3">
             <!-- <input v-model="user_pass"  type="password" v-bind="user_pass" placeholder="Mật khẩu"/> -->
                <input type="password" v-model="user_pass" placeholder="Mật khẩu"/>
                <!-- <input :id="user_pass" :name="user_pass" type="password" placeholder="Mật khẩu"  aria-label="Password" /> -->
              </div>
              <div class="mb-3">
                <input v-model="user_phone" type="text" placeholder="Số điện thoại"/>
                <!-- <input :id="user_phone" :name="user_phone" type="text" placeholder="Số điện thoại"  aria-label="Phone" /> -->
              </div>
              <div class="mb-3">
                <input v-model="user_address" type="text" placeholder="Địa chỉ"/>
                <!-- <input :id="user_address" :name="user_address" type="text" placeholder="Địa chỉ" aria-label="Adress" /> -->
              </div>
              <div class="text-center">
                <!-- <button color="dark" full-width variant="gradient" class="my-4 mb-2" @click="register">Đăng ký</button> -->
              <button v-on:click="register()"><a href="/Tables">Đăng ký</a></button>
              </div>
              <p class="text-sm mt-3 mb-0">
                Bạn đã có tài khoản?
                <router-link :to="{ name: 'Sign In' }" class="text-dark font-weight-bolder">
                  Đăng nhập
                </router-link>
              </p>
            <!-- </form> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <app-footer />
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
const body = document.getElementsByTagName("body")[0];
import { mapMutations } from "vuex";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
export default {
  //name: "SignupBasic",
  name: "SignUp",
  data() {
    return {  
      user_name: "",
      user_email: "",
      user_pass: "",
      user_phone: "",
      user_address: "",
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
    async register() {
      debugger
  let result = await axios.post("http://localhost:3000/user/createUsr", {
            user_name: this.user_name,
            user_email: this.user_email,
            user_pass: this.user_pass,
            user_phone: this.user_phone,
            user_address: this.user_address,
  },
    {headers: {
            "Access-Control-Allow-Origin" : "*",
            // "Content-type": "Application/json",
            // "Authorization": `Bearer ${token}`
            }   
        }
  
  );
  
        console.log(result);
    },

  }
};
</script>
