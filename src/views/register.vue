<script>

</script>

<template>
  <img src="../assets/img/bg-insc.jpg" alt="fond d'ecran inscription" class="bg-inscr">
   fleche retour
  <div class="form-inscr">
    <form>
      <label for="pseudo">Pseudo</label>
      <input type="text" required id="pseudo" name="pseudo" class="champ_form" placeholder="Entrez votre Pseudo" />
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required class="champ_form" placeholder="Entrez votre Email" />
      <label for="password">Mot de passe</label>
      <input type="password" id="password" name="password" required class="champ_form" placeholder="Entrez votre Mot de passe" />
      <label for="confirm_pass">Confirmer le mot de passe</label>
      <input type="password" id="confirm_pass" name="confirm_pass" required class="champ_form" placeholder="Confirmer le mot de passe" />
      <button type="submit" class="submit_inscr">S'inscrire</button>
    </form>
  </div>
</template>

<style>
body{
  margin: 0;
  padding: 0;
}
  .bg-inscr {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }
  .form-inscr {
    width: 70%;
    height: 55%;
    background-color: rgba(255, 255, 255);
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 8px;
    padding: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1vh;
    font-size: 4.5vw;
  }
  .champ_form {
    font-size: 4vw;
    padding: 1.5vh 0;
    border-radius: 8px;
    border: 2px solid rgba(157, 157, 157, 0.5);
    margin-bottom: 1vh;
  }
  .submit_inscr {
    margin-top: 2vh;
    font-size: 4vw;
    padding: 1.5vh 0;
    border-radius: 10px;
    border: 2px solid rgba(157, 157, 157, 0.5);
    background-color: #4a90e2;
    color: white;
  }
</style>