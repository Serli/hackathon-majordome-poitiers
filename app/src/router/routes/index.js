import LoginComponent from '@/components/Login/Login.vue'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginComponent
    },
    {
        path: '/',
        redirect: '/login',
        name: 'default'
    }
]

export default routes