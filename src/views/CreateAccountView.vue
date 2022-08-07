<template>
  <div class="create-account">
    <div class="create-account-card">
      <div className="heading">
        <h2>Create an Account</h2>
        <p>
          Already have an account?
          <router-link to="/about">Go to About</router-link>
        </p>
      </div>
      <div className="form">
        <form @submit.prevent="onSubmit" method="POST">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="user.name"
              placeholder="Enter name"
            />
          </div>
          <div class="form-group">
            <label for="name">age</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="user.age"
              placeholder="Enter name"
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>

      <!-- <span class="error" v-if="errors.name">
              {{ errors.name[0] }}
            </span> -->
    </div>
  </div>
</template>

<script>
import "../assets/styles/createaccount.scss";
export default {
  name: "CreateAccount",
  data() {
    return {
      message: "CreateAccount",
      user: {
        name: "",
        age: "",
      },
    };
  },
  methods: {
    onSubmit() {
      // this.$router.push("/about");
      console.log(this.user.name);
    },
  },
};
</script>

<style></style>
