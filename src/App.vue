

<template>
  <router-link to="/login">Connexion</router-link> | 
  <router-link to="/signup">Inscription</router-link> |
  <router-link to="/forum">Forum</router-link> |
  <router-link to="/user/username">Profil</router-link>

  <div id='view-container'>
    <router-view></router-view>
  </div>
</template>

<script>


</script>

<style>
body {
  margin: 0 0 0 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 40px 0 0 0;
  border: 3px solid red;
}

#view-container {
  width: 100%;
  border: 2px solid blue;
  background-color: silver;
}
</style>
