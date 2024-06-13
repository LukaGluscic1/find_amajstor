<template>
  <div class="POPUP-Prozor" v-if="Naruci === true">
    <div class="POPUP-Message">
      Skini aplikaciju:
      <img src="../../img/google-play-badge.png" style="height: 43%; width: auto" alt="Google">
      <img src="../../img/app-store-badge.png" style="height: 30%; width: auto" alt="Apple">
    </div>
  </div>
  <div class="title">
    <h2 class="title-first">Keramika</h2>
    <p class="title-desc">
      Ulaganjem u kvalitetne keramičke radove, osiguravate trajnu vrijednost i ljepotu svog doma ili poslovnog prostora.
    </p>
  </div>
  <div class="posao">
    <h3 class="subheading">Trebaš majstora?</h3>
    <button class="button" @click="handleMajstor()">Naruči uslugu</button>
    <p class="paragraph">
      Keramika je jedan od najstarijih i najdugotrajnijih materijala koji se koristi u građevinskoj industriji. Osim što
      pruža izdržljivost, keramičke pločice dodaju estetsku vrijednost svakom prostoru.
    </p>
    <img class="adapt" src="../../img/Keramika.avif">
  </div>
  <p class="paragraph">
    <b>Različite primjene:</b> Od keramičkih kupaonica, kuhinjskih zidova, balkona, do fontana i vrtnih putova. Keramika
    može obogatiti svaki kutak vašeg doma ili poslovnog prostora.<br><br>

    <b>Specijalizirane tehnikalije:</b> Bilo da je riječ o postavljanju keramike, fugiranju, ili keramičkim popravcima,
    stručnjaci za keramiku pružaju preciznost i kvalitetu u svakom koraku.<br><br>

    <b>Dizajn i kreativnost:</b> Keramički dizajn omogućava različite stilove i oblike, od tradicionalnih do suvremenih,
    a keramičke umjetničke instalacije dodaju jedinstveni pečat svakom prostoru.<br><br>

    <b>Kvaliteta i trajnost:</b> Keramičke pločice su otporne na vlagu, udarce i habanje, što ih čini idealnim izborom
    za prostorije poput kupaonica i kuhinja, ali i za vanjske površine.<br><br>

    <b>Raznolikost u izboru:</b> Bilo da tražite keramičke pločice za podove, zidove, unutarnje ili vanjske površine,
    postoji bogat izbor dizajna i tekstura koji će zadovoljiti svaki ukus.<br><br>

    <b>Održavanje i obnova:</b> Osim postavljanja novih pločica, specijalisti za keramiku također pružaju usluge
    renovacije, rekonstrukcije i restauracije, vraćajući starim površinama njihov izvorni sjaj.<br><br>
  </p>
</template>

<script>
export default {
  name: 'Keramika',
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
  background-color: #cbb3ff;
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

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.title-first {
  font-size: 90px;
  font-weight: bold;
  margin-bottom: 20px;
}

.title-desc {
  font-size: 25px;
  color: #666;
  margin-bottom: 60px;
  margin-left: 300px;
  margin-right: 300px;
  flex-grow: 1;
}

.subheading {
  font-size: 36px;
  margin-bottom: 20px;
}

.button {
  font-size: 18px;
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

.paragraph {
  font-size: 18px;
  color: #666;
  margin-top: 40px;
  margin-left: 300px;
  margin-right: 300px;
  flex-grow: 1;
}

.adapt {
  width: 40%;
  height: auto;
}

@media (max-width: 1200px) {
  .title-desc {
    margin-right: 200px;
    margin-left: 200px;
  }

  .paragraph {
    margin-right: 200px;
    margin-left: 200px
  }
}

@media (max-width: 992px) {
  .title-desc {
    margin-right: 100px;
    margin-left: 100px;
  }

  .paragraph {
    margin-right: 100px;
    margin-left: 100px
  }

  .adapt {
    width: 60%;
    height: auto;
  }
}

@media (max-width: 768px) {
  .title-first {
    font-size: 70px;
  }

  .title-desc {
    margin-right: 50px;
    margin-left: 50px;
  }

  .paragraph {
    margin-right: 50px;
    margin-left: 50px
  }

  .adapt {
    width: 80%;
    height: auto;
  }
}
</style>