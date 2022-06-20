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