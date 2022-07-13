// import DashboardLayout from "../layout/DashboardLayout.vue";
import IndexLayout from "../layout/IndexLayout.vue";
// GeneralViews
import NotFound from "../pages/NotFoundPage.vue";

// Admin pages
// import Overview from "src/pages/Overview.vue";
// import UserProfile from "src/pages/UserProfile.vue";
// import TableList from "src/pages/TableList.vue";
// import Typography from "src/pages/Typography.vue";
// import Icons from "src/pages/Icons.vue";
// import Maps from "src/pages/Maps.vue";
// import Notifications from "src/pages/Notifications.vue";
// import Upgrade from "src/pages/Upgrade.vue";
// import UserIndex from "src/pages/Users/Index.vue";
// import Nhanvien from "src/pages/Users/Nhanvien.vue";
// import EditNV from "src/pages/Users/_id/chinhsuaNV.vue";
// import AddNV from "src/pages/Users/ThemNV.vue";
// import Khachhang from "src/pages/Users/Khachhang.vue";
// import EditKH from "src/pages/Users/_id/chinhsuaKH.vue";
// import AddKH from "src/pages/Users/ThemKH.vue";

// import SanPhamDanhSach from "src/pages/Products/SanPham.vue";
// import SanPhamThem from "src/pages/Products/ThemSanPham.vue";

// import LinhKien from "src/pages/Products/LinhKien.vue";

import DangNhapUser from "src/pages/Users/DangNhap.vue";
import DangKyUser from "src/pages/Users/DangKy.vue";
// import EditUser from "src/pages/Users/_id/chinhsuaKH.vue";

import TrangChu from "src/pages/TrangChu/Index.vue";
import ChiTietSP from "src/pages/Products/_id/chitietsp.vue";

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
      // {
      //     path: ":id/chinhsuaKH",
      //     name: "chinhsuaKH",
      //     component: EditUser,
      // },
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
