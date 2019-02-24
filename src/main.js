import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Qwacks from './components/qwacks/Qwacks'
import FiestyDice from './components/fiesty/FiestyDice'


Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/qwacks', component: Qwacks },
    { path: '/fiesty', component: FiestyDice }    
  ]
})

const GLOBAL = {
  game: "Select a Game",
  handle: {}
}

new Vue({
  router: router,
  render: h => h(App, {
    props: {
      state: GLOBAL
    }
  }),
  data: GLOBAL
}).$mount('#app')

router.replace('/fiesty')