import Vue from 'vue'
import App from './App.vue'
import store from './store'
import {index} from './components/index';
import router from './router'
import {firebaseAppPlugin} from './firebaseApp'

Vue.use(firebaseAppPlugin)

window.globalLoading = {
    loadingOk : false,
    show: () => {
        let loading = Vue.$loading.show({
            // Optional parameters
            container: null,
            canCancel: true,
            height: 100,
            width: 100,
            color: '#007bff',
            opacity: 1
        })
        window.globalLoading.set(loading);
    },
    set(setData){
        window.globalLoading.loadingOk = setData;
    },
    hide: () => {
        if (window.globalLoading.loadingOk !== false){
            window.globalLoading.loadingOk.hide();
        }
    }
}
window.globalLoading.show();

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})
