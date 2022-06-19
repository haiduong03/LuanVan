<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Danh sách người dùng</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Tên
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Email
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Chức vụ
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                SĐT
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="users in alluser" v-bind:key="users.user_id">
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ users.user_name}}</h6>
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
              <!-- <td class="align-middle text-center text-sm">
                <vsud-badge color="success" variant="gradient" size="sm"
                  >{{ users.user_type}}</vsud-badge
                >
              </td> -->
               <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold" >
                    Nhân viên {{ users.user_type}}
                  </span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">
                  {{ users.user_phone}}</span>
              </td>
              <td class="align-middle">
                <button style="background-color: yellow" v-on:click="editUser(users.user_id)"><a href="../editNhanvien">Edit</a></button>
              <button style="background-color: red" v-on:click="delUser(users.user_id)"><a href="../nhanvien">Delete</a></button>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
//import VsudAvatar from "@/components/VsudAvatar.vue";
//import VsudBadge from "@/components/VsudBadge.vue";
// import img1 from "../../assets/img/team-2.jpg";
// import img2 from "../../assets/img/team-3.jpg";
// import img3 from "../../assets/img/team-4.jpg";
// import img4 from "../../assets/img/team-3.jpg";
// import img5 from "../../assets/img/team-2.jpg";
// import img6 from "../../assets/img/team-4.jpg";
import axios from 'axios'


export default {
 
  name: "nhanvien-table",
  data() {
    return {
      alluser:'',
      users:null
    };
  },
  components: {
   // VsudAvatar,
    //VsudBadge,
  },
    mounted(){
      const token=localStorage.token;
       console.log(localStorage.token);
      const res =  axios.get(`http://localhost:3000/user/getAllUsr/1`, 
      {headers: {
            "Access-Control-Allow-Origin" : "*",
            // "Content-type": "Application/json",
            "Authorization": `Bearer ${token}`
            }   
        })
    //  console.log(res=>{data});
     res.then((res)=>{
        this.alluser= res.data.data
        console.log(res.data.data[1])
      })
    },
   methods: {
    
    async delUser(user_id) {
      const token=localStorage.token;
    axios.delete('http://localhost:3000/user/remove/'+user_id ,
    {headers: {
            "Access-Control-Allow-Origin" : "*",
            // "Content-type": "Application/json",
            "Authorization": `Bearer ${token}`
            }   
        })
      .then((result)=>{
      console.warn(result)
    })
    },
     async editUser(user_id) {
        axios.put('http://localhost:3000/user/update/'+user_id).then((result)=>{
      console.warn(result)
    })
     },
    }
  }


</script>
