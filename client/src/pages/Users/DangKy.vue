<template>
  <div class="page-header min-vh-75">
    <div class="container">
      <div class=" row">
        <div class="mx-auto col-xl-6 col-lg-5 col-md-6 d-flex flex-column">
          <div class="mt-8 card card-plain">
            <div class="pb-5 card-header text-start">
              <div class="center" style="margin-top: 20px; border: 1px solid black;border-radius:1%">
                <card>
                  <h4 slot="header" class="card-title" style="text-align: center; font-weight: bold">
                    Đăng ký</h4>
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <label for="inputEmail4">Email</label>
                        <input v-model="EMAIL" type="email" class="form-control" id="inputEmail4"
                          placeholder="abc@gmail.com">
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <label for="inputPassword4">Password</label>
                        <input v-model="PASS" type="password" class="form-control" id="inputPassword4">
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <label for="inputEmail4">Họ và tên</label>
                        <input v-model="TEN" type="text" class="form-control" id="inputEmail4">
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <label for="inputPassword4">Số điện thoại</label>
                        <input v-model="SODIENTHOAI" type="number" class="form-control" id="inputPassword4">
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <label for="inputCity">Địa chỉ</label>
                        <input v-model="DIACHI" type="text" class="form-control" id="inputCity">
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <label for="inputCity">Giới tính</label>
                        <select v-model="GIOITINH" class="form-control" id="exampleFormControlSelect1">
                          <option value="0">Nam</option>
                          <option value="1">Nữ</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group col-md-7">
                      <button @click.prevent="createKH()" style="align:center"
                        class="btn btn-primary btn-fill float-right">Xác nhận</button>
                    </div>
                  </form>
                </card>
              </div>
            </div>
          </div>
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
      TEN: null,
      EMAIL: null,
      PASS: null,
      SODIENTHOAI: null,
      DIACHI: null,
      GIOITINH: null,
    };
  },
  methods: {
    async createKH() {
      if (!this.TEN ||
        !this.EMAIL ||
        !this.PASS ||
        !this.SODIENTHOAI ||
        !this.DIACHI ||
        !this.GIOITINH) {
        alert("VUI LÒNG NHẬP ĐỦ THÔNG TIN");
      }
      const result = await axios.post("http://localhost:3000/user/create-usr",
        {
          TEN: this.TEN,
          EMAIL: this.EMAIL,
          PASS: this.PASS,
          SODIENTHOAI: this.SODIENTHOAI,
          DIACHI: this.DIACHI,
          GIOITINH: this.GIOITINH,
        },
      );
      if (result.data.message === "ĐĂNG KÍ THÀNH CÔNG") {
        alert("ĐĂNG KÍ THÀNH CÔNG!!! XIN VUI LÒNG ĐĂNG NHẬP");
        this.$router.push("/user/dangnhap")
      }
      else {
        alert(result.data.message);
      }
    },
  }
}
</script>