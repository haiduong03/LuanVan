<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <authors-table />
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
import AuthorsTable from "./components/AuthorsTable";
//import axios from 'axios'
export default {
  name: "tables",
  components: {
    AuthorsTable,
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
    //   const res =  axios.get(`http://localhost:3000/user/getAlluser`)
    // //  console.log(res=>{data});
    //  res.then((res)=>{
    //     this.alluser= res.data
    //     console.log(res.data)
    //   })
    // }
  }
</script>
