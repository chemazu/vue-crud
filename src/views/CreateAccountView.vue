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
              v-model="name"
              placeholder="Enter name"
            />
          </div>
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
    };
  },
};
</script>

<style></style>
