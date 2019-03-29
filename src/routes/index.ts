
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
        component: () => import('@/views/index'),
    },
];

const outer = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/Index.vue'),
    },
];

export default [...inner, ...outer];
