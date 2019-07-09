import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'

window.eventBus = new Vue()

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
