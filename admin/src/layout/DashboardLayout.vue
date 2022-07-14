<template>
  <div class="wrapper">
    <template v-if="admin">
      <side-bar>

        <!-- <sidebar-link v-for="(link, index) in sidebarLinks" :key="link.name + index" :to="link.path" :link="link">
          <i :class="link.icon"></i>
          <p>{{ link.name }}</p>
        </sidebar-link> -->

        <sidebar-link to="/">
          <i class="nc-icon nc-chart-pie-35"></i>
          <p>Trang chủ</p>
        </sidebar-link>
        <sidebar-link to="/admin/user">
          <i class="nc-icon nc-circle-09"></i>
          <p>Thông tin cá nhân</p>
        </sidebar-link>
        <sidebar-link to="/quanlyuser/khachhang">
          <i class="nc-icon nc-badge"></i>
          <p>Khách hàng</p>
        </sidebar-link>
        <sidebar-link to="/quanlyuser/nhanvien">
          <i class="nc-icon nc-badge"></i>
          <p>Nhân viên</p>
        </sidebar-link>
        <sidebar-link to="/quanlysanpham/sanpham">
          <i class="nc-icon nc-app"></i>
          <p>Sản phẩm</p>
        </sidebar-link>
        <sidebar-link to="/quanlydonhang/donhang">
          <i class="nc-icon nc-cart-simple"></i>
          <p>Đơn hàng</p>
        </sidebar-link>
        <sidebar-link to="/quanlysanpham/linhkien">
          <i class="nc-icon nc-settings-gear-64"></i>
          <p>Linh kiện</p>
        </sidebar-link>
      </side-bar>

      <div class="main-panel">
        <top-navbar></top-navbar>

        <dashboard-content @click="toggleSidebar">

        </dashboard-content>

        <content-footer></content-footer>
      </div>
    </template>
    <template v-else>
      <side-bar>
        <div class="wrapper">
          <!-- <mobile-menu slot="content"></mobile-menu> -->
          <sidebar-link to="/">
            <i class="nc-icon nc-chart-pie-35"></i>
            <p>Trang chủ</p>
          </sidebar-link>
        </div>
      </side-bar>
      <div class="main-panel">
        <top-navbar></top-navbar>

        <dashboard-content @click="toggleSidebar">

        </dashboard-content>

        <content-footer></content-footer>
      </div>
    </template>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import MobileMenu from './MobileMenu.vue'
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    }
  },
  data() {
    return {
      admin: localStorage.admin,
      sidebarLinks: [
        { name: 'Trang chủ', path: "/", icon: "nc-icon nc-chart-pie-35" },
        { name: 'Trang chủ', path: "/admin/user", icon: "nc-icon nc-chart-pie-35" },
        { name: 'Trang chủ', path: "/", icon: "nc-icon nc-chart-pie-35" },
        { name: 'Trang chủ', path: "/", icon: "nc-icon nc-chart-pie-35" },

      ]
    }
  }
}

</script>
