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
          <h1 class="mt-5 mb-2 text-white">Sua thong tin</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
      <div class="mx-auto col-xl-4 col-lg-5 col-md-7">
        <div class="card z-index-0">
          <div class="pt-4 text-center card-header">
            <h5>Update</h5>
          </div>
          <tbody>
            <!-- <div class="card-body"> -->
            <tr v-for="users in alluser" v-bind:key="users.user_id">
              <div class="mb-3">
                 <input v-model="user_name" type="text" placeholder="{{ users.user_name}}" />
              </div>
              <div class="mb-3">
                <input v-model="user_email" type="email" placeholder="{{ users.user_email}}"/>
              </div>
              <div class="mb-3">
                <input type="text" v-model="user_pass" placeholder="{{ users.user_pass}}"/>
              </div>
              <div class="mb-3">
                <input v-model="user_phone" type="text" placeholder="{{ users.user_phone}}"/>
              </div>
              <div class="mb-3">
                <input v-model="user_address" type="text" placeholder="{{ users.user_address}}"/>
              </div>
              <div class="text-center">
                <button style="background-color: white" v-on:click="editUser(users.user_id)"><a href="/Nhanvien">Luu Update</a></button>
              </div>
                </tr>
                <!-- </div> -->
          </tbody>          
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
  name: "EditNhanvien",
  data() {
    return {  
         alluser:'',
      users:null
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
  mounted(){
    const res =  axios.get(`http://localhost:3000/user/getAllUsr/1`)
    //  console.log(res=>{data});
     res.then((res)=>{
        this.alluser= res.data.data
        console.log(res.data.data[1])
      })
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
      async editUser(user_id) {
        axios.put('http://localhost:3000/user/update/'+user_id).then((result)=>{
      console.warn(result)
    })
      },

  }
};
</script>
