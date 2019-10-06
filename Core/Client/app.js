import Vue from 'vue'
import App from './App.vue'
// import VueX from 'vuex'

Vue.config.productionTip = false

const client = new Vue({
  render: x => x(App)
}).mount('#xenonApp')

export { client }
