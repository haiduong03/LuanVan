<template>
  <div class="content">
    <!-- <div class="container-fluid"> -->
    <div class="row">
      <div class="container col-6">
        <card>
          <form>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label>Email</label>
                <input style="background-color:black;" type="email" class="form-control" :value="EMAIL" disabled>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label>Họ và tên</label>
                <input v-model="TEN" type="text" class="form-control">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-12">
                <label>Số điện thoại</label>
                <input v-model="SODIENTHOAI" type="number" class="form-control">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label>Địa chỉ</label>
                <input v-model="DIACHI" type="text" class="form-control">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label>Giới tính</label>
                <select v-model="GIOITINH" class="form-control" id="exampleFormControlSelect1">
                  <template v-if="GIOITINH == 0">
                    <option selected value="0">Nam</option>
                    <option value="1">Nữ</option>
                  </template>
                  <template v-else>
                    <option value="0">Nam</option>
                    <option selected value="1">Nữ</option>
                  </template>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-12">
                <button @click.prevent="updateKH()" class="btn btn-primary btn-fill float-right">Thay đổi thông
                  tin</button>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label>mật khẩu cũ</label>
                <input v-model="PASS_OLD" type="password" class="form-control">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label>mật khẩu mới</label>
                <input v-model="PASS_NEW" type="password" class="form-control">
              </div>
            </div>
            <div class="form-row">
              <div class=" form-group col-md-12">
                <button @click.prevent="changePass()" class="btn btn-primary btn-fill float-right">Đổi mật khẩu</button>
              </div>
            </div>
          </form>
        </card>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      ID: null,
      TEN: null,
      EMAIL: null,
      PASS_NEW: null,
      PASS_OLD: null,
      SODIENTHOAI: null,
      DIACHI: null,
      GIOITINH: null,
    };
  },
  mounted() {
    this.findKH()
  },
  methods: {
    async findKH() {
      const token = localStorage.token;
      const user = localStorage.user;
      const result = await axios.get(`http://localhost:3000/user/find-usr-mail/${user}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          // "Content-type": "Application/json",
          "Authorization": `Bearer ${token} `
        }
      });
      this.ID = result.data[0].ID;
      this.EMAIL = result.data[0].EMAIL;
      this.TEN = result.data[0].TEN;
      this.SODIENTHOAI = result.data[0].SODIENTHOAI;
      this.DIACHI = result.data[0].DIACHI;
      this.GIOITINH = result.data[0].GIOITINH;
    },
    async updateKH() {
      let message = "BẠN CÓ MUỐN CẬP NHẬT THÔNG TIN ???"
      if (confirm(message) == true) {
        const token = localStorage.token;
        const result = await axios.put(`http://localhost:3000/user/update-usr/${this.ID}`,
          {
            TEN: this.TEN,
            SODIENTHOAI: this.SODIENTHOAI,
            DIACHI: this.DIACHI,
            GIOITINH: this.GIOITINH,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              // "Content-type": "Application/json",
              "Authorization": `Bearer ${token}`
            }
          });

        if (result.data.message === "CẬP NHẬT THÀNH CÔNG") {
          alert(result.data.message);
          location.reload();
        }
        else {
          alert(result.data.message);
        }
      }
    },

    async changePass() {
      if (!this.PASS_NEW || !this.PASS_OLD) {
        alert("KHÔNG ĐƯỢC ĐỂ TRỐNG")
      } else {
        let message = "BẠN CÓ MUỐN THAY ĐỔI MẬT KHẨU ???"
        if (confirm(message) == true) {
          const token = localStorage.token;
          const result = await axios.put(`http://localhost:3000/user/update-pass-usr/${this.ID}`,
            {
              PASS_NEW: this.PASS_NEW,
              PASS_OLD: this.PASS_OLD
            }, {
            headers: {
              "Access-Control-Allow-Origin": "*",
              // "Content-type": "Application/json",
              "Authorization": `Bearer ${token}`
            }
          });
          if (result.data.message === "CẬP NHẬT THÀNH CÔNG") {
            alert(result.data.message);
            location.reload();
          } else alert(result.data.message);
        }
      }
    }
  }
};
</script>