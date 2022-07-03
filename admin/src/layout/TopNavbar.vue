<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Trang chủ</a>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="nav navbar-nav mr-auto">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nc-icon nc-zoom-split"></i>
              <span class="d-lg-block">&nbsp;Tìm kiếm</span>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/#/admin/user">
              {{ admin }}
            </a>
          </li>

          <li class="nav-item">
            <template v-if="!admin">
              <button @click.prevent="login()" class="btn btn-danger btn-fill float-righ">
                Đăng nhập
              </button></template>
            <template v-else>
              <button @click.prevent="logout()" class="btn btn-danger btn-fill float-righ">
                Đăng xuất
              </button></template>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    routeName() {
      const { name } = this.$route
      return this.capitalizeFirstLetter(name)
    }
  },
  data() {
    return {
      activeNotifications: false,
      admin: localStorage.admin
    }
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications
    },
    closeDropDown() {
      this.activeNotifications = false
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false)
    },
    login() {
      this.$router.push('/dangnhap');
    },
    logout() {
      localStorage.clear();
      this.$router.push('/dangnhap');
    }
  }
}

</script>
<style>
</style>
