<template>
  <div class="sidebar" style="background-color:#FFFFFF; height: 100%;">
    <b-col>
      <b-col style="padding-top: 8px">
        <div style="text-align: center">
          <b-col>
            <router-link to="/" style="text-decoration: none; color: inherit">
              <b-img thumbnail fluid
                src="https://demos.creative-tim.com/bootstrap-vue-argon-dashboard/img/brand/green.png" 
                
                alt="Image 1">
              </b-img>
            </router-link>
          </b-col>
        </div>
        <hr />
        <div style="padding-left: 20px; padding-top: 5px">
          <b-icon scale="1.5" icon="person-bounding-box"></b-icon>
          <router-link to="/users/listuser" style="text-decoration: none; color: inherit">
            <span style="font-weight: bold">
              &nbsp; Khách hàng</span>
          </router-link>
        </div>
         <div style="padding-left: 20px; padding-top: 20px">
          <b-icon scale="1.5" icon="people-fill"></b-icon>
          <router-link to="/users" style="text-decoration: none; color: inherit">
            <span style="font-weight: bold">
              &nbsp; Nhân viên</span>
          </router-link>
        </div>
        <div style="padding-left: 20px; padding-top: 20px">
          <b-icon scale="1.5" icon="x-diamond"></b-icon>
          <router-link to="/products" style="text-decoration: none; color: inherit">
            <span style="font-weight: bold">
              &nbsp; Sản phẩm</span>
          </router-link>
        </div>
                <div style="padding-left: 20px; padding-top: 20px">
          <b-icon scale="1.5" icon="box-seam"></b-icon>
          <router-link to="/products/listpro" style="text-decoration: none; color: inherit">
            <span style="font-weight: bold">
              &nbsp; Loại sản phẩm</span>
          </router-link>
        </div>
        <div style="padding-left: 20px; padding-top: 20px">
          <b-icon scale="1.5" icon="cart-check-fill"></b-icon>
          <router-link to="/about" style="text-decoration: none; color: inherit">
            <span style="font-weight: bold"> &nbsp; Đơn hàng</span>
          </router-link>
        </div>
       
         <!--<div style="padding-left: 20px; padding-top: 20px">
          <b-icon scale="1.5" icon="mailbox"></b-icon>
          <router-link to="/about" style="text-decoration: none; color: inherit">
            <span style="font-weight: bold"> &nbsp; Email</span>
          </router-link>
        </div>
        <div style="padding-left: 20px; padding-top: 20px">
          <b-icon scale="1.5" icon="camera-reels"></b-icon>
          <router-link to="/about" style="text-decoration: none; color: inherit">
            <span style="font-weight: bold"> &nbsp; Sự kiện</span>
          </router-link>
        </div> -->
      </b-col>
    </b-col>
  </div>
</template>

<script>
export default {
  name: "SideBar"
};
</script>

<style scoped>
</style>
