import Vue from 'vue'
import Router from 'vue-router'
import { Cookies } from '@/lib/util'
import routes from './index'

Vue.use(Router)
const router = new Router({
  routes,
})

router.beforeEach((to, from, next) => {
  if (!to.meta.auth) {
    next()
    return
  }
  if (Cookies.get('token')) {
    next()
    return
  }
  next({ name: 'login' })
})

export default router
