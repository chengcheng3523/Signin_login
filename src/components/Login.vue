<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  msg: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="login">
    <h1>Login</h1>
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <input type="submit" value="Login" />
  </div>
</template>


<style scoped>
body {

  background-color: #e76f51;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  background-color: #0b132b;
  width: 400px;
  color: #f8f9fa;
  padding: 40px;
  box-shadow: 10px 10px 25px #00000080;
  text-align: center;
}

.login input {
  display: block;
  margin: 20px auto;
  text-align: center;
  background: none;
  padding: 12px;
  font-size: 15px;
  border-radius: 22px;
  outline: none;
  color: #f8f9fa;
}

.login input[type="text"],
.login input[type="password"] {
  border: 2px solid #3498db;
  width: 220px;
}

.login input[type="submit"] {
  width: 150px;
  border: 2px solid #2ecc71;
  cursor: pointer;
}

.login input[type="text"]:focus,
.login input[type="password"]:focus {
  border-color: #2ecc71;
  width: 280px;
  transition: 0.5s;
}

.login input[type="submit"] {
  background-color: #2ecc71;
  transition: 0.5s;
}
</style>