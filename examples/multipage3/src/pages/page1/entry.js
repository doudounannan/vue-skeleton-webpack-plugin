/**
 * @file empty entry
 * @author panyuqi <pyqiverson@gmail.com>
 */

import Vue from 'vue';
import Router from 'vue-router';

import App from './app.vue';
import router1 from './router1.vue';

Vue.use(Router);

let router = new Router({
    routes: [
      {
        name: 'router1',
        path: '/router1',
        component: router1
      }
    ]
});

export default new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app');
