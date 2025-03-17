<template>
  <nav>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/login">Connexion</router-link> |
    <router-link to="/register">Inscription</router-link>
  </nav>
</template>

<style scoped>
nav {
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;

}
a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}
</style>
