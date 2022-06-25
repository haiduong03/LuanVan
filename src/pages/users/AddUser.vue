<template>
 <div class="mt-3" style="">
        <b-card header="Thêm người dùng" header-tag="header">
            <div style="margin-top: 20px; border: 2px solid black">
    <b-form style="margin: 10px">
      <b-form-group id="input-group-2" label="Họ&Tên:" label-for="input-2">
        <b-form-input v-model="user_name" type="email" placeholder="Nhập đầy đủ họ và tên" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Địa chỉ email:" label-for="input-2">
        <b-form-input v-model="user_email" id="input-2" type="text" placeholder="test@gmail.com" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Mật khẩu:" label-for="input-2"
        description="Mật khẩu ít nhất 8 kí tự gồm : chữ hoa, chữ thường, ít nhất 2 chữ số, không có khoảng trắng."
      >
        <b-form-input v-model="user_pass" id="input-2" type="password" placeholder="Mật khẩu gồm 8 kí tự " required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Số điện thoại:" label-for="input-2">
        <b-form-input v-model="user_phone" id="input-2" type="text" placeholder="09xx" required></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2" label="Địa chỉ:" label-for="input-2">
        <b-form-input v-model="user_address" id="input-2" type="text" placeholder="Enter name" required></b-form-input>
      </b-form-group>


      <div style="margin-top: 10px">
      <router-link to="/users" style="text-decoration: none; color: inherit">
        <b-button v-on:click="register()" variant="primary">Xác nhận</b-button>
        &nbsp;</router-link>
        <router-link to="/users" style="text-decoration: none; color: inherit">
          <b-button type="reset" variant="danger">Thoát</b-button>
        </router-link>
      </div>
    </b-form>
  </div>
        </b-card>
    </div>
</template>

<script>
import axios from "axios";
export default {
name: "AddUser",
  data() {
    return {  
      user_name: "",
      user_email: "",
      user_pass: "",
      user_phone: "",
      user_address: "",
      user_type: "1",
    };
  },
  methods: {
    async register() {
    let result = await axios.post("http://localhost:3000/user/create-usr", {
            user_name: this.user_name,
            user_email: this.user_email,
            user_pass: this.user_pass,
            user_phone: this.user_phone,
            user_address: this.user_address,
            
            user_type: 1,
  },
  );
        console.log(result);
    },
 

  }
 
}
</script>