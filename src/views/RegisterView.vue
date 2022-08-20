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
        <div class="form-row">
          <p>User Name</p>
          <input type="text" v-model="name" />
        </div>
        <div class="form-row">
          <p>Email</p>
          <input type="email" v-model="email" />
        </div>
        <div class="form-row">
          <p>Email</p>
          <input type="password" v-model="password" />
        </div>
        <!-- <button type="submit">Register User</button> -->
        <!-- <ButtonComponent title="Register" className="pry" type="submit" /> -->
        <!-- add type -->
      </form>
      <ButtonComponent @increase-by="handleClick" />
    </div>
  </div>
</template>

<script>
import { registerUser } from "../services/Auth";
import ButtonComponent from "../components/ButtonComponent";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      terms: false,
      count: 0,
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
  components: {
    ButtonComponent,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/RegisterView.scss";
</style>
