<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
nav {
  height: 40px;
}
#app {
  height: 100vh;
}
/* body {
  margin: 0;
  height: 100vh;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: red;
  height: 100%;
}

nav {
  padding: 30px;
  height: 20%;
  box-sizing: border-box;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
* {
  margin: O;
  padding: 0;
  box-sizing: border-box;
} */
</style>
