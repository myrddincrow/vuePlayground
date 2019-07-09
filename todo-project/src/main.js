import Vue from 'vue'
import App from './App.vue'

window.eventBus = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})
