import './polyfills';
import Vue from 'vue'
import 'knacss/css/knacss.css';
import 'font-awesome/css/font-awesome.css';

import App from './App.vue'
import router from './router';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    // render: h => h(App)
    router,
    template: '<App/>',
    components: {App}
});

