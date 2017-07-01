import LoginComponent from '@/components/Login/Login.vue'
import StreamComponent from '@/components/Stream/Stream.vue'
import ListenComponent from '@/components/Listen/Listen.vue'

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
        path: '/listen/:room?',
        name: 'listen',
        component: ListenComponent
    },
    {
        path: '/',
        redirect: '/login',
        name: 'default'
    }
]

export default routes