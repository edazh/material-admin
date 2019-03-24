import Vue, { CreateElement, VNode } from 'vue';
import '@/plugins/vuetify';
import Component from 'vue-class-component';
import { VApp } from 'vuetify/lib';
import router from './plugins/router';

Vue.config.productionTip = false;

@Component({
  components: { VApp },
})
export default class App extends Vue {
  private render(h: CreateElement): VNode {

    const data = {
      attrs: {
        domProps: {
          id: 'app',
        },
      },
    };

    const children = [
      h('router-view'),
    ];

    return h(VApp, data, children);
  }
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
