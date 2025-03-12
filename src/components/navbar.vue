<template>
  <nav>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/login">Connexion</router-link> |
    <router-link to="/register">Inscription</router-link>
  </nav>
</template>

<style scoped>
nav {
  background: #333;
  padding: 10px;
}
a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}
</style>
