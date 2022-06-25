<template>
    <div class="mt-3" style="">
        <b-card header="Quản trị người dùng" header-tag="header">
            <div style="margin-top: 20px; border: 2px solid black">
    <b-form style="margin: 10px">
      <b-form-group>
        <b-form-input  type="email"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input id="input-2"  placeholder="Enter name" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input id="input-2"  placeholder="Enter name" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input id="input-2"  placeholder="Enter name" required></b-form-input>
      </b-form-group>

      <div style="margin-top: 10px">
        <b-button  variant="primary">Ghi dữ liệu</b-button>
        &nbsp;
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
export default {}
</script>