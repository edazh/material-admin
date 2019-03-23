import Vue, { CreateElement, VNode } from 'vue';
import '@/plugins/vuetify';
import Component from 'vue-class-component';
import LoginPage from '@/pages/login';
import { VApp, VContent } from 'vuetify/lib';

Vue.config.productionTip = false;

@Component({
  components: { VApp, LoginPage },
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
      h(VContent,
        [h(LoginPage)],
      ),
    ];

    return h(VApp, data, children);
  }
}

new Vue({
  render: (h) => h(App),
}).$mount('#app');
