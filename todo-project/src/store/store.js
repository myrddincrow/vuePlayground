import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    filter:'all',
    todos: [
      {
        'id':1,
        'title':'Todo Sample Item',
        'completed':false,
        'editing':false,
      },
    ]
  }
})
