<template>
    <div class="mt-3" style="">
        <b-card header="Quản trị người dùng" header-tag="header">
            <div class="" style="margin-top: 10px">
                <table class="table">
                    <thead>
                        <tr class="is-selected">
                            <th style="text-align: center">STT</th>
                            <th style="text-align: center">Email</th>
                            <th style="text-align: center">Họ tên</th>
                            <th style="text-align: center">User</th>
                            <th style="text-align: center">Control</th>
                        </tr>
                    </thead>
                    <tbody class="table-row">
                        <tr v-for="(use, index) in users" :key="index">
                            <td style="text-align: center">{{ index + 1 }}</td>
                            <td>{{ use.user_email }}</td>
                            <td>{{ use.user_name }}</td>
                            <td style="text-align: center">{{ use.user_address }}</td>
                            <td style="text-align: center">
                                <b-icon v-b-tooltip.hover title="Thêm" scale="1" icon="person-plus"></b-icon>&nbsp;
                                <router-link style="text-decoration: none; color: inherit"
                                    :to="`/users/${use.user_id}/edit`">
                                    <b-icon v-b-tooltip.hover title="Sửa" scale="1" icon="brush"></b-icon>
                                </router-link>&nbsp;
                                <router-link style="text-decoration: none; color: inherit"
                                    :to="`/users/${use.user_id}/del`">
                                <b-icon   v-b-tooltip.hover title="Xóa" scale="1"
                                    icon="file-break"></b-icon>
                                    </router-link>&nbsp;
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
import axios from "axios";
export default {
    data() {
        return {
            data: [],
            users: [],
        };
    },

    mounted() {
        this.solieu();

    },

    methods: {
        async solieu() {
            const token = localStorage.token;
            this.data = await axios.get(`http://localhost:3000/user/get-all-usr/1`,
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        // "Content-type": "Application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
            console.log(this.data)
            console.log(this.data.data.data)
            this.users = this.data.data.data;
        },
        async delUser() {
            const token = localStorage.token; 
           axios.delete(`http://localhost:3000/user/remove/${use.user_id}`,{
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
           }
            ).then((result) => {
                console.warn(result)
            })
        }
    }
}
</script>