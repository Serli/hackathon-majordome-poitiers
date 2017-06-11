import Vue from 'vue';
import Router from 'vue-router';
import Welcome from './pages/Welcome';
import SecondPage from './pages/SecondPage';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Welcome',
            component: Welcome,
        }, {
            path: '/second-page',
            name: 'Second page',
            component: SecondPage
        }, {
            path: '*', redirect: '/'
        }
    ],
});
