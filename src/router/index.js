import Vue from 'vue'
import VueRouter from 'vue-router';
import { routes } from './routes';

// Router
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    mode: 'history'
});

export default router