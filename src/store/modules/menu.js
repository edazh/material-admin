import menus from '@/menu'
export default {
  namespaced: true,
  state: {
    menus: menus || [],
  },
  actions: {
    saveMenus({ commit }, menus) {
      commit('saveMenus', menus)
    },
  },
  mutations: {
    saveMenus(state, menus) {
      state.menus = menus
    },
  },
}
