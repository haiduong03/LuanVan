<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
            <template slot="header">
              <h5 class="card-title" style="font-weight: bold">
                Danh sách nhân viên
              </h5>
            </template>

            <div style="text-align: left">
              <router-link to="/quanlyuser/themnv">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal"
                  class="btn btn-primary btn-fill float-right">
                  Thêm nhân viên
                </button>
              </router-link>
            </div>
            <div></div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Email</th>
                  <th>Họ tên</th>
                  <th>SĐT</th>
                  <th>Địa chỉ</th>
                  <th>Giới tính</th>
                  <th>Trạng thái</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(use, index) in users" :key="index">
                  <template v-if="use.LOAI == 1">
                    <td>{{ index + 1 }}</td>
                    <td>{{ use.EMAIL }}</td>
                    <td>{{ use.TEN }}</td>
                    <td>{{ use.SODIENTHOAI }}</td>
                    <td>{{ use.DIACHI }}</td>
                    <template v-if="use.GIOITINH == 0">
                      <td>Nam</td>
                    </template>
                    <template v-else>
                      <td>Nữ</td>
                    </template>
                    <template v-if="use.TRANGTHAI == 0">
                      <td>Hoạt động</td>
                    </template>
                    <template v-else>
                      <td>Không hoạt động</td>
                    </template>
                    <td>
                      <router-link :to="`/quanlyuser/${use.ID}/chinhsuaNV`">
                        <button type="button" class="btn btn-primary btn-fill float-righ">
                          Sửa
                        </button>
                      </router-link>
                      &nbsp;
                      <button @click.prevent="xoaNV(use.ID)" type="button" class="btn btn-danger btn-fill float-righ">
                        Xóa
                      </button>
                      &nbsp;
                      <template v-if="use.TRANGTHAI == 0">
                      </template>
                      <template v-else>
                        <button @click.prevent="active(use.ID)" type="button"
                          class="btn btn-success btn-fill float-righ">
                          Kích hoạt
                        </button>
                      </template>

                    </td>

                  </template>
                  <template v-else></template>
                </tr>
              </tbody>
            </table>
            <div style="text-align: center">
              <jw-pagination :pageSize="10" :items="users" @changePage="onChangePage"></jw-pagination>
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
      this.users = this.data.data;
    },

    async xoaNV(ID) {
      let text = "BẠN CÓ MUỐN XÓA NHÂN VIÊN NÀY";
      if (confirm(text) == true) {
        const token = localStorage.token;
        const result = await axios.delete(`http://localhost:3000/admin/remove-adm/${ID}`, {
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
  }
}
</script>
<style>
</style>
