export default {
  namespaced: true,
  state: {
    info: {},
  },
  actions: {
    saveInfo({ commit }, info) {
      commit('saveInfo', info)
    },
  },
  mutations: {
    saveInfo(state, info) {
      state.info = info
    },
  },
}
