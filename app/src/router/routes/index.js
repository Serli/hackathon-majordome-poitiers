import LoginComponent from '@/components/Login/Login.vue'
import StreamComponent from '@/components/Stream/Stream.vue'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginComponent
    },
    {
        path: '/stream',
        name: 'stream',
        component: StreamComponent
    },
    {
        path: '/',
        redirect: '/login',
        name: 'default'
    }
]

export default routes