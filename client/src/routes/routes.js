// import DashboardLayout from "../layout/DashboardLayout.vue";
import IndexLayout from "../layout/IndexLayout.vue";
// GeneralViews
import NotFound from "../pages/NotFoundPage.vue";

import DangNhapUser from "src/pages/Users/DangNhap.vue";
import DangKyUser from "src/pages/Users/DangKy.vue";
import TrangChu from "src/pages/Trangchu/Index.vue";
import ChiTietSP from "src/pages/Products/_id/chitietsp.vue";

import ThongTinCaNhan from "src/pages/Users/_id/thongtincanhan.vue";

import DonHang from "src/pages/Cart/DonHang.vue";
import ChiTietDonHang from "src/pages/Cart/ChiTietDonHang.vue";
import GioHang from "src/pages/Cart/GioHang.vue";
import ThanhToan from "src/pages/Cart/ThanhToan.vue";

const routes = [
  {
    path: "/",
    component: IndexLayout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: TrangChu,
      },
    ],
  },
  {
    path: "/quanlysanpham",
    component: IndexLayout,
    children: [
      {
        path: ":id/chitietsp",
        name: "chitietSP",
        component: ChiTietSP,
      },
    ],
  },
  {
    path: "/giohang",
    component: IndexLayout,
    children: [
      {
        path: "/",
        name: "GioHang",
        component: GioHang,
      },
      {
        path: "thanhtoan",
        name: "ThanhToan",
        component: ThanhToan,
      },
      {
        path: "donhang",
        name: "DonHang",
        component: DonHang,
      },
      {
        path: "chitietdonhang/:id",
        name: "ChiTietDonHang",
        component: ChiTietDonHang,
      },
    ],
  },

  {
    path: "/user",
    component: IndexLayout,
    children: [
      {
        path: "dangnhap",
        name: "DangNhap",
        component: DangNhapUser,
      },
      {
        path: "dangky",
        name: "DangKy",
        component: DangKyUser,
      },
      {
        path: "thongtin",
        name: "thongtin",
        component: ThongTinCaNhan,
      },
    ],
  },
  // {
  //     path: "/dangnhap",
  //     component: DangNhapUser,
  // },
  {
    path: "*",
    component: NotFound,
  },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
