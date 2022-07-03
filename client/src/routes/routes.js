import DashboardLayout from '../layout/DashboardLayout.vue'
import IndexLayout from '../layout/IndexLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import TableList from 'src/pages/TableList.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import Upgrade from 'src/pages/Upgrade.vue'

import UserIndex from 'src/pages/Users/Index.vue'
import UserEdit from 'src/pages/Users/_id/manage.vue'
import UserAdd from 'src/pages/Users/addUser.vue'
import ProductIndex from 'src/pages/Products/Index.vue'
import ProductAdd from 'src/pages/Products/addProduct.vue'

import HomeIndex from 'src/pages/Trangchu/Index.vue'
import Login from 'src/pages/Login.vue'

const routes = [
  {
    path: '/',
    component: IndexLayout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: HomeIndex
      },  
    ]
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },      
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
      }
    ]
  },
  {
    path: '/quanlyuser',
    component: DashboardLayout,
    children: [
      {
        path: 'userslist',
        name: 'UsersList',
        component: UserIndex
      },
      {
        path: ':id/manage',
        name: 'UsersEdit',
        component: UserEdit
      },        
      {
        path: 'adduser',
        name: 'UsersAdd',
        component: UserAdd
      },  
    ]
  },
  {
    path: '/quanlysanpham',
    component: DashboardLayout,
    children: [
      {
        path: 'productslist',
        name: 'ProductsList',
        component: ProductIndex
      },
      {
        path: ':id/manage',
        name: 'UsersEdit',
        component: UserEdit
      },        
      {
        path: 'addproduct',
        name: 'ProductAdd',
        component: ProductAdd
      },  
    ]
  },
  {
    path: '/login',
    component: Login,
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
