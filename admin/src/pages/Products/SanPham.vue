<template>
  <div class="content">
    <div class="container-fluid">
<<<<<<< HEAD
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
            <template slot="header">
              <h5 class="card-title" style="font-weight: bold">
                Danh sách sản phẩm
              </h5>
            </template>

            <div style="text-align: left">
              <router-link to="/quanlysanpham/themsanpham">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary btn-fill float-right">
                  Thêm sản phẩm
                </button>
              </router-link>
            </div>
            <div></div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th style="text-align: center">STT</th>
                  <th style="text-align: center">Hình</th>
                  <th style="text-align: center">Tên</th>
                  <th style="text-align: center">Thương hiệu</th>
                  <th style="text-align: center">Giá</th>
                  <th style="text-align: center">Trạng thái</th>
                  <th style="text-align: center"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(use, index) in users" :key="index">
                 <template v-if="use.LOAI == 1">
                  <td style="text-align: center">{{ index + 1 }}</td>
                  <td><img class="img-thumbnail" src="img/faces/laptop-1.jpg" alt="..."/></td>
                  <td>{{ use.TEN }}</td>
                  <td>{{ use.SODIENTHOAI }}</td>
                  <td>{{ use.DIACHI }}</td>
                  <template v-if="use.TRANGTHAI == 0">
                                    <td style="text-align: left">Hoạt động</td>
                                </template>
                                <template v-else>
                                    <td style="text-align: left">Không hoạt động</td>
                                </template>
                  <td style="text-align: center">
                    <router-link :to="`/quanlyuser/${use.ID}/chinhsuaNV`">
                      <button type="button" class="btn btn-primary btn-fill float-righ">
                        Sửa
                      </button>
                    </router-link>
                    &nbsp;
                    <button @click.prevent="onDel(use.ID)" type="button" class="btn btn-danger btn-fill float-righ">
=======
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
                <!-- <th style="text-align: center">Hệ điều hành</th>
                <th style="text-align: center">Cpu</th>
                <th style="text-align: center">Ram</th>
                <th style="text-align: center">Ổ cứng</th> -->
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
                <!-- <td>{{ product.HEDIEUHANH }}</td>
                <td>{{ product.CPU + " " + product.THONGTINCPU }}</td>
                <td>{{ product.OCUNG + " " + product.DUNGLUONGOCUNG }}GB</td>
                <td>{{ product.RAM + " " + product.DUNGLUONGRAM }}GB</td> -->
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
>>>>>>> ec144a17e2507032e38485aea96b37e404076f88
                      Xóa
                    </button>
                  </td>
                </template>
                  <template v-else></template>
                </tr>
              </tbody>
            </table>
            <div style="text-align: center">
                            <jw-pagination :pageSize="2" :items="users" @changePage="onChangePage"></jw-pagination>
                        </div>
          </card>
        </div>
      </div>
    </div>
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
      data: [],
      users: [],
      pageOfitems: [],
    };
  },
  mounted() {
    this.solieu();
  },

  methods: {
    onChangePage(pageOfitems) {
            this.pageOfitems = pageOfitems;
        },
    async solieu() {
      const token = localStorage.token;
      this.data = await axios.get(`http://localhost:3000/admin/get-all-adm`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          // "Content-type": "Application/json",
          "Authorization": `Bearer ${token}`
        }
      });
<<<<<<< HEAD
      console.log(this.data);
     // console.log(this.data.data.data);
      this.users = this.data.data;
=======
      this.products = result.data;
      // console.log(result.data)
>>>>>>> ec144a17e2507032e38485aea96b37e404076f88
    },

    async onDel(ID) {
      const token = localStorage.token;
      axios.delete(`http://localhost:3000/admin/remove-adm/${ID}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          // "Content-type": "Application/json",
          "Authorization": `Bearer ${token}`
        }
      }).then((result) => {
        console.warn(result);
      });

    },
  }
}
</script>
<style>
</style>
