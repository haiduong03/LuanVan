<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary container">
        <a class="navbar-brand" href="#/home" style="color:white;">LaptopDD</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- <form class="form-inline my-2 my-lg-0 ml-5" style="width:100%;">
                <input class="form-control mr-sm-2" style="width:75%;" type="search" placeholder="Tìm kiếm"
                    aria-label="Search">
                <button type="button" class="btn btn-light"
                    style="color:black;background-color:#fff;border-color:white">
                    <i class="nc-icon nc-zoom-split" style="color:black;font-size: 16px;"></i>
                </button>
            </form> -->
            <ul class="navbar-nav" style="width: 100% !important;">
                <template v-if="user">
                    <li class="nav-item dropdown ml-auto mr-1">
                        <base-dropdown :title="user">
                            <a class="dropdown-item" href="#/user/thongtin">Chỉnh sửa thông tin</a>
                            <a class="dropdown-item" href="#">Thông tin đơn hàng</a>
                            <a class="dropdown-item" @click="logout()">Đăng xuất</a>
                        </base-dropdown>
                    </li>
                </template>
                <template v-else>
                    <li class="nav-item dropdown ml-auto mr-1">
                        <base-dropdown title="Tài khoản">
                            <a class="dropdown-item" href="#/user/dangky">Đăng ký</a>
                            <a class="dropdown-item" href="#/user/dangnhap">Đăng nhập</a>
                        </base-dropdown>
                    </li>
                </template>
                <li class="nav-item mr-5" style="list-style-type: none;width: max-content !important;">
                    <!-- <a class="nc-icon nc-cart-simple" style="color: white" href="#">&nbsp;Giỏ hàng
                    <span>(0)</span>
                    </a> -->
                    <div style="
                    padding-top: 16px;

                    display: inline;
                    padding: 7px;
                  ">
                        &nbsp;
                        <!-- <span style="
                      position: absolute;
                      right: 397px;
                      top: 10px;
                      z-index: 1;
                      font-weight: bold;
                      font-size: 13px;
                      background-color: #fff;
                      border-radius: 80%;
                      padding-right: 8px;
                      padding-left: 8px;
                      color: rgb(255, 255, 255) !important;
                      padding-top:2px;
                    "></span> -->
                        <router-link style="text-decoration: none; color: inherit;" to="/giohang">
                            <p style="font-weight: bold; margin-top:8px; font-size:25px; color:orange"
                                class="nc-icon nc-cart-simple">{{ this.cart }} </p>
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            user: localStorage.user,
            cart: null,
            activeNotifications: false,
            form: {
                email: null,
                _id: null,
                username: null,
            },
        };
    },
    computed: {
        routeName() {
            const { name } = this.$route;
            return this.capitalizeFirstLetter(name);
        },
    },
    mounted() {
        this.data()
    },
    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        toggleNotificationDropDown() {
            this.activeNotifications = !this.activeNotifications;
        },
        closeDropDown() {
            this.activeNotifications = false;
        },
        toggleSidebar() {
            this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
        },
        hideSidebar() {
            this.$sidebar.displaySidebar(false);
        },
        logout() {
            localStorage.clear();
            setTimeout(function () {
                window.location.reload();
            }, 100);
            this.$router.push("/")
        },
        data() {
            if (localStorage.cart) {
                const cart = JSON.parse(localStorage.cart);
                cart.forEach(e => {
                    this.cart += e.SL;
                });
            }
            else this.cart = 0;
        },

    },
};
</script>
<style>
</style>