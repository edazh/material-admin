import Vue from 'vue'
import Vuex, { ModuleTree } from 'vuex'
import { RootState } from './interface'

import { User } from './modules/user'

Vue.use(Vuex)

const modules: ModuleTree<RootState> = { user: new User() }

const isDebug = process.env.NODE_ENV !== 'production'

export const store = new Vuex.Store<RootState>({
  modules,
  strict: isDebug
})

