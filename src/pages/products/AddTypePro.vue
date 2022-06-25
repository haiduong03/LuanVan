<template>
 <div class="mt-3" style="">
        <b-card header="Thêm loại sản phẩm" header-tag="header">
            <div style="margin-top: 20px; border: 2px solid black">
    <b-form style="margin: 10px">
      <b-form-group id="input-group-2" label="Tên loại:" label-for="input-2">
        <b-form-input v-model="list_name" type="text"  required></b-form-input>
      </b-form-group>

      <!-- <b-form-group id="input-group-2" label="Trạng thái:" label-for="input-2">
        <b-form-input v-model="list_status" id="input-2" type="text"  required></b-form-input>
      </b-form-group> -->

 


      <div style="margin-top: 10px">
      <router-link to="/products/listpro" style="text-decoration: none; color: inherit">
        <b-button v-on:click="addList()" variant="primary">Xác nhận</b-button>
        &nbsp;</router-link>
        <router-link to="/products/listpro" style="text-decoration: none; color: inherit">
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
name: "AddList",
  data() {
    return {  
      list_name: "",
      // list_status: "",

    };
  },
  methods: {
    async addList() {
       const token = localStorage.token;
    let result = await axios.post("http://localhost:3000/product/add-list-product",
    {
            list_name: this.list_name,
            // list_status: this.list_status,
  },
    {
        headers: {
          "Access-Control-Allow-Origin": "*",
          // "Content-type": "Application/json",
          "Authorization": `Bearer ${token}`
        }
      },
       
  );
        console.log(result);
    },
  }
 
}
</script>