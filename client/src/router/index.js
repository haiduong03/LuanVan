import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: "/",
        name: "/",
        redirect: "/log-in",
    },
    // Đường dẫn trang chủ admin - /
    {
        path: "/log-in",
        name: "/login",
        meta: {
            layout: 'no-sidebar'
        },
        component: () =>
            import ('@/pages/LogIn.vue')

    },
    {
        path: '/home',
        name: 'home',
        meta: {
            layout: 'default'
        },
        // component: require('@/pages/Home.vue').default
        component: () =>
            import ('@/pages/Home.vue')
            //, beforeEnter: ifAuthenticated,
    },
    {
        path: '/test',
        name: 'test',
        meta: {
            layout: 'default'
        },
        // component: require('@/pages/Home.vue').default
        component: () =>
            import ('@/pages/test.vue')
    },
    {
        path: '/users',
        name: 'users',
        meta: {
            layout: 'default'
        },
        // component: require('@/pages/Home.vue').default
        component: () =>
            import ('@/pages/users/Index.vue')
    },

    // Đường dẫn trang chủ quản trị người dùng
    {
        path: '/users',
        name: 'users',
        meta: {
            layout: 'default'
        },
        // component: require('@/pages/Home.vue').default
        component: () =>
            import ('@/pages/users/ListUser.vue')
    },
    {
        path: '/users/adduser/',
        name: 'users-adduser',
        meta: {
            layout: 'default'
        },
        // component: require('@/pages/Home.vue').default
        component: () =>
            import ('@/pages/users/AddUser.vue')
    },
    {
        path: '/users/:id/del',
        name: 'user',
        meta: {
            layout: 'default'
        },
        // component: require('@/pages/Home.vue').default
        component: () =>
            import ('@/pages/users/_id/del.vue')
    },
    {
        path: '/users/:id/edit',
        name: 'user',
        meta: {
            layout: 'default'
        },
        // component: require('@/pages/Home.vue').default
        component: () =>
            import ('@/pages/users/_id/edit.vue')
    },
    {
        path: '/products',
        name: 'products',
        meta: {
            layout: 'default'
        },
        // component: require('@/pages/Home.vue').default
        component: () =>
            import ('@/pages/products/Index.vue')
    },
    {
        path: '/products/addproduct/',
        name: 'products-addproduct',
        meta: {
            layout: 'default'
        },
        // component: require('@/pages/Home.vue').default
        component: () =>
            import ('@/pages/products/AddProduct.vue')
    },

    // Đường dẫn trang giới thiệu
    {
        path: '/gioi-thieu',
        name: 'about',
        meta: {
            layout: 'no-sidebar'
        },
        component: () =>
            import ('@/pages/About.vue')
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

// const ifAuthenticated = (to, from, next) => {
//     if (localStorage.getItem(token)) {
//         next();
//         return;
//     }
//     router.push({
//         name: 'login',
//         params: {
//             returnTo: to.path,
//             query: to.query,
//         },
//     });
// };