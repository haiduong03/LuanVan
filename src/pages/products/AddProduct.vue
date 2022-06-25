<template>
  <div class="mt-3" style="">
    <b-card header="Thêm sản phẩm" header-tag="header">
      <div style="margin-top: 20px; border: 2px solid black">


        <b-form style="margin: 10px">
          <b-form-group id="input-group-2" label="Tên sản phẩm:" label-for="input-2">
            <b-form-input type="text" v-model="product_name" required></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Loại sản phẩm:" label-for="input-2">
            <b-form-input type="text" v-model="list_id" required></b-form-input>
          </b-form-group>
          <!-- <b-form-group id="input-group-2" label="Loại sản phẩm:" label-for="input-2">
            <b-form-select v-model="selected" :options="options" class="mt-3" value-field="item" text-field="name"
              disabled-field="notEnabled"></b-form-select>
            <div>Selected: <strong>{{ selected }}</strong></div>
          </b-form-group> -->
          <b-form-group id="input-group-2" label="Giá:" label-for="input-2">
            <b-form-input id="input-2" type="text" placeholder="10000" v-model="product_price" required></b-form-input>
          </b-form-group>

          <!-- <b-form-group id="input-group-2" label="Số lượng:" label-for="input-2">
            <b-form-input id="input-2" type="text" placeholder="Số lượng" v-model="product_status" required>
            </b-form-input>
          </b-form-group> -->

          <b-form-group id="input-group-2" label="Mô tả:" label-for="input-2">
            <b-form-textarea id="textarea-rows" placeholder="Tall textarea" v-model="product_decryption" rows="8">
            </b-form-textarea>
          </b-form-group>

          <!-- Styled -->
          <b-form-group id="image" label-for="input-2">
            <!-- <b-button @change="uploadImage()" variant="primary">Xác nhận</b-button> -->
            <b-form-file accept="image/jpeg/*" type="file" label-for="input-2" @change="uploadImage()"
              v-model="product_img">

            </b-form-file>

            &nbsp;
            <div class="mt-3">Selected file: {{ product_img ? product_img.name : '' }}</div>
          </b-form-group>
          <!-- <input type="file"  @click="UploadFile"></input> -->
          <div style="margin-top: 10px">
            <!-- <router-link to="/products" style="text-decoration: none; color: inherit"> -->
            <b-button v-on:click="addPro()" variant="primary">Xác nhận</b-button>
            &nbsp;
            <!-- </router-link> -->
            <router-link to="/products" style="text-decoration: none; color: inherit">
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
  data() {
    return {
      list_id: "",
    
      product_name: "",
      product_price: "",
      product_decryption: "",
      product_img: "",
      // product_status: "",


    };
  },
  methods: {
    uploadImage() {
      const file = document.querySelector('input[type=file]').files[0]
      const reader = new FileReader()

      let rawImg;
      reader.onloadend = () => {
        rawImg = reader.result;
        
      this.product_img=rawImg;
       console.log(rawImg);
      }
      reader.readAsDataURL(file);
      // this.product_img=file+'';
    },

    async addPro() {
      const token = localStorage.token;
      // const img = this.product_img.target.files[0];
      // this.create
      // const reader = new FileReader();
      // axios.post('http://localhost:3000/image/store',{image: this.product_img}).then(response => {
      //             //  console.log(response);
      //           });
      //       // console.log(this.product_img)
      // const img =reader.readAsDataURL(this.product_img.data);      
     // console.log(this.product_img)
      let result = await axios.post("http://localhost:3000/product/create-product",
        {
          list_id: this.list_id,
         
          product_name: this.product_name,
          product_price: this.product_price,
          product_img: this.product_img,
          product_decryption: this.product_decryption,
          // product_status: this.product_status,

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
      // async solieu() {
    //       const token = localStorage.token;
    //       this.data = await axios.get(`http://localhost:3000/product/get-all-list-pro/1`, {
    //           headers: {
    //               "Access-Control-Allow-Origin": "*",
    //               // "Content-type": "Application/json",
    //               "Authorization": `Bearer ${token}`
    //           }
    //       });
    //       console.log(this.data);
    //       console.log(this.data.data.data);
    //       this.users = this.data.data.data;
    //   },
    // UploadFile(product_img){
    // this.UploadFile(file, )
    // const img = event
    // console.log(img)
    // const reader = new FileReader();
    // const res=reader.readAsDataURL(img);
    // console.log(this.product_img.target.files[0])  }
    // },
}
</script>
