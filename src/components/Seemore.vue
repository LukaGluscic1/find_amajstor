<template>
  <div class="hello-world">
    <h2 class="hello-world__title">Find a majstor!</h2>
    <p class="hello-world__description">Vaše prvo mjesto za pronalazak majstora.</p>
    <h3 class="odaberi">Odaberi majstora kojeg tražiš</h3>
  </div>

  <div class="poslovi">
    <div class="button-group">
      <button class="button" @click="$router.push('/adaptacije')">Adaptacije</button>
      <button class="button" @click="$router.push('/arhitektura')">Arhitektura</button>
      <button class="button" @click="$router.push('/bazeni')">Bazeni</button>
      <button class="button" @click="$router.push('/bojleri')">Bojleri</button>
      <button class="button" @click="$router.push('/ciscenje')">Čišćenje</button>
      <button class="button" @click="$router.push('/elektroinstalacije')">Elektroinstalacije</button>
    </div>
  </div>

  <div class="poslovi">
    <div class="button-group">
      <button class="button" @click="$router.push('/adaptacije')">Adaptacije</button>
      <button class="button" @click="$router.push('/arhitektura')">Arhitektura</button>
      <button class="button" @click="$router.push('/bazeni')">Bazeni</button>
      <button class="button" @click="$router.push('/bojleri')">Bojleri</button>
      <button class="button" @click="$router.push('/ciscenje')">Čišćenje</button>
      <button class="button" @click="$router.push('/elektroinstalacije')">Elektroinstalacije</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Seemore'
};
</script>

<style scoped>
.hello-world {
  display: flex;
  flex-direction: column;
  /* ovo je zas mi je pre velik razmak dolje */
  align-items: center;
  padding: 20px;
  margin-bottom: 50px;
  /*a ovo to popravlja*/
}

.hello-world__title {
  font-size: 90px;
  font-weight: bold;
  margin-bottom: 10px;
}

.hello-world__description {
  font-size: 25px;
  color: #666;
  margin-bottom: 60px;
}

.odaberi {
  font-size: 32px;
  margin-bottom: 10px;
}

.poslovi {
  display: flex;
  align-items: column;
  padding: 10px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}

.button {
  font-size: 24px;
  font-weight: bold;
  border: 3px solid #cbb3ff;
  border-radius: 30px;
  background-color: #eae0ff;
  padding: 40px 40px;
  cursor: pointer;
  margin-right: 10px;
  /* Add margin-right to create gap between buttons */
  flex-grow: 1;
}
</style>