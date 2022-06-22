<template>
 <div class="mt-3" style="">
        <b-card header="Thêm sản phẩm" header-tag="header">
            <div style="margin-top: 20px; border: 2px solid black">
    <b-form style="margin: 10px">
      <b-form-group id="input-group-2" label="Tên sản phẩm:" label-for="input-2">
        <b-form-input  type="text" required></b-form-input>
      </b-form-group>
<b-form-group id="input-group-2" label="Loại sản phẩm:" label-for="input-2">
         <b-form-select
      v-model="selected"
      :options="options"
      class="mt-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-select>
    <div>Selected: <strong>{{ selected }}</strong></div>
</b-form-group>
      <b-form-group id="input-group-2" label="Giá:" label-for="input-2">
        <b-form-input  id="input-2" type="text" placeholder="10000" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Số lượng:" label-for="input-2"
        description="Mật khẩu ít nhất 8 kí tự gồm : chữ hoa, chữ thường, ít nhất 2 chữ số, không có khoảng trắng."
      >
        <b-form-input  id="input-2" type="password" placeholder="Số lượng" required></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Mô tả:" label-for="input-2">
     <b-form-textarea
    id="textarea-rows"
    placeholder="Tall textarea"
    rows="8"
  ></b-form-textarea>
</b-form-group>

  <!-- Styled -->
   <b-form-file multiple :file-name-formatter="formatNames"></b-form-file>


       <b-form-group id="input-group-2" label="Địa chỉ:" label-for="input-2">
        <b-form-input  id="input-2" type="text" placeholder="Enter name" required></b-form-input>
      </b-form-group>


      <div style="margin-top: 10px">
      <router-link to="/users" style="text-decoration: none; color: inherit">
        <b-button v-on:click="register()" variant="primary">Xác nhận</b-button>
        &nbsp;</router-link>
        <router-link to="/users" style="text-decoration: none; color: inherit">
          <b-button type="reset" variant="danger">Thoát</b-button>
        </router-link>
      </div>
    </b-form>
  </div>
        </b-card>
    </div>
</template>

<script>
export default {
    methods: {
      formatNames(files) {
        return files.length === 1 ? files[0].name : `${files.length} files selected`
      }
    }
}
</script>