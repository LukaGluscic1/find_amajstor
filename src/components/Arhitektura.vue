<template>
  <div class="title">
    <h2 class="title-first">Arhitektura</h2>
    <p class="title-desc">
      Arhitekti pružaju usluge dizajna i planiranja za unapređenje, modernizaciju, uređenje i preuređenje vašeg
      prostora. Pronađite iskusne stručnjake za vaš sljedeći arhitektonski projekt danas!
    </p>
  </div>
  <div class="posao">
    <h3 class="subheading">Trebaš majstora?</h3>
    <button class="button">Naruči uslugu</button>
    <p class="paragraph">
      Projektiranje arhitektonskih prostora predstavlja proces preuređenja, poboljšanja ili modernizacije određenog
      dijela ili cijelog stambenog ili poslovnog objekta. Bilo da je riječ o arhitektonskom dizajnu kuhinje, kupaonice,
      potkrovlja, tavana ili vanjskog prostora, ovaj postupak obuhvata niz aktivnosti kojima se unapređuje
      funkcionalnost i estetika prostora.

    </p>
    <img class="adapt" src="../../img/586199_orig.jpg">
    <p class="paragraph">
      Planiranje i dizajn: Prvi korak u stvaranju bilo kojeg arhitektonskog djela je razumijevanje potreba i želja onih
      koji će prostor koristiti. Kroz detaljno planiranje i dizajn, arhitekti oblikuju prostor tako da odgovara načinu
      života, radu ili aktivnostima koji će se u njemu odvijati.<br><br>

      Inovacija i održivost: Suvremena arhitektura sve više teži inovacijama koje doprinose održivosti i energetskoj
      učinkovitosti. Korištenje naprednih materijala, integracija obnovljivih izvora energije i pametnih tehnologija
      ključni su za stvaranje zgrada koje su u skladu s prirodom i minimiziraju svoj ekološki otisak.<br><br>

      Estetika i individualnost: Svaki arhitektonski projekt odražava jedinstveni identitet i estetiku. Bilo da se radi
      o modernoj minimalističkoj kući, obnovi povijesne zgrade ili izgradnji poslovnog kompleksa, arhitektura pruža
      bezbroj mogućnosti za izražavanje individualnosti i kreativnosti.<br><br>

      Tehnička stručnost: Arhitektura zahtijeva duboko razumijevanje mnogih tehničkih aspekata, od strukturalne
      integriteta do energetske učinkovitosti i sigurnosti. Stručni arhitekti osiguravaju da su svi ovi elementi
      pažljivo integrirani u konačni dizajn.<br><br>

      Interakcija s okolišem: Dobar arhitektonski dizajn uspijeva stvoriti harmoniju između izgrađenog prostora i
      okoliša. Kroz promišljenu integraciju s prirodnim krajolikom ili urbanim kontekstom, arhitektura može obogatiti i
      revitalizirati svoje okruženje.<br><br>

      Dugovječnost i prilagodljivost: Arhitektura nije samo za jedno pokoljenje; ona stvara prostore koji mogu rasti,
      evoluirati i prilagođavati se budućim potrebama. Stvaranjem fleksibilnih i prilagodljivih prostora, arhitektura
      doprinosi stvaranju dugovječnih zajednica.<br><br><br><br>


      U zaključku, arhitektura je temelj na kojem se grade naši životi, zajednice i budućnost. Ona predstavlja spoj
      umjetnosti, znanosti i tehnologije, oblikujući prostore u kojima se odvijaju naše svakodnevne aktivnosti.
      Angažiranjem stručnih arhitekata, ulaganje u kvalitetan arhitektonski dizajn postaje investicija u bolju, ljepšu i
      održiviju budućnost za sve nas.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Arhitektura'
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
