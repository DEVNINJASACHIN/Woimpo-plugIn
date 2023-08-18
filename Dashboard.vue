<template>
  <div class="dashboard">
    <h1>WOIMpo Dashboard</h1>
    <form @submit.prevent="activateLicense">
      <label for="licenseKey">License Key:</label>
      <input type="text" v-model="licenseKey" placeholder="Enter your license key">
      <button type="submit" :disabled="loading">{{ loading ? 'Activating...' : 'Activate Plugin' }}</button>
    </form>
    <div class="task-buttons">
      <button @click="performTask('Importing Attributes', importAttributes)">Import Attributes</button>
      <button @click="performTask('Importing Products', importProducts)">Import Products</button>
      <button @click="performTask('Creating Categories', createCategories)">Create Categories</button>
    </div>
    <div class="status">
      Status: {{ status }}
      <span v-show="loading" class="loading">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  computed: {
    licenseKey: {
      get() {
        return this.$store.state.licenseKey;
      },
      set(value) {
        this.$store.commit('updateLicenseKey', value);
      }
    },
    loading() {
      return this.$store.state.loading;
    },
    status() {
      return this.$store.state.status;
    }
  },
  methods: {
    activateLicense() {
      // Dispatch an action to handle license activation
    },
    performTask(taskName, taskFunction) {
      this.$store.commit('updateLoading', true);
      this.$store.commit('updateStatus', `Running ${taskName}...`);

      setTimeout(() => {
        this.$store.commit('updateLoading', false);
        this.$store.commit('updateStatus', `Completed ${taskName}`);
        if (typeof taskFunction === 'function') {
          taskFunction();
        }
      }, 2000);
    },
    importAttributes() {
      // Dispatch an action to perform AJAX request for importing attributes
    },
    importProducts() {
      // Dispatch an action to perform AJAX request for importing products
    },
    createCategories() {
      // Dispatch an action to perform AJAX request for creating categories
    }
  }
};
</script>

<style scoped>
/* Styles as before */
</style>
