import Vue from 'vue'
import Router from 'vue-router'
import { Util } from '../lib/util'
import routes from '../routes'

Vue.use(Router)

const router = new Router({
  routes,
});

const cookies = Util.cookies()

router.beforeEach((to, from, next) => {
  if (!to.meta.auth) {
    next()
    return
  }
  if (cookies.get('token')) {
    next()
    return
  }
  next({ name: 'login' })
});

export default router;
