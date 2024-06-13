import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Adaptacije from './components/Adaptacije.vue';
import Arhitektura from './components/Arhitektura.vue';
import Bazeni from './components/Bazeni.vue';
import Bojleri from './components/Bojleri.vue';
import Ciscenje from './components/Ciscenje.vue';
import Elektroinstalacije from './components/Elektroinstalacije.vue';
import Kontakt from './components/Kontakt.vue';
import MajstorSam from './components/MajstorSam.vue';
import Seemore from './components/Seemore.vue';
import Vodoinstalacije from './components/Vodoinstalacije.vue';
import Podovi from './components/Podovi.vue';
import Tende from './components/Tende.vue';
import Zidarstvo from './components/Zidarstvo.vue';
import Selidbe from './components/Selidbe.vue';
import Keramika from './components/Keramika.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/adaptacije',
      name: 'Adaptacije',
      component: Adaptacije
    },
    {
      path: '/arhitektura',
      name: 'Arhitektura',
      component: Arhitektura
    },
    {
      path: '/bazeni',
      name: 'Bazeni',
      component: Bazeni
    },
    {
      path: '/bojleri',
      name: 'Bojleri',
      component: Bojleri
    },
    {
      path: '/ciscenje',
      name: 'Ciscenje',
      component: Ciscenje
    },
    {
      path: '/elektroinstalacije',
      name: 'Elektroinstalacije',
      component: Elektroinstalacije
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: Kontakt
    },
    {
      path: '/majstorsam',
      name: 'MajstorSam',
      component: MajstorSam
    },
    {
      path: '/poslovi',
      name: 'Seemore',
      component: Seemore
    },
    {
      path: '/Vodoinstalacije',
      name: 'Vodoinstalacije',
      component: Vodoinstalacije
    },
    {
      path: '/Podovi',
      name: 'Podovi',
      component: Podovi
    },
    {
      path: '/Tende',
      name: 'Tende',
      component: Tende
    },
    {
      path: '/Zidarstvo',
      name: 'Zidarstvo',
      component: Zidarstvo
    },
    {
      path: '/Selidbe',
      name: 'Selidbe',
      component: Selidbe
    },
    {
      path: '/Keramika',
      name: 'Keramika',
      component: Keramika
    },
  ]
});

export default router;
