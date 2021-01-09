import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// layout
import Default from '@/layout/Default.vue';
import blank from '@/layout/Blank.vue';

Vue.config.productionTip = false

Vue.component('default-layout', Default);
Vue.component('blank-layout', blank);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
