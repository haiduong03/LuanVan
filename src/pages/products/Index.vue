<template>
    <div class="mt-3" style="">
        <b-card header="Danh sách sản phẩm" header-tag="header">
            <router-link :to="`/products/addproduct`">
                <b-button variant="primary">Thêm sản phẩm</b-button>
            </router-link>
            <adduser-modal></adduser-modal>
            <div class="" style="margin-top: 10px">
                <table class="table">
                    <thead>
                        <tr class="is-selected">
                            <th style="text-align: center">STT</th>
                            <th style="text-align: center">Mã SP</th>
                            <th style="text-align: center">Tên SP</th>
                            <th style="text-align: center">Loại SP</th>
                            <th style="text-align: center">Giá</th>
                            <th style="text-align: center">Hình</th>
                            <th style="text-align: center"></th>
                        </tr>
                    </thead>
                    <tbody class="table-row">
                        <tr v-for="(use, index) in users" :key="index">
                            <td style="text-align: center">{{ index + 1 }}</td>
                            <td style="text-align: center">{{ use.product_id }}</td>
                            <td style="text-align: center">{{ use.product_name }}</td>
                            <td style="text-align: center">{{ use.list_id }}</td>
                            <td style="text-align: center">{{ use.product_price }}</td>
                            <td style="text-align: center"><img :src="`data:image/gif;base64,{{use.product_img}}`"/>{{use.product_img}}</td>
                            <td style="text-align: center">
                                <!-- <b-icon v-b-tooltip.hover title="Thêm" scale="1" icon="person-plus"></b-icon>&nbsp; -->
                                <b-button variant="primary">Sửa</b-button>
                                <b-button variant="danger">Xóa</b-button>
                                <!-- <router-link style="text-decoration: none; color: inherit"
                                    :to="`/users/${use.user_id}/del`"> -->
                                <!-- <b-icon  @click="delUser(use.user_id)" v-b-tooltip.hover title="Xóa" scale="1"
                                    icon="file-break"></b-icon> -->
                                <!-- </router-link>&nbsp; -->
                                <!-- :to="`/users/${use.user_id}/del`"> -->
                                <!-- v-on:click="delUser(users.user_id)"@click.prevent="delUer" -->
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </b-card>
    </div>
</template>

<script>
import AdduserModal from '@/components/modals/AdduserModal'
import axios from "axios";
export default {
    data() {
        return {
            data: [],
            users: [],
        };
    },
    component: {
        AdduserModal
    },
    mounted() {
        this.solieu();
    },
    methods: {
        showModals() {
            this.$root.$emit("bv::show::modal", "modal-1", "#btnShow");
        },
        async solieu() {
            const token = localStorage.token;
            this.data = await axios.get(`http://localhost:3000/product/get-all-prod/1`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            console.log(this.data);
            console.log(this.data.data.data);
            this.users = this.data.data.data;
        },
        async delUser(user_id) {
            const token = localStorage.token;
            console.log(this.$route.params.id)
            axios.delete(`http://localhost:3000/user/remove-usr/${user_id}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            }).then((result) => {
                console.warn(result);
            });
        }
    },
    components: { AdduserModal }
}
</script>