import Vue from 'vue'
import VModal from 'vue-js-modal'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import router from './router/index'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(VModal);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
