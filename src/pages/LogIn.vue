<template>
  <section>
    <div class="page-header min-vh-75">
      <div class="container">
        <div class="row">
          <div class="mx-auto col-xl-6 col-lg-5 col-md-6 d-flex flex-column">
            <div class="mt-8 card card-plain">
              <div class="pb-5 card-header text-start">
                <div class="center">
                <h1>Đăng nhập Admin</h1>
                </div>
                <b-form methods="POST" @submit.prevent="login">
                  <b-form-group id="input-group-1" label="Địa chỉ email:" label-for="input-1"
                    description="Vui lòng nhập đúng định dạng: email@gmail.com">
                    <b-form-input id="input-1" type="email" placeholder="Nhập email" required  v-model="user_email"> 
                    </b-form-input>
                  </b-form-group>
                  <b-form-group id="input-group-2" label="Mật khẩu :" label-for="input-2">
                    <b-form-input id="input-2" type="password" placeholder="Mật khẩu" required  v-model="user_pass"></b-form-input>
                  </b-form-group>
                  <router-link :to="`/users`" >
                  <b-button class="container" type="submit" variant="primary">Đăng nhập               
                  </b-button>                
                  </router-link>
                  <b-button class="container" type="reset" variant="danger">Hủy bỏ</b-button>
                </b-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from  'axios'
export default {
  name: "LogIn",
  data(){
    return {
      user_email: "",
      user_pass: "",
    };
  },
  methods:{
    async login(){
    const res = await axios.post("http://localhost:3000/user/login", {
        user_email: this.user_email,
        user_pass: this.user_pass,
      });
      console.log(res.data.key);
       localStorage.setItem('token', res.data.key)
this.$swal({
  position: 'top-end',
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 5000
})


    }
  },
};
</script>

<style>
</style>