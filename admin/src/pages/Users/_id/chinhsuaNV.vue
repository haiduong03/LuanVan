<template>
  <div class="content">
    <!-- <div class="container-fluid"> -->
    <div class="row">
      <div class="container col-6">
        <card>
          <form>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="inputEmail4">Email</label>
                <input disabled v-model="EMAIL" type="email" class="form-control" id="inputEmail4"
                  placeholder="abc@gmail.com">
              </div>
            </div>
            <!-- <div class="form-row">
              <div class="form-group col-md-12">
                <label for="inputPassword4">Password</label>
                <input v-model="PASS" type="password" class="form-control" id="inputPassword4">
              </div>
            </div> -->
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
            <div class="form-group col-md-7">
              <button @click.prevent="updateNV()" style="align:center" class="btn btn-primary btn-fill float-right">Xác
                nhận</button>
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
// import BaseInput from '../../components/Inputs/BaseInput.vue';
export default {
  components: {
    // BaseInput
  },
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
  mounted() {
    this.findNV()
  },
  methods: {
    async findNV() {
      const token = localStorage.token;
      const result = await axios.get(`http://localhost:3000/admin/find-adm-id/${this.$route.params.id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          // "Content-type": "Application/json",
          "Authorization": `Bearer ${token} `
        }
      });
      console.log(result)
      this.TEN = result.data[0].TEN;
      this.SODIENTHOAI = result.data[0].SODIENTHOAI;
      this.DIACHI = result.data[0].DIACHI;
      this.GIOITINH = result.data[0].GIOITINH;

    },
    async updateNV() {
      const token = localStorage.token;
      const result = await axios.put(`http://localhost:3000/admin/update-adm/${this.$route.params.id}`,
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
        this.$router.push('/quanlyuser/nhanvien')
      }
      else {
        alert(result.data.message);
      }
    },
  }
};
</script>