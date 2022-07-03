<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/home">
        <i class="nc-icon nc-bank"></i>
        <p>Home Page</p>
      </sidebar-link>
      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-tv-2"></i>
        <p>Desktop</p>
      </sidebar-link>
      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>Laptop</p>
      </sidebar-link>
      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-mobile"></i>
        <p>Mobile</p>
      </sidebar-link>
      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-tablet-2"></i>
        <p>Tablet</p>
      </sidebar-link>
      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-settings-90"></i>
        <p>Linh kiện</p>
      </sidebar-link>

      <!-- <template slot="bottom-links">
        <sidebar-link class="active"
                      to="/admin/upgrade">
          <i class="nc-icon nc-alien-33"></i>
          <p>Upgrade to PRO</p>
        </sidebar-link>
      </template> -->
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
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
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
