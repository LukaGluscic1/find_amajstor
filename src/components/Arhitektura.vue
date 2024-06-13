<template>
  <div class="POPUP-Prozor" v-if="Naruci === true">
    <div class="POPUP-Message">
      Skini aplikaciju:
      <img src="../../img/google-play-badge.png" style="height: 43%; width: auto" alt="Google">
      <img src="../../img/app-store-badge.png" style="height: 30%; width: auto" alt="Apple">
    </div>
  </div>

  <div class="title">
    <h2 class="title-first">Arhitektura</h2>
    <p class="title-desc">
      Arhitekti pružaju usluge dizajna i planiranja za unapređenje, modernizaciju, uređenje i preuređenje vašeg
      prostora. Pronađite iskusne stručnjake za vaš sljedeći arhitektonski projekt danas!
    </p>
  </div>
  <div class="posao">
    <h3 class="subheading">Trebaš majstora?</h3>
    <button class="button" @click="handleMajstor()">Naruči uslugu</button>


    <p class="paragraph">
      Projektiranje arhitektonskih prostora predstavlja proces preuređenja, poboljšanja ili modernizacije određenog
      dijela ili cijelog stambenog ili poslovnog objekta. Bilo da je riječ o arhitektonskom dizajnu kuhinje, kupaonice,
      potkrovlja, tavana ili vanjskog prostora, ovaj postupak obuhvata niz aktivnosti kojima se unapređuje
      funkcionalnost i estetika prostora.
    </p>
    <img class="adapt" src="../../img/slika.jpg">
  </div>



  <p class="paragraph">
    <b>Projektiranje stambenih i poslovnih objekata</b>: Izrada detaljnih planova i nacrta za izgradnju i preuređenje
    stambenih i poslovnih objekata, uzimajući u obzir funkcionalnost, estetiku i ekološke standarde.<br><br>

    <b>Urbanističko planiranje</b>: Razvijanje urbanističkih rješenja za organizaciju prostora unutar gradova i naselja,
    uključujući prometnu infrastrukturu, javne prostore i zelene površine.<br><br>

    <b>Interijer dizajn</b>: Kreiranje unutarnjih prostora koji su estetski privlačni, funkcionalni i prilagođeni
    potrebama korisnika, koristeći najnovije trendove i materijale.<br><br>

    <b>Restauracija i konzervacija</b>: Obnova i očuvanje povijesnih zgrada i spomenika, uz poštivanje izvorne
    arhitekture i kulturne baštine.<br><br>

    <b>Održiva arhitektura</b>: Implementacija ekološki prihvatljivih rješenja i održivih praksi u projektiranju i
    izgradnji, s ciljem smanjenja utjecaja na okoliš.<br><br>
  </p>
</template>

<script>
export default {
  name: 'Arhitektura',
  data() {
    return {
      Naruci: false,
    }
  },
  methods: {
    handleMajstor() {
      this.Naruci = !this.Naruci
    },
  },
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
