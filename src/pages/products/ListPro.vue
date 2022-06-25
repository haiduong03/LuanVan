<template>
    <div class="mt-3" style="">
        <b-card header="Phân loại sản phẩm" header-tag="header">
            <router-link :to="`/products/addtypepro`">
                <b-button variant="primary">Thêm loại SP</b-button>
            </router-link>
            <div class="" style="margin-top: 10px">
                <table class="table">
                    <thead>
                        <tr class="is-selected">
                            <th style="text-align: center">Mã Loại</th>
                            <th style="text-align: center">Tên Loại</th>
                            <th style="text-align: center">Trạng thái</th>
                            <th style="text-align: center">Hình</th>
                            <th style="text-align: center"></th>
                        </tr>
                    </thead>
                    <tbody class="table-row">
                        <tr v-for="(use, index) in users" :key="index">
                            <td style="text-align: center">{{ use.list_id }}</td>
                            <td style="text-align: center">{{ use.list_name }}</td>
                           
                            <template v-if="use.list_status == 0">
                                    <td style="text-align: center">Active</td>
                            </template>
                            <template v-else>
                                <td style="text-align: center">Enable</td>
                            </template>
                            <td style="text-align: center"></td>
                            <td style="text-align: center">
                                <!-- <b-icon v-b-tooltip.hover title="Thêm" scale="1" icon="person-plus"></b-icon>&nbsp; -->
                                <router-link style="text-decoration: none; color: inherit"
                                    :to="`/products/${use.list_id}/editlistpro`">
                                    <b-button variant="primary">Sửa</b-button>
                                </router-link>
                                <router-link style="text-decoration: none; color: inherit"
                                    :to="`/products/listpro`">
                                <b-button @click="delListPro(use.list_id)" variant="danger">Xóa</b-button></router-link>
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
            this.data = await axios.get(`http://localhost:3000/product/get-all-list-pro/1`, {
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
        async delListPro(list_id) {
            const token = localStorage.token;
             console.log(this.$route.params.id)
            axios.delete( `http://localhost:3000/product/remove-list-product/${list_id}`,{
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
}
</script>