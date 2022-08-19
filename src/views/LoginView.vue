<template>
  <div class="login">
    <div class="login-card">
      <div class="heading">
        <h2>Login</h2>
        <p>If you have no account <Link to="/register">Sign up</Link></p>
      </div>
      <form @submit.prevent="handleSubmit">
        <div className="form-item">
          <p>Email Address</p>
          <input type="email" v-model="email" required />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login {
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
