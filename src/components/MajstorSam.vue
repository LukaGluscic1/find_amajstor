<template>
  <div class="POPUP-Prozor" v-if="Naruci === true">
    <div class="POPUP-Message">
      Skini aplikaciju:
      <img src="../../img/google-play-badge.png" style="height: 43%; width: auto" alt="Google">
      <img src="../../img/app-store-badge.png" style="height: 30%; width: auto" alt="Apple">
    </div>
  </div>
  <div class="main">
    <div class="group">
      <div class="para">
        <img src="../../img/people-23.png" style="height: 30%; width: auto; margin-bottom: 10px"><br>
        <b>Veliki broj novih klijenata</b><br>

        Svaki dan imaš mogućnost prijaviti se na veliki broj novih poslova.<br>
        Odluči kome i kad se javljaš.
      </div>

      <div class="para">
        <img src="../../img/activity_icon_183756.png" style="height: 30%; width: auto; margin-bottom: 10px"><br>
        <b>Biraš kad si aktivan</b><br>

        Ti si taj koji se prijavljuje na poslove tako da ne moraš brinuti da će ti mobitel zvoniti u nedogled.
        Ako se nisi prijavio na posao, nitko te neće zvati.
      </div>

      <div class="para" style="padding-bottom: 100px;">
        <img src="../../img/tools-icon.png" style="height: 30%; width: auto; margin-bottom: 10px"><br>
        <b>Sve djelatnosti</b><br>


        Odaberi sve djelatnosti koje želiš pružati. Ako želiš da dodamo neku novu djelatnost, kontaktiraj
        nas.
        Ti si taj koji se prijavljuje na poslove tako da ne moraš brinuti da će ti mobitel zvoniti u nedogled.
        Ako se nisi prijavio na posao, nitko te neće zvati.
      </div>

      <div class="para2">
        <b>JEDNOSTAVNO I BRZO</b><br>
        Danas nitko ne želi trošiti vrijeme na beskonačno pretraživanje ponuda.
        <br><br>
        <img src="../../img/phone.png" style="height: 20%; width: auto;"><br>
        Sve u nekoliko klikova<br><br>

        <img src="../../img/people-23.png" style="height: 20%; width: auto;"><br>
        Provjereni klijenti<br><br>

        <img src="../../img/check.png" style="height: 10%; width: auto;"><br>
        Direktan kontakt s klijentom
      </div>

      <button class="button" @click="handleMajstor()">Postani partner!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MajstorSam',
  data() {
    return {
      Naruci: false,
    }
  },
  methods: {
    handleMajstor() {
      this.Naruci = !this.Naruci
    },
  }
};
</script>

<style scoped>
.POPUP-Prozor {
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}


.POPUP-Message {
  background-color: #ffffff;
  color: black;
  border-radius: 2vw;
  width: 20vw;
  height: 10vw;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.main {
  display: flex;
  padding: 10px;
}

.group {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 50px;
}

.para {
  font-size: 24px;
  font-weight: normal;
  border-radius: 30px;
  background-color: #eae0ff;
  padding: 40px 40px;
  margin-right: 10px;
  /* Add margin-right to create gap between buttons */
  flex-grow: 1;
  height: 15vh;
  width: 40vw;
  margin-bottom: 50px;
}

.para2 {
  font-size: 24px;
  font-weight: normal;
  border-radius: 30px;
  background-color: #cbb8ff;
  padding: 40px 40px;
  margin-right: 10px;
  /* Add margin-right to create gap between buttons */
  flex-grow: 1;
  height: 60vh;
  width: 40vw;
  margin-bottom: 50px;
}

.button {
  font-size: 18px;
  width: 10vw;
  height: 6vh;
  margin-left: 330px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #cbb3ff;
}

.button:hover {
  background-color: #a2a2ff;
}
</style>