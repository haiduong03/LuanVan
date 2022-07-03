<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <h4 slot="header" class="card-title">Thêm mới sản phẩm</h4>
            <form>
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    type="text"
                    label="Tên sản phẩm"
                    v-model="form.tensp"
                  >
                  </base-input>
                </div>
                <div class="col-md-4">
                  <base-input v-model="form.gia" type="text" label="Giá">
                  </base-input>
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model="form.ngaysx"
                    type="date"
                    label="Ngày sản xuất"
                  >
                  </base-input>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    type="text"
                    label="Sale Off"
                    v-model="form.saleoff"
                  >
                  </base-input>
                </div>
                <div class="col-md-4">
                  <base-input v-model="form.maloai" type="text" label="Mã loại">
                  </base-input>
                </div>
                <div class="col-md-4">
                  <base-input v-model="form.status" type="text" label="Status">
                  </base-input>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <label for="floatingTextarea">Thông tin mô tả sản phẩm</label>
                  <textarea
                    v-model="form.thongtinsp"
                    class="form-control"
                    id="floatingTextarea"
                  ></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <base-input
                    v-model="form.bestseller"
                    type="text"
                    label="Bán chạy"
                  >
                  </base-input>
                </div>
                <div class="col-md-6">
                  <base-input
                    v-model="form.newer"
                    type="text"
                    label="Hàng mới"
                  >
                  </base-input>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <base-input
                    v-model="form.giamgia"
                    type="text"
                    label="Giảm giá"
                  >
                  </base-input>
                </div>
                <div class="col-md-6">
                  <label for="formFile" class="form-label">Ảnh đại diện</label>
                  <input
                    @change="onFileChange"
                    class="form-control"
                    type="file"
                    id="formFile"
                  />
                </div>
              </div>

              <div>
                <button
                  @click.prevent="onCreate"
                  type="submit"
                  class="btn btn-success btn-fill float-right"
                >
                  Thêm sản phẩm
                </button>
              </div>
              <div class="clearfix"></div>
            </form>
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
      form: {
        tensp: null,
        gia: null,
        ngaysx: null,
        giamgia: 0,
        saleoff: null,
        maloai: null,
        thongtinsp: null,
        status: null,
        ngaydang: new Date().toISOString().substr(0, 10),
        anhdd: null,
        bestseller: 0,
        newer: 0,
        fileName: "",
        selectedFile: null,
      },
    };
  },
  methods: {
    onFileChange(e) {
      this.form.fileName = e.target.files[0];
      this.form.fileName = e.target.files[0].name;
      this.form.selectedFile = e.target.files[0];
    },
    async onCreate() {
      try {
        let data = new FormData();
        data.append("tensp", this.form.tensp);
        data.append("gia", this.form.gia);
        data.append(
          "anhdd",
          this.form.selectedFile,
          this.form.selectedFile.name
        );
        data.append("giamgia", this.form.giamgia);
        data.append("saleoff", this.form.saleoff);
        data.append("maloai", this.form.maloai);
        data.append("thongtinsp", this.form.thongtinsp);
        data.append("status", this.form.status);
        data.append("ngaysx", this.form.ngaysx);
        data.append("ngaydang", this.form.ngaydang);
        data.append("bestseller", this.form.bestseller);
        data.append("newer", this.form.newer);

        await axios.post(
          "http://10.42.240.200:9999/api/products/addproduct",
          data,
          {
            headers: {
              accept: "application/json",
              "Accept-Language": "en-US,en;q=0.8",
              "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
            },
          }
        );
        alert("success");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>