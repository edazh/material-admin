import { Module, ActionTree, MutationTree, Action } from 'vuex'
import { UserState, RootState } from '../interface'
import { login as loginAccount } from '@/api/login'
export class User implements Module<UserState, RootState> {
  state: UserState = {
    info: {}
  }
  actions: ActionTree<UserState, RootState> = {
    async login({ commit }, { form }) {
      const userInfo = await loginAccount(form)
      commit('setInfo', userInfo)
    }
  }
  mutations: MutationTree<UserState> = {
    setInfo(state, info) {
      state.info = info
    }
  }
}

