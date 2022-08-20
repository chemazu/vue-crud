<template>
  <div class="login">
    <div class="login-card">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-item">
          <label for="username">Email{{ count }}</label>
          <input type="text" name="email" placeholder="Email" v-model="email" />
        </div>
        <div class="form-item">
          <label for="username">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <div class="form-item">
          <h2 v-if="email.length > 2">34</h2>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import { nextTick } from "vue";
console.log(store.state.count);
console.log(process.env);
export default {
  data() {
    return {
      email: "",
      password: "",
      someObject: {
        name: "John",
        age: 30,
      },
    };
  },

  mounted() {
    console.log("mounted");
  },
  setup() {
    console.log("set up");
  },
  watch: {
    email(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },
  methods: {
    handleLogin() {
      console.log("first");
      store.commit("increment");
    },
  },
  computed: {
    count() {
      return store.state.count;
    },
    publishedBooksMessage() {
      // `this` points to the component instance
      return this.author.books.length > 0 ? "Yes" : "No";
    },
  },
  // That's why for complex logic that includes reactive data,
  // it is recommended to use a computed property. Here's the same example, refactored:
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/LoginView.scss";
</style>
