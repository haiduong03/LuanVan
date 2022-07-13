
  <template>
  <!-- selloff -->
  <div class="col-md-12">
    <div class="card">
      <div class="card-body">
        <div class="row" style="background-color:#fff">
          <form class="form-inline my-2 my-lg-0 ml-5" style="width:100%;">
            <input v-model="name" class="form-control mr-sm-2" style="width:75%;" type="search" placeholder="Tìm kiếm"
              aria-label="Search" @keyup.enter="findByName(name)">
            <button @click="findByName(name)" type="button" class="btn btn-light"
              style="color:black;background-color:#fff;border-color:greenyellow">
              <i class="nc-icon nc-zoom-split" style="color:black;font-size: 16px;"></i>
            </button>
          </form>
        </div>
        <div class="row">
          <div class="col-md-12" style="
              border-top: 5px solid yellowgreen;
              margin-top: 20px;
              margin-left: 0px;
            "></div>
          <div class="container">
            <h4 class="card-title" style="font-weight: bold; color: blue; text-align: center">
              CÁC THƯƠNG HIỆU LAPTOP HÀNG ĐẦU
            </h4>
          </div>
          <div class="container">
            <template v-for="brand in LIST_THUONGHIEU">
              <button @click="findByBrand(brand.ID)" class="badge badge-pill badge-primary"
                style=" margin: 20px; margin-top: 5px; margin-bottom: 5px; width: 200px; font-size: 20px; border-color: #fff">
                <a style="color: #fff">{{
                    brand.TEN
                }}</a>
              </button>&nbsp;&nbsp;
            </template>
          </div>
          <div class="container">
            <h4 class="card-title" style="font-weight: bold; color: blue; text-align: center">
              BỘ VI XỬ LÝ MẠNH MẼ
            </h4>
          </div>
          <div class="container">
            <template v-for="cpu in LIST_CPU">
              <button @click="findByCpu(cpu.ID)" class="badge badge-pill badge-info"
                style=" margin: 20px; margin-top: 5px; margin-bottom: 5px; width: 200px; font-size: 20px; border-color: #fff">
                <a style="color: #fff">{{
                    cpu.TEN
                }}</a>
              </button>&nbsp;
            </template>
          </div>
          <div class="container">
            <h4 class="card-title" style="font-weight: bold; color: blue; text-align: center">
              BỘ NHỚ RAM SIÊU TỐC
            </h4>
          </div>
          <div class="container">
            <template v-for="ram in LIST_RAM">
              <button class="badge badge-pill badge-success"
                style=" margin: 20px; margin-top: 5px; margin-bottom: 5px; width: 200px; font-size: 20px; border-color: #fff">
                <a @click="findByRam(ram.ID)" style="color: #fff">{{
                    ram.TEN
                }}</a></button>&nbsp;
            </template>
          </div>
          <div class="container">
            <h4 class="card-title" style="font-weight: bold; color: blue; text-align: center">
              Ổ CỨNG TỐC ĐỘ CAO
            </h4>
          </div>
          <div class="container">
            <template v-for="drive in LIST_OCUNG">
              <button class="badge badge-pill badge-danger"
                style=" margin: 20px; margin-top: 5px; margin-bottom: 5px; width: 200px; font-size: 20px; border-color: #fff">
                <a @click="findByDrive(drive.ID)" style="color: #fff">{{
                    drive.TEN
                }}</a></button>&nbsp;
            </template>
          </div>
          <div class="container">
            <h4 class="card-title" style="font-weight: bold; color: blue; text-align: center">
              HỆ ĐIỀU HÀNH ĐA DẠNG
            </h4>
          </div>
          <div class="container">
            <template v-for="os in LIST_HEDIEUHANH">
              <button class="badge badge-pill badge-warning"
                style=" margin: 20px; margin-top: 5px; margin-bottom: 5px; width: 200px; font-size: 20px; border-color: #fff">
                <a @click="findByOs(os.ID)" style="color: #fff">{{
                    os.TEN
                }}</a></button>&nbsp;
            </template>
          </div>
          <div class="col-md-12" style="
              border-top: 5px solid yellowgreen;
              margin-top: 20px;
              margin-left: 0px;
            "></div>
        </div>
        <br />
        <div class="row">
          <!-- <div class="col-md-2" style="
              font-weight: bold;
              font-size: 18px;
              background-color: #dc3545;
            ">
            <span style="color: #fff; margin-left: 10px">Khuyến mãi</span>
          </div> -->
          <div class="col-md-12" style="
              border-top: 2px solid #6c757d;
              margin-top: 13px;
              /* margin-left: 20px; */
            "></div>
        </div>
        <!-- products -->
        <template v-if="this.products.length > 0">
          <div class="row" style="margin-top: 20px">
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
    </div>
  </div>
</template>

  <script>
  // import JwPagination from "jw-vue-pagination";
  import axios from "axios";
  // import { mapGetters } from "vuex";
  const customLabels = {
    first: 'Đầu',
    last: 'Cuối',
    previous: 'Trước',
    next: 'Sau'
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
        customLabels
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
        const result = await axios.get(
          `http://localhost:3000/product/get-all-product-active`
        );
        this.products = result.data;
      },
      async listBrand() {
        const result = await axios.get(
          "http://localhost:3000/product/get-all-brand"
        );
        this.LIST_THUONGHIEU = result.data;
      },
      async listCpu() {
        const result = await axios.get(
          "http://localhost:3000/product/get-all-cpu"
        );
        this.LIST_CPU = result.data;
      },
      async listRam() {
        const result = await axios.get(
          "http://localhost:3000/product/get-all-ram"
        );
        this.LIST_RAM = result.data;
      },
  
      async listDrive() {
        const result = await axios.get(
          "http://localhost:3000/product/get-all-drive"
        );
        this.LIST_OCUNG = result.data;
      },
  
      async listOS() {
        const result = await axios.get(
          "http://localhost:3000/product/get-all-os"
        );
        this.LIST_HEDIEUHANH = result.data;
      },
  
      async findByBrand(brand) {
        const result = await axios.get(
          `http://localhost:3000/product/find-product-by-brand/${brand}`
        );
        this.products = result.data;
      },
  
      async findByCpu(cpu) {
        const result = await axios.get(
          `http://localhost:3000/product/find-product-by-cpu/${cpu}`
        );
        this.products = result.data;
      },
  
      async findByRam(ram) {
        const result = await axios.get(
          `http://localhost:3000/product/find-product-by-ram/${ram}`
        );
        this.products = result.data;
      },
  
      async findByOs(os) {
        const result = await axios.get(
          `http://localhost:3000/product/find-product-by-os/${os}`
        );
        this.products = result.data;
      },
  
      async findByDrive(drive) {
        const result = await axios.get(
          `http://localhost:3000/product/find-product-by-drive/${drive}`
        );
        this.products = result.data;
      },
  
      async findByName(name) {
        const result = await axios.get(
          `http://localhost:3000/product/find-product-by-name/${name}`
        );
        this.products = result.data;
      },
    },
  };
  </script>
