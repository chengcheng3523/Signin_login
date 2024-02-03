<script setup>
const name = 'App';
</script>

<template>
  <div id="app">
    <router-link to="/">Login</router-link>
    <router-link to="/Signin">Signin</router-link>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

router-link {
  margin: 10px;
  text-decoration: none;
  color: #3498db;
  font-weight: bold;
}

router-link:hover {
  color: #2980b9;
}
</style>
