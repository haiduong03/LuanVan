<template>
  <div class="content">

    <!-- <div class="container-fluid"> -->
    <div class="container">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="img/faces/banner-3.jpg" class="d-block w-100 img-fluid" alt="...">
          </div>
        </div>
      </div>
      <div class="container">
        <khuyenmai />
      </div>
    </div>
  </div>
</template>
<script>
import Khuyenmai from "../../components/Khuyenmai.vue";
import axios from "axios";
export default {
  components: {
    Khuyenmai
  },
};
</script>
<style>
</style>
