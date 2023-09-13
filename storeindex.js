<

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    licenseKey: '',
    loading: false,
    status: 'Idle'
  },
  mutations: {
    updateLicenseKey(state, key) {
      state.licenseKey = key;
    },
    updateLoading(state, value) {
      state.loading = value;
    },
    updateStatus(state, status) {
      state.status = status;
    }
  },
  actions: {
    // Define your actions here
  }
});


>
