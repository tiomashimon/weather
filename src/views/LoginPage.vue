<template>
  <div class="auth-page">
    <div class="auth-container">
      <h1>Авторизація</h1>
      <button @click="loginWithGoogle" class="google-btn">Увійти за допомогою Google</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AuthPage',

  methods: {
    ...mapActions('auth', ['loginWithGoogle']),
  },
};
</script>

<style scoped>
.auth-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
}

.auth-container {
  text-align: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.google-btn {
  background-color: #4285f4;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.google-btn:hover {
  background-color: #3a76b7;
}
</style>
