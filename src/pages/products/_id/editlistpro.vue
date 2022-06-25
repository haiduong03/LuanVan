<template>
  <b-card header="Chỉnh sửa loại sản phẩm " header-tag="header">
    <div style="margin-top: 20px; border: 2px solid black">
      <b-form style="margin: 10px">
        <!-- <b-form-group id="input-group-2" label="Mã:" label-for="input-2">
          <b-form-input v-model="form.user_name" type="text"></b-form-input>
        </b-form-group> -->

       
        <b-form-group id="input-group-2" label="Tên loại:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.list_name" placeholder="Enter name" required></b-form-input>
        </b-form-group>

        <!-- <b-form-group id="input-group-2" label="Status:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.list_status" placeholder="Enter name" required></b-form-input>
        </b-form-group> -->

        <div style="margin-top: 10px">
          <b-button @click.prevent="onUpdate()" variant="primary">Xác nhận</b-button>
          &nbsp;
          <router-link to="/products/listpro" style="text-decoration: none; color: inherit">
            <b-button type="reset" variant="danger">Thoát</b-button>
          </router-link>
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
      list: [],
      form: {
        list_name: null,
        // list_status: null,
        // user_phone: null,
        // user_address: null,
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
        `http://localhost:3000/product/find-list-id/${this.$route.params.id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          // "Content-type": "Application/json",
          "Authorization": `Bearer ${token}`
        }
      }
      );
      this.list = this.data.data[0];
      this.form.list_name = this.list.list_name;
      // this.form.list_status = this.list.list_status;
      // this.form.user_phone = this.user.user_phone;
      // this.form.user_address = this.user.user_address;
    },
    // async onUpdate() {

    //   const token = localStorage.token;
    //   console.log(token)
    //   const url =`http://localhost:3000/user/update-usr/${this.$route.params.id}`

    //   await axios.put( url,
    //   this.form,
    //   {
    //       headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         // "Content-type": "Application/json",
    //         "Authorization": `Bearer ${token}`
    //        }
    //     },
    //     // this.form,
    //   );
    //   alert("updated!");
    // },

  },
};
</script>