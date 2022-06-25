<template>
  <div>
 <b-navbar-nav class="ml-auto">
    <b-navbar type="dark" variant="dark">
    <b-navbar-nav  style="margin-left: 87%;" >
      <b-nav-item href="#">Home</b-nav-item>

      <b-nav-item-dropdown text="User">
        <b-dropdown-item ><router-link :to="'/log-in'">Login</router-link></b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
  </b-navbar-nav>
  </div>
</template>
<script>
export default {
  name: "NavBar"
};
</script>

<style>
</style>