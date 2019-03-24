import Vue, { VNode, CreateElement } from 'vue';
import Component from 'vue-class-component';
import { LoginForm } from './LoginForm';
import { VApp } from 'vuetify/lib';
@Component({
    components: { 'v-app': VApp },
})
export default class LoginPage extends Vue {

    private render(h: CreateElement): VNode {
        return (
            <v-app>
                <LoginForm></LoginForm>
            </v-app>
        );
    }
}
