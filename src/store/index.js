import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import system from './modules/system'
import menu from './modules/menu'

Vue.use(Vuex)

const modules = { user, system, menu }

const isDebug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules,
  strict: isDebug,
})
