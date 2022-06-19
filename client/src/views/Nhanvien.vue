/* eslint-disable vue/no-unused-components */
/* eslint-disable vue/no-unused-components */
<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <nhanvien-table />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <projects-table />
      </div>
    </div>
  </div>
</template>

<script>
// import NhanvienTables from "./components/NhanvienTables";
// import axios from 'axios'
// export default {
//   name: "nhanvien",
//   components: {
//    NhanvienTables,
//   },
import NhanvienTable from "./components/NhanvienTable";
//import axios from 'axios'
export default {
  name: "nhanvien",
  components: {
    NhanvienTable,
  },
  props: {
    msg: String
  },
  data(){
    return{

      // alluser:''
    }
},
    // mounted(){
    //   //axios.get('http://localhost/server/src/configs/db.config.js')
    //   const res =  axios.get(`http://localhost:3000/user/getAllUser/1`)
    // //  console.log(res=>{data});
    //  res.then((res)=>{
    //     this.alluser= res.data
    //     console.log(res.data)
    //   })
    // }
  }
</script>
