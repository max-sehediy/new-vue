import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router';
import store from './store';

import firebase from 'firebase';
import './firebase-config';

Vue.prototype.$firebase = firebase;

Vue.use(Buefy)


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
