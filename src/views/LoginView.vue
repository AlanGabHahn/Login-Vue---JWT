<template >
  <h2>Login</h2>
  <form @submit.prevent="login">
    <input type="text" placeholder="Seu Email" v-model="user.email">
    <input type="password" placeholder="Sua Senha" v-model="user.password">
    <button type="submit">Login</button>
  </form>
</template>

<script setup>
  import http from '@/services/http.js';
  import {reactive} from 'vue';

  const user = reactive({
    email: '',
    password: ''
  });

  async function login() {
    try {
      const {data} = await http.post('/auth', user);
      console.log(data);
    } catch (error) {
      console.log(error?.response?.data);
    }
  }
</script>

<style lang="scss" scoped>
  
</style>