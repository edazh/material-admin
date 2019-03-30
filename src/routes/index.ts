import IndexPage from '@/views/index'
import LoginPage from '@/views/login/Index.vue'
const inner = [
    {
        path: '/',
        name: 'root',
        redirect: { name: 'index' },
    },
    {
        path: '/index',
        name: 'index',
        meta: { auth: true },
        component: IndexPage,
    },
]

const outer = [
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
    },
]

export default [...inner, ...outer];
