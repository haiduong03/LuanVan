<template>
  <div class="LayoutDefault" style="background-color: #ccc;">
    <nav-bar />

    <div>
      <div class="row" style="background-color: #ccc;">
        <div class="col-md-2" style="background-color: rgba(255, 255, 255, 0);">
          <side-bar />
        </div>
        <div class="col-md-10" style="background-color: rgba(255, 255, 255, 0);border: 0px solid black;">
          <main class="LayoutDefault__main">
            <slot />
          </main>
        </div>
      </div>
    </div>

    <!-- <footer-bar /> -->
  </div>
</template>

<script>
// Import thành phần (components) NavBar, SideBar, FooterBar để sử dụng
import NavBar from "../components/NavBar"
import SideBar from "@/components/SideBar";
//import FooterBar from "@/components/FooterBar";

// Để sử dụng được các thẻ (tag) của các component tương ứng
// <nav-bar />     -> component NavBar
// <side-bar />    -> component SideBar
// <footer-bar />  -> component FooterBar
// Chúng ta phải khai báo trong thuộc tính `components` của phần export default {}
export default {
  components: {
    NavBar,
    SideBar,
   // FooterBar,
  },
};
</script>

<style scoped>
</style>
