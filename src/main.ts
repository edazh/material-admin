import Vue from 'vue'
import App from './App.vue'
// import '@/plugins/vuetify'
import router from './routes/router'
import { store } from './store'

// 项目插件
import { plugins } from './plugins'


Vue.use(plugins)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
