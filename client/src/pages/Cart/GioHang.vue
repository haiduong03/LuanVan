<template>
  <div class="content">
    <!-- <div class="container-fluid"> -->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <template v-if="carts.length">

            <h3 class="card-title" style="text-align: center !important ; font-weight: bold;">
              GIỎ HÀNG
            </h3>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th style="text-align: center !important ; font-weight: bold; color:black">STT
                  </th>
                  <th class="col-md-2" style="text-align: center !important ; font-weight: bold; color:black">Ảnh
                  </th>
                  <th class="col-md-6" style="text-align: center !important ; font-weight: bold; color:black">Tên sản
                    phẩm
                  </th>
                  <th class="col-md-1" style="text-align: center !important ; font-weight: bold; color:black">Số lượng
                  </th>
                  <th class="col-md-2" style="text-align: center !important ; font-weight: bold; color:black">Giá
                  </th>
                  <th class="col-md-1" style="text-align: center !important ; font-weight: bold; color:black">Xóa
                  </th>
                  <!-- <th class="col-md-2" style="text-align: center !important ; font-weight: bold; color:black">Tổng
                    tiền: </th> -->
                </tr>
              </thead>
              <template v-for="(cart, index) in carts">
                <tbody>
                  <tr>
                    <th scope="row" style="text-align: center;">
                      {{ index + 1 }}
                    </th>
                    <td>
                      <img @click="detail(cart.ID)" class="img-fluid mouse-hover"
                        :src="'http://localhost:3000/' + cart.ANH + ''" alt="..." />
                    </td>
                    <td @click="detail(cart.ID)" class="mouse-hover">{{ cart.THUONGHIEU + cart.TEN }}</td>
                    <td style="text-align: center !important">
                      <input type="number" label="Số lượng" min="1" max="10" step="1" v-model="cart.SL"
                        style=" width:70%; line-height: 30px; text-align: center;" @change="update(cart.ID, cart.SL)">
                    </td>
                    <td style="text-align: center !important">{{ cart.GIA * cart.SL | numeral("0,0") }} VND</td>
                    <td style="text-align: center !important"><button @click="deleteSP(cart.ID)" type="button"
                        class="row-sm-2 btn-secondary btn-fill">Xóa</button></td>

                  </tr>
                </tbody>
              </template>
            </table>

            <div style="text-align: left">
              <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-danger btn-fill float-right"
                @click="paid()">
                Thanh toán
              </button>
            </div>
          </template>
          <template v-else>
            <h1 style="text-align: center">GIỎ HÀNG TRỐNG</h1>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      type: ['', 'info', 'success', 'warning', 'danger'],
      notifications: {
        topCenter: false
      },
      carts: [],
      sum: 0
      // SL: null
    }
  },

  mounted() {
    this.data();
    // console.log(this.sum)
  },

  methods: {
    notifyVue(verticalAlign, horizontalAlign) {
      const color = Math.floor((Math.random() * 4) + 1)
      this.$notifications.notify(
        {
          message: `<span>Xóa sản phẩm hàng thành công !!</span>`,
          icon: 'nc-icon nc-simple-remove',
          horizontalAlign: 'right',
          verticalAlign: 'top',
          type: 'success'
        })
    },
    notifyVue1(verticalAlign, horizontalAlign) {
      const color = Math.floor((Math.random() * 4) + 1)
      this.$notifications.notify(
        {
          message: `<span>Cảm ơn quý khách đã sử dụng dịch vụ !!</span>`,
          icon: 'nc-icon nc-favourite-28',
          horizontalAlign: horizontalAlign,
          verticalAlign: verticalAlign,
          type: this.type[2]
        })
    },
    data() {
      if (localStorage.cart)
        this.carts = JSON.parse(localStorage.cart);
      else this.carts = null
    },
    deleteSP(id) {
      let text = "BẠN CÓ MUỐN XÓA SẢN PHẨM NÀY";

      if (confirm(text) == true) {
        const cart = JSON.parse(localStorage.cart);
        for (let index = 0; index < cart.length; index++) {
          if (cart[index].ID == id) {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
          }
        }
        if (cart.length = null) {
          localStorage.removeItem("cart");
        }

        this.$notifications.notify(
          {
            message: `<span>Xóa sản phẩm hàng thành công !!</span>`,
            icon: 'nc-icon nc-simple-remove',
            horizontalAlign: 'right',
            verticalAlign: 'top',
            type: 'danger'
          })
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      }
    },

    update(id, qty) {
      if (parseInt(qty) <= 0 && parseInt(id) > 10) {
        alert("Số lượng sản phẩm chỉ được từ 1 đến 10 ")
      } else {
        const cart = JSON.parse(localStorage.cart);
        for (let index = 0; index < cart.length; index++) {
          if (cart[index].ID == id) {
            cart[index].SL = parseInt(qty);
            localStorage.setItem("cart", JSON.stringify(cart));
          }
        }
        this.$notifications.notify(
          {
            message: `<span>Cập nhật sản phẩm hàng thành công !!</span>`,
            icon: 'nc-icon nc-cart-simple',
            horizontalAlign: 'right',
            verticalAlign: 'top',
            type: 'success'
          })
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      }
    },
    paid() {

      // this.$notifications.notify(
      //   {
      //     message: `<span>Xóa sản phẩm hàng thành công !!</span>`,
      //     icon: 'nc-icon nc-simple-remove',
      //     horizontalAlign: 'right',
      //     verticalAlign: 'top',
      //     type: 'success'
      //   })
      if (!localStorage.user)
        this.$router.push(`/user/dangnhap`)
      else {
        this.$router.push(`/giohang/thanhtoan`)
      }
    },
    detail(id) {
      this.$router.push(`/quanlysanpham/${id}/chitietsp`)
    }
  }
};
</script>
<style >
.mouse-hover {
  cursor: pointer;
}
</style>
