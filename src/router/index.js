import Vue from 'vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import store from '../store';

// Router
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    if (!store.state.userLogged) {
        if (to.matched.some(record => record.meta.authRequired)) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }else{
            next()
        }
    } else {
        if (to.path === '/login'){
            next({
                path: '/dashboard',
            })
        }else{
            next()
        }
    }
})

export default router