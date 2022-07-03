<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <h4 slot="header" class="card-title">Thêm người dùng</h4>
            <form>
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    type="text"
                    label="Tên đăng nhập"
                    placeholder="Username"
                    v-model="form.username"
                  >
                  </base-input>
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model="form.email"
                    type="email"
                    label="Email"
                    placeholder="Email"
                  >
                  </base-input>
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model="form.name"
                    type="text"
                    label="Họ tên"
                    placeholder="Name"
                  >
                  </base-input>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    type="text"
                    label="Mật khẩu"
                    placeholder="Password"
                    v-model="form.password"
                  >
                  </base-input>
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model="form.role"
                    type="text"
                    label="Gán quyền"
                    placeholder="Role"
                  >
                  </base-input>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <label for="formFile" class="form-label">Avatar</label>
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
                  Thêm người dùng
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
        email: null,
        username: null,
        name: null,
        password: null,
        passwordConfirmation: null,
        role: null,
        mahuyen: "00",
        createdAt: new Date().toISOString().substr(0, 10),
        avatar: "http://localhost:3000/avatar.jpg",
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
        data.append("email", this.form.email);
        data.append("username", this.form.username);
        data.append("name", this.form.name);
        data.append("password", this.form.password);
        data.append("mahuyen", this.form.mahuyen);
        data.append("role", this.form.role);
        data.append("createdAt", this.form.createdAt);
        if (this.form.selectedFile) {
          data.append(
            "avatar",
            this.form.selectedFile,
            this.form.selectedFile.name
          );
        } else {
          data.append("avatar", this.form.avatar);
        }

        await axios.post("http://10.42.240.200:9999/api/users/account", data, {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
          },
        });
        alert("success");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>