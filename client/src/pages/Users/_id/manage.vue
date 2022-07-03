<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <card>
            <h4 slot="header" class="card-title">Sửa thông tin</h4>
            <form>
              <div class="row">
                <div class="col-md-3">
                  <base-input
                    type="text"
                    label="Username"
                    placeholder="Username"
                    v-model="form.username"
                  >
                  </base-input>
                </div>
                <div class="col-md-4">
                  <base-input
                    type="email"
                    label="Email"
                    placeholder="Email"
                    v-model="form.email"
                  >
                  </base-input>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <base-input
                    type="text"
                    label="Họ tên"
                    placeholder="First Name"
                    v-model="form.name"
                  >
                  </base-input>
                </div>
                <div class="col-md-6">
                  <base-input
                    type="text"
                    label="Role"
                    placeholder="Last Name"
                    v-model="form.role"
                  >
                  </base-input>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <base-input
                    type="text"
                    label="Created"
                    placeholder="Created At"
                    v-model="form.createdAt"
                  >
                  </base-input>
                </div>
                <div class="col-md-6">
                  <base-input
                    type="text"
                    label="Updated"
                    placeholder="Updated At"
                    v-model="form.updatedAt"
                  >
                  </base-input>
                </div>
              </div>

              <div class="row">
                <div class="col-md-4">
                  <base-input
                    type="text"
                    label="City"
                    placeholder="City"
                    v-model="user.city"
                  >
                  </base-input>
                </div>
                <div class="col-md-4">
                  <base-input
                    type="text"
                    label="Country"
                    placeholder="Country"
                    v-model="user.country"
                  >
                  </base-input>
                </div>
                <div class="col-md-4">
                  <base-input
                    type="number"
                    label="Postal Code"
                    placeholder="ZIP Code"
                    v-model="user.postalCode"
                  >
                  </base-input>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>About Me</label>
                    <textarea
                      rows="5"
                      class="form-control border-input"
                      placeholder="Here can be your description"
                      v-model="user.aboutMe"
                    >
                    </textarea>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button
                  type="submit"
                  class="btn btn-info btn-fill float-right"
                  @click.prevent="onUpdate"
                >
                  Cập nhật thông tin
                </button>
              </div>
              <div class="clearfix"></div>
            </form>
          </card>
        </div>
        <div class="col-md-4">
          <card class="card-user">
            <img
              slot="image"
              src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
              alt="..."
            />
            <div class="author">
              <a href="#">
                <img class="avatar border-gray" :src="form.avatar" alt="..." />

                <h4 class="title">
                  {{ form.name }}<br />
                  <small>{{ form.username }}</small>
                </h4>
              </a>
            </div>
            <div
              slot="footer"
              class="text-center d-flex justify-content-center"
            >
              <button href="#" class="btn btn-simple">
                <i class="fa fa-facebook-square"></i>
              </button>
              <button href="#" class="btn btn-simple">
                <i class="fa fa-twitter"></i>
              </button>
              <button href="#" class="btn btn-simple">
                <i class="fa fa-google-plus-square"></i>
              </button>
            </div>
          </card>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
import EditProfileForm from "../../UserProfile/EditProfileForm.vue";
import UserCard from "../../UserProfile/UserCard.vue";
import axios from "axios";
export default {
  components: {
    EditProfileForm,
    UserCard,
  },
  data() {
    return {
      data: [],
      user: [],
      form: {
        email: null,
        username: null,
        name: null,
        role: null,
        mahuyen: null,
        avatar: null,
        createdAt: null,
        updatedAt: null,
      },
    };
  },
  created() {
    //console.log(this.$route.params.id);
  },
  mounted() {
    this.solieu();
  },

  methods: {
    async solieu() {
      //console.log(this.$route.params.id)
      this.data = await axios.get(
        `http://10.42.240.200:9999/api/users/${this.$route.params.id}`
      );
      //console.log(this.data)

      this.user = this.data.data;
      //console.log(this.user);
      this.form.email = this.user.email;
      this.form.username = this.user.username;
      this.form.name = this.user.name;
      this.form.role = this.user.role;
      this.form.mahuyen = this.user.mahuyen;
      this.form.avatar = this.user.avatar;
      this.form.createdAt = this.user.createdAt;
      this.form.updatedAt = this.user.updatedAt;
    },

    async onUpdate() {
      await axios.patch(
        `http://10.42.240.200:9999/api/users/user/${this.$route.params.id}`,
        this.form,
        {}
      );
      alert("updated");
    },
  },
};
</script>
<style>
</style>
