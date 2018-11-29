import Vue from 'vue'
import App from './App.vue'
import store from './store'
import index from './components/index';
import router from './router'
import {firebaseAppPlugin} from './firebaseApp'

Vue.use(firebaseAppPlugin);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})
