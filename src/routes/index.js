import IndexPage from '@/views/index'
import LoginPage from '@/views/login'
import Scaffold from '@/scaffold'
const inner = [
  {
    path: '/',
    name: 'root',
    component: Scaffold,
    redirect: { name: 'index' },
    children: [
      {
        path: '/index',
        name: 'index',
        meta: { auth: true },
        component: IndexPage,
      },
    ],
  },
]

const outer = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
]

export default [...inner, ...outer]
