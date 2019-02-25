import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Qwaxx from './components/qwaxx/Qwaxx'
import FiestyDice from './components/fiesty/FiestyDice'


Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/qwaxx', component: Qwaxx },
    { path: '/fiesty', component: FiestyDice }    
  ]
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')

if(router.currentRoute.path == '/'){
  router.replace('/fiesty')
}