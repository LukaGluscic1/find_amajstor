<template>
    <div class="title">
      <h2 class="title-first">Vodoinstalacije</h2>
      <p class="title-desc">
        Kvalitetne vodoinstalacije pružaju temelj za funkcionalan i ugodan životni prostor, dok stručnost i profesionalnost vodoinstalatera garantiraju da će svaki problem biti riješen brzo i učinkovito.
      </p>
    </div>
    <div class="posao">
      <h3 class="subheading">Trebaš majstora?</h3>
      <button class="button" @click="goToPage">Naruči uslugu</button>
      <p class="paragraph">
        Vodoinstalacije predstavljaju žilu kucavicu svakog stambenog i poslovnog prostora. Bez pravilno postavljenog vodovodnog sustava, moderni život kakvog poznajemo bio bi gotovo nemoguć.
      </p>
      <img class="adapt" src="../../img/AyK1uF6QlERQ8KgXQ99r4BDl10.avif">
    </div>
    <p class="paragraph">
        <b>Neprocjenjiva važnost:</b> Vodovodni sustavi osiguravaju dotok čiste vode u naše domove i odvodnju otpadnih voda. Bez njih, osnovne dnevne aktivnosti poput kuhanja, pranja i osnovne higijene bile bi znatno otežane.<br><br>

<b>Ekspertiza i preciznost:</b> Vodoinstalaterski radovi zahtijevaju stručnost i preciznost. Bilo da je riječ o instalaciji sanitarnih uređaja poput WC školjki, tuš kabina ili umivaonika, ili o popravcima poput curenja i začepljenja, važno je angažirati profesionalce.<br><br>

<b>Neprestano održavanje:</b> Vodovodne usluge ne završavaju samo s postavljanjem sustava. Redovito vodovodno održavanje, kao i intervencije u hitnim situacijama, ključne su kako bi se osigurao nesmetani rad svih uređaja.<br><br>

<b>Inovacije u industriji:</b> Današnji sanitarni uređaji, poput ugradbenih vodokotlića i hidromasažnih kada, pružaju viši nivo komfora, dok vodoinstalacijski materijali osiguravaju trajnost i otpornost na kamenac i druge naslage.<br><br>

<b>Vodoinstalater - nezaobilazan stručnjak:</b> Bilo da planirate renovaciju kupaonice, imate vodovodne probleme u kući ili trebate montažu i demontažu određenih sanitarnih uređaja, vodoinstalater je neophodan stručnjak. Njegova ekspertiza osigurat će vam miran um znajući da je sve postavljeno kako treba.<br><br>
    </p>
  </template>
  
  <script>
  export default {
    name: 'Vodoinstalacije',
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
  