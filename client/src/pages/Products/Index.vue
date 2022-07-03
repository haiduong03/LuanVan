<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h5 class="card-title" style="font-weight: bold">
                Danh sách sản phẩm
              </h5>
            </template>

            <div style="text-align: right">
              <router-link to="/quanlysanpham/addproduct">
                <button class="btn btn-success btn-sm">Thêm sản phẩm</button>
              </router-link>
            </div>
            <div class="col-10" style="border: 1px solid green"></div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th style="text-align: center">STT</th>
                  <th style="text-align: center">Hình ảnh</th>
                  <th style="text-align: center">Tên sản phẩm</th>
                  <th style="text-align: center">Giá</th>
                  <th style="text-align: center">Mã loại</th>
                  <th style="text-align: center">Status</th>
                  <th style="text-align: center">Control</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(product, index) in products" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>
                    <img
                      class="rounded"
                      style="height: 40px; weight: 40px"
                      :src="product.anhdd"
                      alt=""
                    />
                  </td>
                  <td>{{ product.tensp }}</td>
                  <td>{{ product.gia }}</td>
                  <td>{{ product.maloai }}</td>
                  <td>{{ product.status }}</td>
                  <td style="text-align: center">
                    <router-link :to="`/quanlyuser/${product._id}/manage`">
                      <button type="button" class="btn btn-primary btn-sm">
                        Sửa
                      </button>
                    </router-link>

                    &nbsp;
                    <button
                      @click.prevent="onDel(product._id)"
                      type="button"
                      class="btn btn-warning btn-sm"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
      products: [],
    };
  },
  mounted() {
    this.solieu();
  },

  methods: {
    async solieu() {
      this.data = await axios.get(
        `http://10.42.240.200:9999/api/products/getall`
      );
      //console.log(this.data)
      //console.log(this.data.data);
      this.products = this.data.data;
    },
    async onDel(id) {
      await axios.delete(`http://10.42.240.200:9999/api/users/${id}`);
      alert(`deleted! người dùng ${id}`);
    },
  },
};
</script>
<style>
</style>
