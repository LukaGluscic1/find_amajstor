<template>
    <div class="title">
      <h2 class="title-first">Zidarstvo</h2>
      <p class="title-desc">
        Neovisno o veličini ili vrsti projekta, pravi zidari pružit će stabilnost, estetiku i funkcionalnost svakom objektu.
      </p>
    </div>
    <div class="posao">
      <h3 class="subheading">Trebaš majstora?</h3>
      <button class="button" @click="goToPage">Naruči uslugu</button>
      <p class="paragraph">
        Projektiranje arhitektonskih prostora predstavlja proces preuređenja, poboljšanja ili modernizacije određenog dijela ili cijelog stambenog ili poslovnog objekta. Bilo da je riječ o arhitektonskom dizajnu kuhinje, kupaonice, potkrovlja, tavana ili vanjskog prostora, ovaj postupak obuhvata niz aktivnosti kojima se unapređuje funkcionalnost i estetika prostora.
      </p>
      <img class="adapt" src="../../img/TKH6oFrUqV9RHctzNwi08zFyhs.avif">
    </div>
    <p class="paragraph">
        Zidarstvo, kao jedna od najstarijih i najvažnijih građevinskih disciplina, čini osnovu svake građevinske konstrukcije. Kroz vješte ruke zidara, sirovi materijali pretvaraju se u strukture koje čine domove, poslovne prostore i mnoge druge objekte u našoj svakodnevnici.<br><br>

<b>Osnova svake gradnje:</b> Bilo da je riječ o zidanju temelja, nosivih zidova ili pregradnih zidova, zidarstvo je ključna komponenta koja osigurava stabilnost i sigurnost svake zgrade.<br><br>

<b>Materijali i tehnike:</b> U zidarstvu se koristi niz materijala poput cigle, kamena, betonskih blokova i mnogih drugih. Svaki od njih zahtijeva specifične tehnike i vještine, a zidari su majstori u njihovoj primjeni.<br><br>

<b>Inovacije u gradnji:</b> Moderno zidarstvo koristi napredne tehnologije i materijale, uključujući različite zidarske smjese, mortove i izolacijske materijale koji osiguravaju energetsku učinkovitost i dugotrajnost zidova.<br><br>

<b>Estetika i funkcionalnost:</b> Osim što osigurava strukturalni integritet zgrada, zidarstvo također doprinosi estetici objekta. Bilo da je riječ o vanjskim fasadama od kamena ili unutarnjim opečnim zidovima, zidarski radovi dodaju karakter i ljepotu svakom prostoru.<br><br>

<b>Specijalizirane usluge:</b> Ovisno o potrebama projekta, zidari pružaju specijalizirane usluge poput zidanja zaštitnih zidova, građevinskih konstrukcija ili zidarskih obloga.<br><br>

<b>Održivost i trajnost:</b> Kvalitetno izvedeni zidarski radovi osiguravaju dugovječnost i trajnost građevine, pružajući otpornost na vremenske uvjete, vlagu i druge vanjske faktore.<br><br>

<b>Sigurnost:</b> Kroz profesionalno izvedene zidarske radove, osigurava se sigurnost stanovnika i korisnika zgrade, sprječavajući potencijalne građevinske nesreće i probleme.<br><br>
    </p>
  </template>
  
  <script>
  export default {
    name: 'Zidarstvo',
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
  