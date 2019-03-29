import Vue from 'vue'
import App from './App.vue'
// import '@/plugins/vuetify'
import router from './plugins/router'

// 项目插件
import { plugins } from './plugins'
Vue.use(plugins)

Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
