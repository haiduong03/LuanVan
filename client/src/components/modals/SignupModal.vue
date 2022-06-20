<template>
    <div>
        <b-modal @ok="handleOk" ref="my-modal" id="modal-1" title="Thêm nhân viên">
            <!-- <p class="my-4">Hello from modal!</p> -->
            <!-- <b-form inline>
                <label class="sr-only" for="inline-form-input-name">Name</label>
                <label class="sr-only" for="inline-form-input-username">Username</label>
                <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                    <b-form-input id="inline-form-input-username" placeholder="Username"></b-form-input>
                </b-input-group>

                <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>
            </b-form> -->
            <div>
                <b-form-group id="input-group-2" label-for="input-2">
                    
                        <label class="sr-only" for="inline-form-input-name">Tên nhân viên</label>
                        <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0"
                            placeholder="Nhân viên tên"></b-form-input>
                        
                            <label class="sr-only" for="inline-form-input-email">Email</label>
                            <b-form-input id="inline-form-input-email" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Email">
                            </b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label-for="input-2">
                    
                        <label class="sr-only" for="inline-form-input-pass">Mật khẩu</label>
                        <b-form-input id="inline-form-input-pass" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Mật khẩu">
                        </b-form-input>
                        
                            <label class="sr-only" for="inline-form-input-phone">Số điện thoại</label>
                            <b-form-input id="inline-form-input-phone" class="mb-2 mr-sm-2 mb-sm-0"
                                placeholder="Số điện thoại"></b-form-input>
                </b-form-group>
                <b-form inline>
                    <label class="mr-sm-2" for="inline-form-custom-select-pref">Quyền</label>
                    <b-form-select id="inline-form-custom-select-pref" class="mb-2 mr-sm-2 mb-sm-0"
                        :options="[{ text: 'Chức vụ...', value: null }, 'Nhân viên', 'Quản lý', 'Kho']" :value="null">
                    </b-form-select>



                    <!-- <b-button variant="primary">Lưu thông tin</b-button> -->
                </b-form>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: "SignupModal",
    methods: {
        handleOk(bvModalEvent) {
            bvModalEvent.preventDefault()
            alert('Thêm thành công')
        },
    }
}

</script>


