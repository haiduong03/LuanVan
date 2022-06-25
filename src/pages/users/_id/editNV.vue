<template>
  <b-card header="Chỉnh sửa nhân viên " header-tag="header">
    <div style="margin-top: 20px; border: 2px solid black">
      <b-form style="margin: 10px">
        <b-form-group id="input-group-2" label="Họ & tên:" label-for="input-2">
          <b-form-input v-model="form.user_name" type="text"></b-form-input>
        </b-form-group>

       
        <b-form-group id="input-group-2" label="Số điện thoại:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.user_phone" placeholder="Enter name" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Địa chỉ:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.user_address" placeholder="Enter name" required></b-form-input>
        </b-form-group>

        <div style="margin-top: 10px">
         <router-link :to="`/users`" >
          <b-button @click.prevent="onUpdate()" variant="primary">Xác nhận</b-button></router-link>
          &nbsp;
          
            <b-button type="reset" variant="danger">Thoát</b-button>
          
        </div>
      </b-form>
    </div>
  </b-card>
</template>

<script>

import axios from "axios";
export default {
  data() {
    return {
      data: [],
      user: [],
      form: {
        user_name: null,
      
        user_phone: null,
        user_address: null,
      },
    };
  },

  mounted() {
    this.solieu()
  },

  methods: {
    async solieu() {
      //console.log(this.$route.params.id)
      const token = localStorage.token;
      console.log(token)
      this.data = await axios.get(
        `http://localhost:3000/admin/find-adm-id/${this.$route.params.id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          // "Content-type": "Application/json",
          "Authorization": `Bearer ${token}`
        }
      }
      );
      this.user = this.data.data[0];
      this.form.user_name = this.user.user_name;
      
      this.form.user_phone = this.user.user_phone;
      this.form.user_address = this.user.user_address;
    },
    async onUpdate() {

      const token = localStorage.token;
      console.log(token)
      const url =`http://localhost:3000/admin/update-adm/${this.$route.params.id}`

      await axios.put( url,
      this.form,
      {
          headers: {
            "Access-Control-Allow-Origin": "*",
            // "Content-type": "Application/json",
            "Authorization": `Bearer ${token}`
           }
        },
        // this.form,
      );
      this.Swal.fire(
       'Sửa thành công!',
       'You clicked the button!',
       'success'
)
      
    },
// Swal.fire(
//   'Good job!',
//   'You clicked the button!',
//   'success'
// )
  },
};
</script>