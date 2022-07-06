<template>
    <div class="content">

        <!-- <div class="container-fluid"> -->
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
                    <li class="breadcrumb-item"><a href="#">Sản phẩm</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Chi tiết sản phẩm</li>
                </ol>
            </nav>
            <div class="row">

                <h5 class="card-title" style="font-weight: bold">
                    Laptop Asus TUF Gaming FX506LHB-HN188W i5 10300H/8GB/512GB/15.6"FHD/GTX 1650 4GB/Win11
                </h5>
            </div>


            <div class="row">
                <!-- left -->

                <div class="col-md-6">
                    <div class="col-12">
                        <div class="card" style="">
                            <img class="img-fluid" src="img/faces/laptop-2.jpg" alt="..." />
                        </div>
                    </div>
                </div>
                <!--right-->
                <div class="col-md-6">
                    <div class="col-12">
                        <!-- <h5 class="card-title" style="font-weight: bold">
                            &nbsp;
                        </h5> -->
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <td colspan="2" style="font-weight: bold; text-align: center!important;">Thông số
                                        chi tiết</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width="30%">Hãng</td>
                                    <td>{{THUONGHIEU}}</td>
                                </tr>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>15.6 inch, 1920 x 1080 Pixels, IPS, 144 Hz, Anti-glare LED-backlit
                                    </td>
                                </tr>
                                <tr>
                                    <td>CPU</td>
                                    <td>{{CPU}}&nbsp;/&nbsp;{{THONGTINCPU}}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>8 GB (1 thanh 8 GB), DDR4, 2933 MHz</td>
                                </tr>
                                <tr>
                                    <td>Ổ cứng</td>
                                    <td>SSD 512 GB</td>
                                </tr>
                                <tr>
                                    <td>Đồ họa</td>
                                    <td>NVIDIA GeForce GTX 1650 4GB; Intel UHD Graphics</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>Win 11</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <button type="button" class="row-sm-2 btn-danger btn-fill btn btn-lg btn-block"
                        @click="notifyVue('top', 'right')">Mua
                        hàng</button>
                </div>
                <div class="col-6">
                    <!-- <h5 class="card-title" style="font-weight: bold">Giá sản phẩm:</h5> -->
                    <div style="
                          font-weight: bold;
                          font-size: 50px;
                          color: #363636;
                          line-height: 1.25;
                          /* margin-top: 10px; */
                        ">Giá: 
                        <span style="color:#FF4A55">49.000.000 đ</span>
                    </div>
                </div>
            </div>
            <!-- Mô tả sản phẩm -->
            <div class="row">
                <p class="text-justify">
                    Hiệu năng cực đỉnh cho mọi tác vụ
                    Hiệu năng đáng tin cậy trên ASUS TUF Gaming F15 FX506LH HN188W giúp bạn chơi game, livestream và
                    thực hiện đa tác vụ.
                    CPU Intel i5 tốc độ cao có thể kích hoạt nhiều luồng để xử lý đa nhiệm.
                    Kết hợp với card màn hình GTX 1650, đáp ứng tốc độ khung hình cao của nhiều tựa game phổ biến.
                    Tăng tốc độ tải ứng dụng với ổ SSD 512GB NVMe PCIe® và dễ dàng nâng cấp khả năng lưu trữ với ổ SSD
                    thứ hai.
                </p>
            </div>
            <!-- Câu hỏi thường gặp -->
            <div class="row">


            </div>

        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    components: {},
    data() {
        return {
            type: ['', 'info', 'success', 'warning', 'danger'],
            notifications: {
                topCenter: false
            }
        }
    },
    mounted() {
    this.findSP()
  },
    methods: {
        notifyVue(verticalAlign, horizontalAlign) {
            const color = Math.floor((Math.random() * 4) + 1)
            this.$notifications.notify(
                {
                    message: `<span>Mua hàng thành công !!</span>`,
                    icon: 'nc-icon nc-app',
                    horizontalAlign: horizontalAlign,
                    verticalAlign: verticalAlign,
                    type: this.type[2]
                })
        },
    async findSP() {
    //   const token = localStorage.token;
      const result = await axios.get(`http://localhost:3000/product/find-product-by-id/${this.$route.params.id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          // "Content-type": "Application/json",
          "Authorization": `Bearer ${token} `
        }
      });
      console.log(result)
      this.TEN = result.data[0].TEN;
      this.CPU = result.data[0].CPU;
      this.RAM = result.data[0].RAM;
      this.OCUNG = result.data[0].OCUNG;

       this.DUNGLUONGOCUNG = result.data[0].DUNGLUONGOCUNG;
      this.DUNGLUONGRAM = result.data[0].DUNGLUONGRAM;
      this.GIA = result.data[0].GIA;
      this.HEDIEUHANH = result.data[0].HEDIEUHANH;

         this.MOTA = result.data[0].MOTA;
      this.THONGTINCPU = result.data[0].THONGTINCPU;
      this.THUONGHIEU = result.data[0].THUONGHIEU;

    },
    }
};

</script>
<style lang="scss">
</style>
