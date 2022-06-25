<template>
    <div class="mt-3" style="">
        <b-card header="Danh sách nhân viên" header-tag="header">
            <router-link :to="`/users/adduser`">
                <b-button variant="primary">Thêm tài khoản</b-button>
            </router-link>
            <adduser-modal></adduser-modal>
            <div class="" style="margin-top: 10px">
                <table class="table">
                    <thead>
                        <tr class="is-selected">
                            <th style="text-align: center">STT</th>
                            <th style="text-align: center">Họ tên</th>
                            <th style="text-align: center">Email</th>
                            <th style="text-align: center">Số điện thoại</th>
                            <th style="text-align: center">Trạng thái</th>
                            <th style="text-align: center">Control</th>
                        </tr>
                    </thead>
                    <tbody class="table-row">
                        <tr v-for="(use, index) in users" :key="index">
                            <template v-if="use.user_type == 1">
                                <td style="text-align: center">{{ index + 1 }}</td>
                                <td style="text-align: center">{{ use.user_name }}</td>
                                <td style="text-align: center">{{ use.user_email }}</td>
                                <td style="text-align: center">{{ use.user_phone }}</td>
                                <template v-if="use.user_status == 0">
                                    <td style="text-align: center">Hoạt động</td>
                                </template>
                                <template v-else>
                                    <td style="text-align: center">Không hoạt động</td>
                                </template>
                                <td style="text-align: center">
                                    <router-link style="text-decoration: none; color: inherit"
                                        :to="`/users/${use.user_id}/editNV`">
                                        <b-button variant="primary">Sửa</b-button>

                                        <!-- <b-icon v-b-tooltip.hover title="Sửa" scale="1" icon="brush"></b-icon> -->
                                    </router-link>&nbsp;

                                    <b-button @click="delUser(use.user_id)" variant="danger">Xóa</b-button>
                                    <!-- </router-link>&nbsp; -->
                                    <!-- :to="`/users/${use.user_id}/del`"> -->
                                    <!-- v-on:click="delUser(users.user_id)"@click.prevent="delUer" -->
                                </td>
                            </template>
                            <template v-else></template>
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
            this.data = await axios.get(`http://localhost:3000/user/get-all-usr/1`, {
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
            this.$swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$swal(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
            // this.$swal('Xóa thành công!!!');
        }
    },
    components: { AdduserModal }
}
</script>