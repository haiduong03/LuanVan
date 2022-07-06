<template >
  <div class="content">
    <div class="container-fluid">
      <!-- <div class="row"> -->
      <div class="col-12">
        <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
          <template slot="header">
            <h5 class="card-title" style="font-weight: bold">
              Danh sách sản phẩm
            </h5>
          </template>
          <div style="text-align: left">
            <router-link to="/quanlysanpham/themsanpham">
              <button data-bs-toggle="modal" data-bs-target="#exampleModal"
                class="btn btn-primary btn-fill float-right">
                Thêm sản phẩm
              </button>
            </router-link>
          </div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th style="text-align: center">Hình ảnh</th>
                <th style="text-align: center">Thương hiệu</th>
                <th style="text-align: center">Tên sản phẩm</th>
                <th style="text-align: center">Hệ điều hành</th>
                <th style="text-align: center">Cpu</th>
                <th style="text-align: center">Ram</th>
                <th style="text-align: center">Ổ cứng</th>
                <!-- <th style="text-align: center">Mô tả</th> -->
                <th style="text-align: center">Giá</th>
                <th style="text-align: center">Tình trạng</th>
                <th style="text-align: center">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in pageOfitems" :key="index">
                <td><img class="img-thumbnail" width="150px" v-bind:src="'http://localhost:3000/' + product.ANH + ''"
                    alt="..." />
                </td>
                <td>{{ product.THUONGHIEU }}</td>
                <td>{{ product.TEN }}</td>
                <td>{{ product.HEDIEUHANH }}</td>
                <td>{{ product.CPU + " " + product.THONGTINCPU }}</td>
                <td>{{ product.OCUNG + " " + product.DUNGLUONGOCUNG }}GB</td>
                <td>{{ product.RAM + " " + product.DUNGLUONGRAM }}GB</td>
                <!-- <td>{{ product.MOTA }}</td> -->
                <td>{{ product.GIA | numeral("0,0") }} VND</td>
                <template v-if="product.TRANGTHAI == 0">
                  <td style="text-align: left">Đang bán</td>
                </template>
                <template v-else>
                  <td style="text-align: left">Tạm ngưng</td>
                </template>
                <td>
                  <router-link :to="`/quanlyuser/${product.ID}/chinhsuaNV`">
                    <button type="button" class="btn btn-primary btn-fill float-righ">
                      Sửa
                    </button>
                  </router-link>
                  &nbsp;
                  <template v-if="product.TRANGTHAI == 0">
                    <button @click.prevent="deleteSP(product.ID)" type="button"
                      class="btn btn-danger btn-fill float-righ">
                      Xóa
                    </button>
                    &nbsp;
                  </template>
                  <template v-else>
                    <button @click.prevent="activeSP(product.ID)" type="button"
                      class="btn btn-success btn-fill float-righ">
                      Kích hoạt
                    </button>
                  </template>
                </td>
                <!-- </td> -->
              </tr>
            </tbody>
          </table>
          <div style="text-align: center">
            <jw-pagination :pageSize="10" :items="products" @changePage="onChangePage"></jw-pagination>
          </div>
        </card>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>
<script>
import axios from "axios";
import LTable from "src/components/Table.vue";
import Card from "src/components/Cards/Card.vue";


export default {
  components: {
    LTable,
    Card,
  },
  data() {
    return {
      products: [],
      pageOfitems: [],
    };
  },
  mounted() {
    this.listSP();
  },

  methods: {
    onChangePage(pageOfitems) {
      this.pageOfitems = pageOfitems;
    },

    async listSP() {
      const result = await axios.get(`http://localhost:3000/product/get-all-product`);
      this.products = result.data;
    },

    async deleteSP(id) {
      let text = "BẠN CÓ MUỐN XÓA SẢN PHẨM NÀY";
      if (confirm(text) == true) {
        const token = localStorage.token;
        const result = await axios.delete(`http://localhost:3000/product/remove-product/${id}`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            // "Content-type": "Application/json",
            "Authorization": `Bearer ${token}`
          }
        });
        alert(result.data.message);
        window.location.reload();
      }
    },
    async activeSP(id) {
      let text = "BẠN CÓ MUỐN KÍCH HOẠT SẢN PHẨM NÀY";
      if (confirm(text) == true) {
        const token = localStorage.token;
        const result = await axios.get(`http://localhost:3000/product/active-product/${id}`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            // "Content-type": "Application/json",
            "Authorization": `Bearer ${token}`
          }
        });
        alert(result.data.message);
        window.location.reload();
      }
    }
  }
}
</script>
<style>
</style>
