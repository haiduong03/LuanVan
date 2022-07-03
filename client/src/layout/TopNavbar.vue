<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button
        type="button"
        class="navbar-toggler navbar-toggler-right"
        :class="{ toggled: $sidebar.showSidebar }"
        aria-controls="navigation-index"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleSidebar"
      >
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="nav navbar-nav mr-auto">
          <base-dropdown tag="li">
            <template slot="title">
              <i class="nc-icon nc-planet"></i>
              <b class="caret"></b>
              <span class="notification">5</span>
            </template>
            <a class="dropdown-item" href="#">Notification 1</a>
            <a class="dropdown-item" href="#">Notification 2</a>
            <a class="dropdown-item" href="#">Notification 3</a>
            <a class="dropdown-item" href="#">Notification 4</a>
            <a class="dropdown-item" href="#">Another notification</a>
          </base-dropdown>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nc-icon nc-zoom-split"></i>
              <span class="d-lg-block">&nbsp;Search</span>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <template v-if="form.username == null">
            <li class="nav-item">
              <router-link to="/login">
                <a class="nav-link" href="#"> Đăng nhập </a>
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> Đăng ký </a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <span style="color: #28a745; font-weight: bold"
                >Hi, {{ form.username }}</span
              >
            </li>
            <base-dropdown title="Tài khoản">
              <a class="dropdown-item" href="#">Quản lý</a>
              <a class="dropdown-item" href="#">Chỉnh sửa thông tin</a>
              <a class="dropdown-item" href="#">Lịch sử đặt hàng</a>
              <a class="dropdown-item" href="#">Địa chỉ</a>
              <a class="dropdown-item" href="#">Mật khẩu</a>
              <!-- <div class="divider"></div>
            <a class="dropdown-item" href="#">Đăng xuất</a> -->
            </base-dropdown>
            <li class="nav-item">
              <a @click.prevent="logout" href="#" class="nav-link"> Log out </a>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      activeNotifications: false,
      user: [],
      form: {
        email: null,
        _id: null,
        username: null,
      },
    };
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
  },

  mounted() {
    this.login();
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    async login() {
      const response = await axios.get(
        "http://10.42.240.200:9999/api/users/auth/user",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("user-token"),
          },
        }
      );
      //console.log(response.data)
      this.user = response.data;
      //console.log(this.user)
      this.form.username = this.user.username;
      //console.log(this.form.username);
      this.form._id = this.user._id;
      this.form.email = this.user.email;
    },
    
    async logout() {
      localStorage.removeItem("user-token");
      // Reload lại page
      localStorage.setItem("reloaded", "3");
      location.reload();
    },
  },
};
</script>
<style>
</style>
