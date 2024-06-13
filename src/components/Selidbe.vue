<template>
  <div class="POPUP-Prozor" v-if="Naruci === true">
    <div class="POPUP-Message">
      Skini aplikaciju:
      <img src="../../img/google-play-badge.png" style="height: 43%; width: auto" alt="Google">
      <img src="../../img/app-store-badge.png" style="height: 30%; width: auto" alt="Apple">
    </div>
  </div>
  <div class="title">
    <h2 class="title-first">Selidbe</h2>
    <p class="title-desc">
      Bez obzira na razlog selidbe, bilo da je riječ o poslovnom proširenju, potrazi za novim početkom ili jednostavno
      promjeni okoline, ključno je osigurati da taj proces prođe što je moguće lakše. Angažiranjem stručnjaka za
      selidbe, možete biti sigurni da će vaša imovina biti sigurna, a vaša selidba će proći bez nepotrebnog stresa i
      komplikacija. Uz pravu podršku, vaša nova lokacija postat će domom prije nego što to i sami shvatite.
    </p>
  </div>
  <div class="posao">
    <h3 class="subheading">Trebaš majstora?</h3>
    <button class="button" @click="handleMajstor()">Naruči uslugu</button>
    <p class="paragraph">
      Kada se suočavamo s preseljenjem, bilo da je riječ o selidbi stana, kuće ili cijelog poslovnog prostora, proces
      može biti stresan i izazovan. Upravo zato postoji potreba za profesionalnom agencijom za selidbe, koja osigurava
      da vaša imovina bude sigurna i zaštićena, a vaša selidba prođe što je moguće glađe.
    </p>
    <img class="adapt" src="../../img/INghUyB3igKXkbQK1uJ2gSwks.avif">
  </div>
  <p class="paragraph">
    <b>Sveobuhvatnost usluga:</b> Profesionalne selidbe nude niz usluga koje se kreću od kompletnog preseljenja,
    međunarodnih selidbi, selidbi s posebnim zahtjevima, do pomaganja u organizaciji, pakiranju i zaštiti vaših
    stvari.<br><br>

    <b>Brzina i efikasnost:</b> Uz pravu agenciju, selidba može biti brza i učinkovita, s minimalnim prekidima vaše
    svakodnevice ili poslovnih aktivnosti.<br><br>

    <b>Sigurnost:</b> Vaša imovina je dragocjena. Bilo da je riječ o umjetninama, dragocjenostima, osjetljivoj
    elektronici ili teškim predmetima, profesionalna agencija će osigurati da je sve pravilno upakovano, zaštićeno i
    prevezeno do odredišta.<br><br>

    <b>Organizacija i planiranje:</b> Od osiguranja svih potrebnih dozvola i dozvola za parkiranje do praćenja i
    izvješćivanja o napretku, stručnjaci za selidbe osiguravaju da svaki korak selidbe bude pažljivo planiran i
    izveden.<br><br>

    <b>Dodatne pogodnosti:</b> Mnoge agencije nude dodatne usluge poput demontaže i montaže namještaja, pohrane tijekom
    selidbe, premještanja kućnih ljubimaca, zaštite podova i zidova te praćenja cijelog procesa selidbe.<br><br>

    <b>Komunikacija:</b> Dobar tim za selidbe uvijek će biti na raspolaganju za sve vaše upite, pružajući vam ažurirane
    informacije o statusu vaše selidbe i odgovarajući na sve vaše potrebe.<br><br>
  </p>
</template>

<script>
export default {
  name: 'Selidbe',
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