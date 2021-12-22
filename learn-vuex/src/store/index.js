import { createStore } from 'vuex'

export default createStore({
  state: {
    count:0
  },
  mutations: {
    setCount(state, value){
      state.count = value
    },
  },
  getters:{
    getCount(state){
      return state.count
    }
  },
  actions: {
    addAction(context){
      context.commit('setCount', this.getters.getCount+1)
    },
    redAction(context){
      context.commit('setCount', this.getters.getCount-1)
    },
  },
  modules: {
  }
})
