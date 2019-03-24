import Vue from 'vue';
import Router from 'vue-router';
import routes from '../routes';
import { Util } from '../lib/util';
Vue.use(Router);

const router = new Router({
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.meta.auth) {
    next();
    return;
  }
  const token = Util.cookies().get('token');
  if (token) {
    next();
  } else {
    next({ name: 'login' });
  }
});

export default router;
