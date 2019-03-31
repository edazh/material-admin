import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

Vue.use(Vuex)

const modules = { user }

const isDebug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules,
  strict: isDebug,
})
