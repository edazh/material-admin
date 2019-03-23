import Vue, { VNode, CreateElement } from 'vue';
import Component from 'vue-class-component';
import { VBtn } from 'vuetify/lib';
@Component({
    components: { 'v-button': VBtn },
})
export default class LoginPage extends Vue {

    private render(h: CreateElement): VNode {
        return (
            <v-button color='primary'>Hello</v-button>
        );
    }
}
