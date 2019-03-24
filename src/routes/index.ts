import { RouteConfig } from 'vue-router';

const inner: RouteConfig[] = [
    {
        path: '/index',
        name: 'index',
        meta: {auth: true},
        component: () => import('../pages/index'),
    },
];

const outer: RouteConfig[] = [
    {
        path: '/',
        name: 'root',
        redirect: { name: 'login' },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/login'),
    },
];

export default [...inner, ...outer];
