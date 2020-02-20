import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    getImgSrc(state){
      return (state.user.profilePic) ? 
        state.user.profilePic : 
        require('@/assets/default.png')
    },
    getTitle(state){
        return state.user.username
    },
    getSubtitle(state){
      return (state.user.email) ? 
      state.user.email :
      state.user.provider
    }   
  },
  mutations: {
    setUser(state, user){
      state.user = user
    }
  },
  actions: {
    login: function({ commit }, data){
      localStorage.setItem('User', JSON.stringify(data.user))
      localStorage.setItem('Token', data.token)
      commit('setUser', data.user)
    },
    logout: function({ commit }){
      localStorage.removeItem('Token')
      localStorage.removeItem('User')
      commit('setUser', null)
    }
  },
  modules: {
  }
})
