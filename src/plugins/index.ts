import { PluginFunction, VueConstructor } from 'vue'
import '@/mock'
import './vuetify'
declare type pluginConfig = () => any

const plugins = {
    install(Vue: VueConstructor, options: pluginConfig): PluginFunction<pluginConfig> {

        return options
    },
}


export {
    plugins,
}
