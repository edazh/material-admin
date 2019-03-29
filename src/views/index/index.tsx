import Vue, { VNode, CreateElement } from 'vue';
import Component from 'vue-class-component';
@Component
export default class LoginPage extends Vue {

    private render(h: CreateElement): VNode {
        return (
            <h1>我是首页</h1>
        );
    }
}
