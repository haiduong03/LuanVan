import DashboardLayout from "../layout/DashboardLayout.vue";
// GeneralViews
import NotFound from "../pages/NotFoundPage.vue";

// Admin pages
import Overview from "src/pages/Overview.vue";
import UserProfile from "src/pages/UserProfile.vue";
import TableList from "src/pages/TableList.vue";
import Typography from "src/pages/Typography.vue";
import Icons from "src/pages/Icons.vue";
import Maps from "src/pages/Maps.vue";
import Notifications from "src/pages/Notifications.vue";
import Upgrade from "src/pages/Upgrade.vue";
import UserIndex from "src/pages/Users/Index.vue";

import Nhanvien from "src/pages/Users/Nhanvien.vue";
import ChinhSuaNhanVien from "src/pages/Users/_id/chinhsuaNV.vue";
import ThemNhanVien from "src/pages/Users/ThemNV.vue";
import Khachhang from "src/pages/Users/Khachhang.vue";
import ChinhSuaKhachHang from "src/pages/Users/_id/chinhsuaKH.vue";
import ThemKhachHang from "src/pages/Users/ThemKH.vue";
import DangNhap from "src/pages/DangNhap.vue";
import DanhSachSanPham from "src/pages/Products/SanPham.vue";
import ThemSanPham from "src/pages/Products/ThemSanPham.vue";
import ChinhSuaSanPham from "src/pages/Products/_id/chinhsuaSP.vue";
import LinhKien from "src/pages/Products/LinhKien.vue";
import DonHang from "src/pages/Order/Order.vue";
import ChiTietDonHang from "src/pages/Order/DetailOrder.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/admin/overview",
  },
  {
    path: "/admin",
    component: DashboardLayout,
    redirect: "/admin/overview",
    children: [
      {
        path: "overview",
        name: "Overview",
        component: Overview,
      },
      {
        path: "user",
        name: "User",
        component: UserProfile,
      },
      {
        path: "table-list",
        name: "Table List",
        component: TableList,
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography,
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons,
      },
      {
        path: "maps",
        name: "Maps",
        component: Maps,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: Upgrade,
      },
    ],
  },
  {
    path: "/quanlyuser",
    component: DashboardLayout,
    children: [
      {
        path: "userslist",
        name: "UsersList",
        component: UserIndex,
      },
      {
        path: "nhanvien",
        name: "Nhanvien",
        component: Nhanvien,
      },
      {
        path: ":id/chinhsuaNV",
        name: "ChinhSuaNhanVien",
        component: ChinhSuaNhanVien,
      },
      {
        path: "themnv",
        name: "ThemNhanVien",
        component: ThemNhanVien,
      },
      {
        path: "khachhang",
        name: "Khachhang",
        component: Khachhang,
      },
      {
        path: ":id/chinhsuakh",
        name: "ChinhSuaKhachHang",
        component: ChinhSuaKhachHang,
      },
      {
        path: "themkh",
        name: "ThemKhachHang",
        component: ThemKhachHang,
      },
    ],
  },
  {
    path: "/quanlysanpham",
    component: DashboardLayout,
    children: [
      {
        path: "sanpham",
        name: "SanPham",
        component: DanhSachSanPham,
      },
      {
        path: "linhkien",
        name: "LinhKien",
        component: LinhKien,
      },
      {
        path: "themsanpham",
        name: "ThemSanPham",
        component: ThemSanPham,
      },
      {
        path: ":id/suasanpham",
        name: "SuaSanPham",
        component: ChinhSuaSanPham,
      },
    ],
  },
  {
    path: "/quanlydonhang",
    component: DashboardLayout,
    children: [
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
    path: "/dangnhap",
    component: DangNhap,
  },
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
