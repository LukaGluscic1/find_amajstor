<template>
  <div class="POPUP-Prozor" v-if="Naruci === true">
    <div class="POPUP-Message">
      Skini aplikaciju:
      <img src="../../img/google-play-badge.png" style="height: 43%; width: auto" alt="Google">
      <img src="../../img/app-store-badge.png" style="height: 30%; width: auto" alt="Apple">
    </div>
  </div>
  <div class="title">
    <h2 class="title-first">Podovi</h2>
    <p class="title-desc">
      Prilikom biranja poda, važno je razmisliti o svim aspektima, od estetike do funkcionalnosti. Investiranje u
      kvalitetne podove i pravilno održavanje osigurava da vaš dom ostane udoban i stiliziran godinama.
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
    <img class="adapt" src="../../img/ya75FWn4dHVj15zs4i0zgU8Om0.avif">
  </div>
  <p class="paragraph">
    Podovi nisu samo površina na kojoj hodamo; oni su bitna komponenta estetike i funkcionalnosti svakog prostora. Od
    izbora materijala do pravilne instalacije i održavanja, kvalitetni podovi čine razliku u udobnosti i stilu vašeg
    doma.
    <b>Vrste podnih obloga:</b>

    <b>Parket:</b> Klasik među podnim oblogama, parket donosi toplinu i prirodnost. Bilo da se odlučite za hrastov,
    jasenov ili neki drugi tip parketa, važno je razmisliti o načinu polaganja - herringbone, chevron ili
    tradicionalno.<br><br>

    <b>Laminat:</b> Otporna i ekonomična alternativa parketu, laminat je dostupan u brojnim dizajnima i bojama,
    uključujući izgled hrasta.<br><br>

    <b>Pločice:</b> Keramičke pločice su idealne za kupaonicu, kuhinju ili terasu zbog svoje izdržljivosti i lakoće
    održavanja. Pločice za dnevni boravak ili hodnik također su popularan izbor.<br><br>

    <b>Vinil podovi:</b> Praktični i izdržljivi, vinil podovi nude širok izbor dizajna, uključujući imitaciju drva ili
    kamena.<br><br>

    <b>Specijalizirane obloge:</b> Plutene, bambusove ili epoxy smola obloge nude jedinstvene vizualne i funkcionalne
    prednosti.<br><br>
  </p>
</template>

<script>
export default {
  name: 'Podovi',
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