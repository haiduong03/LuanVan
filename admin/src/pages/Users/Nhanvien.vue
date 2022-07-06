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
                  Nhân viên mới
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
                  <!-- <th></th> -->
                  <!-- <th></th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="(use, index) in pageOfitems" :key="index">
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
                    <template v-if="use.TRANGTHAI == 0">
                      <button @click.prevent="deleteNV(use.ID)" type="button"
                        class="btn btn-danger btn-fill float-righ">
                        Xóa
                      </button>
                      &nbsp;
                    </template>
                    <template v-else>
                      <button @click.prevent="activeNV(use.ID)" type="button"
                        class="btn btn-success btn-fill float-righ">
                        Kích hoạt
                      </button>
                    </template>
                  </td>
                </tr>
              </tbody>
            </table>
            <div style="text-align: center">
              <jw-pagination :pageSize="10" :items="users" @changePage="onChangePage" :labels="customLabels">
              </jw-pagination>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Paginate from "vuejs-paginate"
import axios from "axios";
import LTable from "src/components/Table.vue";
import Card from "src/components/Cards/Card.vue";

const customLabels = {
  first: '<<',
  last: '>>',
  previous: '<',
  next: '>'
};

export default {
  components: {
    LTable,
    Card,
    Paginate,
  },
  data() {
    return {
      users: [],
      pageOfitems: [],
      customLabels
    };
  },
  mounted() {
    this.listNV();
  },

  methods: {
    onChangePage(pageOfitems) {
      this.pageOfitems = pageOfitems;
    },
    async listNV() {
      const token = localStorage.token;
      const result = await axios.get(`http://localhost:3000/admin/get-all-adm`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          // "Content-type": "Application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      this.users = result.data;
    },

    async deleteNV(ID) {
      let text = "BẠN CÓ MUỐN XÓA NHÂN VIÊN NÀY";

      if (confirm(text) == true) {

        const token = localStorage.token;

        const admin = await axios.get(`http://localhost:3000/admin/find-adm-id/${ID}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              // "Content-type": "Application/json",
              "Authorization": `Bearer ${token}`
            }
          });

        if (admin.data[0].EMAIL === localStorage.admin) {
          alert("ĐANG SỬ DỤNG KHÔNG THỂ XÓA");
        }
        else {
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

      }
    },

    async activeNV(ID) {
      let text = "BẠN CÓ MUỐN KÍCH HOẠT NHÂN VIÊN NÀY";
      if (confirm(text) == true) {
        const token = localStorage.token;
        const result = await axios.get(`http://localhost:3000/admin/active-adm/${ID}`, {
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
