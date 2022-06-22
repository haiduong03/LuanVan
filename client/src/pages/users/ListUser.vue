<template>
  <div>
    <div class="card mb-4">
      <div class="card-header pb-0">
        <h6>Danh sách người dùng</h6>
        <b-button @click="showModals" variant="primary">Thêm tài khoản</b-button>
        <adduser-modal></adduser-modal>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table">
            <thead>
              <tr class="is-selected">
                <th style="text-align: center">STT</th>
                <th style="text-align: center">Email</th>
                <th style="text-align: center">Họ tên</th>
                <th style="text-align: center">User</th>
                <!-- <th style="text-align: center">Control</th> -->
              </tr>
            </thead>
             <tbody>
            <tr v-for="users in allUser" v-bind:key="users.user_id">
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <p class="text-xs text-secondary mb-0">
                      {{ users.user_name}}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ users.user_email}}</p>
                <p class="text-xs text-secondary mb-0">{{ users.user_address}}</p>
              </td>
              <td class="align-middle text-center text-sm">
                <vsud-badge color="success" variant="gradient" size="sm"
                  >Online</vsud-badge
                >
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">
                  {{ users.user_phone}}</span>
              </td>
              <td class="align-middle"> 
                <!-- <button 
                value="{{ users.user_id}}"
                  v-on:click="delUser()"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  ><i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete</button
                > -->
                <button style="background-color: red" v-on:click="delUser(users.user_id)"><a href="../Tables">Delete</a></button>
              </td>
            </tr>
          </tbody>
            <!-- <tbody class="table-row">
              <tr v-for="(use, ListUser) in users" :key="ListUser.vue">
                <td style="text-align: center">{{ ListUser + 1 }}</td>
                <td>{{ use.user_email }}</td>
                <td>{{ use.user_name }}</td>
                <td style="text-align: center">{{ use.user_address }}</td>
                <td style="text-align: center">
                  <b-icon v-b-tooltip.hover title="Thêm" scale="1" icon="person-plus"></b-icon>&nbsp;
                  <router-link style="text-decoration: none; color: inherit" :to="`/users/${use.user_id}/manage`">
                    <b-icon v-b-tooltip.hover title="Sửa" scale="1" icon="brush"></b-icon>
                  </router-link>&nbsp;
                  <b-icon v-b-tooltip.hover title="Xóa" scale="1" icon="file-break"></b-icon>
                </td>
              </tr>
            </tbody> -->
          </table>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import AdduserModal from '@/components/modals/AdduserModal'
import axios from 'axios'
export default {
  name: "ListUser",
  data() {
    return {
      allUser:'',
      // data: [],
      // users: [],
    };
  },
  component: {
    AdduserModal,
  },
  mouted() {
    // this.getAllUsr();
        //  const token=localStorage.token;
      const res = axios.get(`http://localhost:3000/user/getAllUsr/1`,
        // {headers: {
        //     "Access-Control-Allow-Origin" : "*",
        //     // "Content-type": "Application/json",
        //     "Authorization": `Bearer ${token}`
        //     }   
        // }
) 
     console.log(res);
     res.then((res)=>{
        this.allUser= res.data.data
        console.log(res.data.data)
        
      })
  },
  methods: {
    showModals() {
      this.$root.$emit('bv::show::modal', 'modal-1', '#btnShow');
    },
    // console.log(res)
    // async getAllUsr() {
    //   const token = localStorage.token;

    //   console.log(token);
    //   this.data = await axios.get(`http://localhost:3000/user/getAllUsr/1`,
    //     {
    //       headers: {
    //         "Access-Control-Allow-Origin": "*",
    //        // "Content-type": "Application/json",
    //         "Authorization": `Bearer ${token}`
    //       }
    //     });
    //   console.log(this.data.data.data);
    //   this.users = this.data.data;
    // },
  },


}
</script>