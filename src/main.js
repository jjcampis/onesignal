import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import spinner from '@/components/spinner.vue';
axios.defaults.baseURL = 'http://localhost/onesignal/';//'https://r2d2.roboticamisiones.com/';//'http://jjsistemas.epizy.com'//'http://localhost';

Vue.config.productionTip = false
Vue.component('spinner', spinner);
new Vue({
  render: h => h(App),
}).$mount('#app')
