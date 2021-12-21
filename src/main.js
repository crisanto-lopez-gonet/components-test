import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
//import PalaceVcomponents from 'palace-vcomponents';

//Vue.use(PalaceVcomponents);
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
