<template>
    <div>
        <b-modal @ok="handleOk" ref="my-modal" id="modal-1" title="Thêm nhân viên">
           <!--  <div>
                <b-form-group id="input-group-2" label-for="input-2">
                    <label class="sr-only" for="inline-form-input-name">Tên nhân viên</label>
                    <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Nhân viên tên"
                        v-model="user_name"></b-form-input>
                    <label class="sr-only" for="inline-form-input-email">Email</label>
                    <b-form-input id="inline-form-input-email" class="mb-2 mr-sm-2 mb-sm-0" v-model="user_email"
                        placeholder="Email">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label-for="input-2">
                    <label class="sr-only" for="inline-form-input-pass">Mật khẩu</label>
                    <b-form-input id="inline-form-input-pass" class="mb-2 mr-sm-2 mb-sm-0" v-model="user_pass"
                        placeholder="Mật khẩu">
                    </b-form-input>
                    <label class="sr-only" for="inline-form-input-phone">Số điện thoại</label>
                    <b-form-input id="inline-form-input-phone" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Số điện thoại"
                        v-model="user_phone"></b-form-input>
                </b-form-group>
                <b-form inline>
                     <label class="sr-only" for="inline-form-input-phone">Loại</label>
                    <b-form-input id="inline-form-input-phone" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Loại"
                        v-model="user_type"></b-form-input>>
                </b-form>
            </div>-->
        
    <b-form @submit.prevent="register" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.user_email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.user_name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
        </b-form>
        </b-modal> 
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "AdduserModal",
    data() {
        return {
    
          user_email: '',
          user_name: '',
    
        }
    },
    methods: {
         handleOk(bvModalEvent) {
            bvModalEvent.preventDefault()
            this.register()
        },
        async register() {
            //   debugger
            let result = await axios.post("http://localhost:3000/user/create-usr", {
                user_name: this.user_name,
                user_email: this.user_email,
                // user_pass: this.user_pass,
                // user_phone: this.user_phone,
                // user_type: this.user_type,
            },
                
        

            );

            console.log(result);
        },
    //     onSubmit(event) {
    //     event.preventDefault()
    //     alert(JSON.stringify(this.form))
    //   },
    //   onReset(event) {
    //     event.preventDefault()
    //     // Reset our form values
    //     axios.post("http://localhost:3000/user/create-usr"),
    //     this.form.user_email = ''
    //     this.form.user_name = ''
    //     // Trick to reset/clear native browser form validation state
    //     this.show = false
    //     this.$nextTick(() => {
    //       this.show = true
    //     })
    //   }
    }
}
</script>


