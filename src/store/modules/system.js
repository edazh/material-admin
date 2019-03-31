export default {
  namespaced: true,
  state: {
    // Drawer的展开状态
    drawerExpanded: true,
  },
  actions: {
    /**
     * 切换drawer menu 的展开状态
     *  @param {boolean} action 要切换的Drawer的展开状态
     */
    toggleDrawer({ commit, state }, action) {
      const expand =
        typeof action === 'undefined' ? !state.drawerExpanded : action
      commit('toggleDrawer', expand)
    },
  },
  mutations: {
    /**
     * 切换drawer menu 的展开状态
     * @param {boolean} action 要切换的Drawer的展开状态
     */
    toggleDrawer(state, action) {
      state.drawerExpanded = action
    },
  },
}
