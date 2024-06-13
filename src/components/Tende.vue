<template>
    <div class="title">
      <h2 class="title-first">Tende</h2>
      <p class="title-desc">
        Tende stvaraju udobnost, dodaju estetsku vrijednost i pružaju mogućnost da maksimalno iskoristite svoj vanjski prostor.
      </p>
    </div>
    <div class="posao">
      <h3 class="subheading">Trebaš majstora?</h3>
      <button class="button" @click="goToPage">Naruči uslugu</button>
      <p class="paragraph">
        Tende su postale sastavni dio mnogih domova, kafića, restorana i drugih objekata koji imaju vanjske prostore poput terasa, balkona ili vrtova. Nisu samo funkcionalan dodatak koji pruža hlad i zaštitu od sunčevih zraka, već i dodaju estetsku vrijednost prostoru, stvarajući ugodnu atmosferu za opuštanje i druženje.
      </p>
      <img class="adapt" src="../../img/q4RUw18oyFKTD6RWRRrDJqfwa0.avif">
    </div>
    <p class="paragraph">
        <b>Prilagodljivost:</b> Tende dolaze u različitim oblicima, veličinama i stilovima - od klasičnih tendi za terase do modernih kasetnih i bočnih tendi. Bez obzira na vašu potrebu i estetski ukus, postoji tenda koja će se savršeno uklopiti.<br><br>

<b>Zaštita od elemenata:</b> Osim što pružaju hlad u vrućim ljetnim mjesecima, tende također štite od kiše, omogućujući vam da uživate u vanjskom prostoru čak i kada vremenske prilike nisu idealne.<br><br>

<b>Kvaliteta i trajnost:</b> Aluminijske tende, krovne tende ili platna posebno dizajnirana za vanjske uvjete osiguravaju dugotrajnu upotrebu i otpornost na vremenske uvjete.<br><br>

<b>Funkcionalnost i dizajn:</b> Bilo da je riječ o sklopivoj balkonskoj tendi, ravnoj zglobnoj tendi ili kasetnoj tendi, svaka pruža kombinaciju funkcionalnosti i estetike, obogaćujući izgled vašeg objekta.<br><br>

<b>Održavanje:</b> Kao i svaka oprema izložena vanjskim uvjetima, tende mogu s vremenom zahtijevati održavanje. Servisi i stručnjaci za održavanje tendi osiguravaju da vaše tende ostanu u vrhunskom stanju godinama.<br><br>

<b>Prilagođena rješenja:</b> Posebne tende mogu se prilagoditi specifičnim potrebama prostora, bilo da je potrebna tenda za posebno osunčana mjesta, velike terase ili neobično oblikovane balkone.<br><br>
    </p>
  </template>
  
  <script>
  export default {
    name: 'Tende',
    methods:{
      goToPage(){
        this.$router.push('src\components\Kontakt.vue');
      }
    }
  };
  </script>
  
  
    <style scoped>
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
  