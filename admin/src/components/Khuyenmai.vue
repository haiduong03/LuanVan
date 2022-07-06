<template>
  <!-- selloff -->
  <div class="col-md-12">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div
            class="col-md-2"
            style="
              font-weight: bold;
              font-size: 18px;
              background-color: #dc3545;
            "
          >
            <span style="color: #fff; margin-left: 10px">Khuyến mãi</span>
          </div>
          <div
            class="col-md-9"
            style="
              border-top: 2px solid #6c757d;
              margin-top: 13px;
              margin-left: 20px;
            "
          ></div>
        </div>
        <!-- products -->
        <div class="row" style="margin-top: 20px">
          <div v-for="(product, index) in products" :key="index" class="col-sm-3">
            <div class="card" style="heigth: 250px">
              <router-link :to="`/quanlysanpham/${product.ID}/chitietsp`"
                ><img
                  style="height: 180px; weight: 120px"
                  v-bind:src="'http://localhost:3000/' + product.ANH + ''"
                  class="card-img-top"
                  alt="..."
              /></router-link>
              <div class="card-body">
                <div style="font-size: 16px">
                  <span>{{ product.TEN }}</span>
                </div>
                <div
                  style="
                    font-weight: bold;
                    font-size: 14px;
                    color: red;
                    margin-top: 10px;
                  "
                >
                  <span>{{ product.GIA | numeral("0,0") }} VND</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      data: [],
      products: [],
    };
  },

  mounted() {
    this.listSP();
  },

  /* computed: {
    ...mapGetters(["productItems", "user"]),
  }, */

  /* created() {
    this.$store.dispatch("fetchProducts");
  }, */

  methods: {
    async listSP() {
      const result = await axios.get(`http://localhost:3000/product/get-all-product`);
      this.products = result.data;
    },
  },
};
</script>