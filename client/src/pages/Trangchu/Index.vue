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
        <SanPham />
      </div>
    </div>
  </div>
</template>
<script>
import SanPham from "../Products/SanPham.vue"
export default {
  components: {
    SanPham
  },
};
</script>
