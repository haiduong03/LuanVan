
  <template>
  <!-- selloff -->
  <div class="content">
    <div class="card">
      <div class="card-body">
        <div class="row">

          <div class="col-12 container" style="background-color:#fff">
            <form class="form-inline my-2 my-lg-0 ml-5" style="width:100%;">
              <input v-model="name" class="form-control mr-sm-2" style="width:83%;" type="search" placeholder="Tìm kiếm"
                aria-label="Search" @keypress.enter="findByName(name)">
              <button @click="findByName(name)" type="button" class="btn btn-light"
                style="color:black;background-color:#fff;border-color:greenyellow">
                <i class="nc-icon nc-zoom-split" style="color:black;font-size: 16px;"></i>
              </button>
            </form>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12" style="
              border-top: 5px solid yellowgreen;
              margin-top: 20px;
              margin-left: 0px;
            "></div>
          <!-- products -->
          <div class=" col-12">
            <!-- <div class="row "> -->
            <br>
            <div class="container" style=" font-weight: bold; color: blue; text-align: center; ">LỌC SẢN PHẨM:
              <!-- <ul> -->&emsp;&emsp;&emsp;
              <div class="dropdown">
                <div class=" container " style=" font-weight: bold; color: blue; text-align: center;">
                  THƯƠNG HIỆU
                </div>
                <div class="dropdown-content">
                  <template v-for="brand in LIST_THUONGHIEU">
                    <a @click="findByBrand(brand.ID)" class="badge badge-pill badge-primary"
                      style="color: #fff; margin: 20px; margin-top: 5px; margin-bottom: 5px; width: 100px; font-size: 15px; border-color: #fff">
                      {{ brand.TEN }}
                    </a>
                  </template>
                </div>
              </div>
              <div class="dropdown">
                <div class="container " style="font-weight: bold; color: blue; text-align: center;">
                  CPU
                </div>
                <div class="dropdown-content">
                  <template v-for="cpu in LIST_CPU">
                    <a @click="findByCpu(cpu.ID)" class="badge badge-pill badge-info"
                      style="color: #fff; margin: 20px; margin-top: 5px; margin-bottom: 5px; width: 100px; font-size: 15px; border-color: #fff">
                      {{ cpu.TEN }}
                    </a>
                  </template>
                </div>
              </div>
              <div class="dropdown">
                <div class="container " style="font-weight: bold; color: blue; text-align: center;">
                  RAM
                </div>
                <div class="dropdown-content">
                  <template v-for="ram in LIST_RAM">
                    <a @click="findByRam(ram.ID)" class="badge badge-pill badge-success"
                      style="color: #fff; margin: 20px; margin-top: 5px; margin-bottom: 5px; width: 100px; font-size: 15px; border-color: #fff">
                      {{ ram.TEN }}</a>
                  </template>
                </div>
              </div>
              <div class="dropdown">
                <div class="container " style="font-weight: bold; color: blue; text-align: center;">
                  Ổ CỨNG
                </div>
                <div class="dropdown-content">
                  <template v-for="drive in LIST_OCUNG">
                    <a @click="findByDrive(drive.ID)" class="badge badge-pill badge-danger"
                      style="color: #fff; margin: 20px; margin-top: 5px; margin-bottom: 5px; width: 100px; font-size: 15px; border-color: #fff">
                      {{
                          drive.TEN
                      }}</a>
                  </template>
                </div>
              </div>
              <div class="dropdown">
                <div class="container " style="font-weight: bold; color: blue; text-align: center;">
                  HỆ ĐIỀU HÀNH
                </div>
                <div class="dropdown-content">
                  <template v-for="os in LIST_HEDIEUHANH">
                    <a @click="findByOs(os.ID)" class="badge badge-pill badge-warning"
                      style="color: #fff; margin: 20px; margin-top: 5px; margin-bottom: 5px; width: 100px; font-size: 15px; border-color: #fff">
                      {{
                          os.TEN
                      }}</a>
                  </template>
                </div>
              </div>
              <!-- </ul> -->
              <!-- <br><br> -->
            </div>
            <!-- </div> -->
            <template v-if="this.products.length > 0">
              <div class="row" style="margin-top: 20px; align: center;">
                <div v-for="(product, index) in pageOfitems" :key="index" class="col-sm-3">
                  <div class="card" style="heigth: 250px">
                    <router-link :to="`/quanlysanpham/${product.ID}/chitietsp`">
                      <img style="height: 180px; weight: 120px" v-bind:src="'http://localhost:3000/' + product.ANH + ''"
                        class="card-img-top" alt="..." />
                    </router-link>
                    <div class="card-body">
                      <div style="font-size: 16px">
                        <span>{{ product.TEN }}</span>
                      </div>
                      <div style="
                      font-weight: bold;
                      font-size: 14px;
                      color: red;
                      margin-top: 10px;
                    ">
                        <span>{{ product.GIA | numeral("0,0") }} VND</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="text-align: center">
                <jw-pagination :pageSize="12" :items="products" @changePage="onChangePage" :labels="customLabels">
                </jw-pagination>
              </div>
            </template>
            <template v-else>
              <div>
                <h1 style=" text-align: center">KHÔNG CÓ SẢN PHẨM NÀO</h1>
              </div>
            </template>
          </div>

          <div class="col-md-12" style="
              border-top: 2px solid #6c757d;
              margin-top: 13px;
              /* margin-left: 20px; */
            "></div>
          <div class="col-md-12" style="
              border-top: 5px solid yellowgreen;
              margin-top: 20px;
              margin-left: 0px;
            "></div>
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
// import JwPagination from "jw-vue-pagination";
import BaseDropdown from "../../components/BaseDropdown.vue";
import axios from "axios";
// import BaseDropdown from "../../components/BaseDropdown.vue";
// import { mapGetters } from "vuex";
const customLabels = {
  first: '<<',
  last: '>>',
  previous: '<',
  next: '>'
};
export default {
  data() {
    return {
      name: null,
      data: [],
      products: [],
      LIST_HEDIEUHANH: [],
      LIST_THUONGHIEU: [],
      LIST_CPU: [],
      LIST_OCUNG: [],
      LIST_RAM: [],
      pageOfitems: [],
      customLabels,
      BaseDropdown
    };
  },
  mounted() {
    this.listSP();
    this.listBrand();
    this.listCpu();
    this.listRam();
    this.listDrive();
    this.listOS();
  },
  methods: {
    onChangePage(pageOfitems) {
      this.pageOfitems = pageOfitems;
    },
    async listSP() {
      const result = await axios.get(`http://localhost:3000/product/get-all-product-active`);
      this.products = result.data;
    },
    async listBrand() {
      const result = await axios.get("http://localhost:3000/product/get-all-brand");
      this.LIST_THUONGHIEU = result.data;
    },
    async listCpu() {
      const result = await axios.get("http://localhost:3000/product/get-all-cpu");
      this.LIST_CPU = result.data;
    },
    async listRam() {
      const result = await axios.get("http://localhost:3000/product/get-all-ram");
      this.LIST_RAM = result.data;
    },
    async listDrive() {
      const result = await axios.get("http://localhost:3000/product/get-all-drive");
      this.LIST_OCUNG = result.data;
    },
    async listOS() {
      const result = await axios.get("http://localhost:3000/product/get-all-os");
      this.LIST_HEDIEUHANH = result.data;
    },
    async findByBrand(brand) {
      const result = await axios.get(`http://localhost:3000/product/find-product-by-brand/${brand}`);
      this.products = result.data;
    },
    async findByCpu(cpu) {
      const result = await axios.get(`http://localhost:3000/product/find-product-by-cpu/${cpu}`);
      this.products = result.data;
    },
    async findByRam(ram) {
      const result = await axios.get(`http://localhost:3000/product/find-product-by-ram/${ram}`);
      this.products = result.data;
    },
    async findByOs(os) {
      const result = await axios.get(`http://localhost:3000/product/find-product-by-os/${os}`);
      this.products = result.data;
    },
    async findByDrive(drive) {
      const result = await axios.get(`http://localhost:3000/product/find-product-by-drive/${drive}`);
      this.products = result.data;
    },
    async findByName(name) {
      const result = await axios.get(`http://localhost:3000/product/find-product-by-name/${name}`);
      this.products = result.data;
    },
  },
  components: { BaseDropdown }
};
</script>
  <style>
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    cursor: pointer;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
  </style>
