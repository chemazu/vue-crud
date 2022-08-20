<template>
  <div class="register">
    <div class="register-card">
      <div class="heading">
        <h2>Create an Account</h2>
        <p>
          Already have an account? <router-link to="/login">Log in</router-link>
        </p>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="form-item">
          <p>User Name</p>
          <input type="text" v-model="name" />
        </div>
        <div class="form-item">
          <p>Email</p>
          <input type="email" v-model="email" />
        </div>
        <div class="form-item">
          <p>Email</p>
          <input type="password" v-model="password" />
        </div>
        <div class="button-wrapper">
          <ButtonComponent title="Register" className="pry" type="submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from "../services/Auth";
// import ButtonComponent from "../components/ButtonComponent";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      terms: false,
    };
  },
  methods: {
    handleClick() {
      console.log("clicked");
    },
    handleSubmit() {
      registerUser({
        email: this.email,
        password: this.password,
        username: this.name,
      })
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          this.passwordError = error.response.data.message;
        });
    },
  },
  // components: {
  //   ButtonComponent,
  // },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/RegisterView.scss";
</style>
