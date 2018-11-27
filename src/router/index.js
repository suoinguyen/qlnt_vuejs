import Vue from 'vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import {firebaseApp} from '../firebaseApp';
import store from '../store';

// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
// Init plugin
Vue.use(Loading);

// Router
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    mode: 'history'
});



router.beforeEach((to, from, next) => {
    if (window.globalLoading.loadingOk === false){
        window.globalLoading.show();
    }

    let getUserLogged = new Promise((resolve, reject) => {
        firebaseApp.auth().onAuthStateChanged(user => {
            resolve(user);
        })
    });

    async function checkUserLogged() {
        let user = await getUserLogged
        if (store.state.userLogged === false){
            store.dispatch('updateUser', user)
        }

        if (user) {
            if (to.path === '/login') {
                next({
                    path: '/dashboard',
                })
            }else{
                next()
            }
        }else{
            if (to.matched.some(record => record.meta.authRequired)) {
                next({
                    path: '/login',
                    query: { redirect: to.fullPath }
                })
            }else{
                next()
            }
        }
        setTimeout(function () {
            window.globalLoading.loadingOk.hide();
        }, 700)
    }

    checkUserLogged()
})

export default router