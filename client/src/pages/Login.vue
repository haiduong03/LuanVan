<template>
  <div class="">
    <div class="row" style="margin-top: 250px; background-color: #fff4f4">
      <div class="col-sm-5 col-md-6"></div>
      <div class="col-sm-3 offset-sm-3 col-md-4 offset-md-0">
        <div class="card" style="margin-top: 23px">
          <div class="card-body">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label"
                >Email</label
              >
              <input v-model="form.email" type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label"
                >Mật khẩu</label
              >
              <input
                v-model="form.password"
                type="password"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <button
                @click.prevent="login"
                style="width: 100%"
                type="button"
                class="btn btn-primary"
              >
                Đăng nhập
              </button>
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
      form: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    async login() {
      let response = await axios.post(
        `http://10.42.240.200:9999/api/users/auth/login`,
        this.form
      );
      //console.log(response.data.token);
      localStorage.setItem("user-token", response.data.token);

      this.$router.push("/home");
    },
  },
};
</script>