import store from './store'
import Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyC5rWEZAeCzijI37_U10d7-NBjZF9IrOI0",
    authDomain: "qlnt-cbd44.firebaseapp.com",
    databaseURL: "https://qlnt-cbd44.firebaseio.com",
    projectId: "qlnt-cbd44",
    storageBucket: "qlnt-cbd44.appspot.com",
    messagingSenderId: "444245260890"
};

export default {
    install: (Vue, options) => {
        const firebase = Firebase.initializeApp(config)
        Vue.prototype.$firebase = firebase
        const auth = firebase.auth()
        auth.onAuthStateChanged(user => {
            store.dispatch('updateUser', user)
        })
    }
}

