import Vue from 'vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import {firebaseApp} from '../firebaseApp';
import store from '../store';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(VueRouter);
Vue.use(Loading);

const router = new VueRouter({
    routes,
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    var loading = false;
    if (store.state.loadingPage === false){
        loading = Vue.$loading.show({
            // Optional parameters
            container: null,
            canCancel: true,
            height: 100,
            width: 100,
            color: '#007bff',
            opacity: 1
        });
        store.dispatch('updateLoadingPage', loading)
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
        if (user !== false){
            setTimeout(function () {
                if (store.state.loadingPage instanceof Vue){
                    store.state.loadingPage.hide();
                    store.dispatch('updateLoadingPage', false)
                }
            }, 700)
        }
    }

    checkUserLogged()
})

export default router