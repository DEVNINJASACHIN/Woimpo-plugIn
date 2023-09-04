<
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import App from './App.vue';
import store from './store';

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  // Define your routes here
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

>
