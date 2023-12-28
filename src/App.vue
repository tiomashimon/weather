<template>
  <div id="app">
    <header>
      <router-link to="/" class="nav-logo">
        Weather
      </router-link>
      <nav class="nav">
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
        <router-link to="/login" class="nav-link">Login</router-link>
      </nav>
    </header>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  overflow-x: hidden;
}

header {
  background-color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.nav-logo {
  color: #333;
  font-size: 1.5rem;
  text-decoration: none;
}

.nav {
  display: flex;
  align-items: center;
  margin-right: auto; 
}

.nav-link {
  color: #333;
  margin-left: 15px;
  text-decoration: none !important;
}

.nav-link:hover {
  text-decoration: none !important;
  color: black;
  
}
</style>
