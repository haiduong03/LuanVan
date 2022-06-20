<template>
  <div style="margin-top: 20px; border: 1px solid green">
    <b-form style="margin: 10px">
      <b-form-group>
        <b-form-input v-model="form.user_email" type="email"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.user_phone" placeholder="Enter name" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.user_name" placeholder="Enter name" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.user_address" placeholder="Enter name" required></b-form-input>
      </b-form-group>

      <div style="margin-top: 10px">
        <b-button @click.prevent="onUpdate" variant="primary">Ghi dữ liệu</b-button>
        &nbsp;
        <router-link to="/users" style="text-decoration: none; color: inherit">
          <b-button type="reset" variant="danger">Thoát</b-button>
        </router-link>
      </div>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
    //   data: [],
    //   user: [],
    //   form: {
    //     user_email: null,
    //     user_phone: null,
    //     user_address: null,
    //    user_name: null,
      }
  },

  mounted() {
    this.del();
  },

  methods: {
    async del() {
      //console.log(this.$route.params.id)
         const token = localStorage.token; 
      this.data = await axios.delete(
        `http://localhost:3000/user/remove/${this.$route.params.id}`,{
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
           }
      );
      //console.log(this.data)
      //console.log(this.data.data[0])
  },
  }
}
</script>