import Firebase from 'firebase'
import store from "./store";

var config = {
    apiKey: "AIzaSyC5rWEZAeCzijI37_U10d7-NBjZF9IrOI0",
    authDomain: "qlnt-cbd44.firebaseapp.com",
    databaseURL: "https://qlnt-cbd44.firebaseio.com",
    projectId: "qlnt-cbd44",
    storageBucket: "qlnt-cbd44.appspot.com",
    messagingSenderId: "444245260890"
};

export const firebaseApp = Firebase.initializeApp(config)

export const firebaseAppPlugin = {
    install: (Vue, options) => {
        const auth = firebaseApp.auth()
        Vue.prototype.$firebase = firebaseApp
        Vue.prototype.$auth = {
            login: async (username, pass) => {
                return await auth.signInWithEmailAndPassword(username, pass)
            },
            logout: async () => {
                await auth.signOut()
            }
        }
        auth.onAuthStateChanged(user => {
            store.dispatch('updateUser', user)
        })
    }
}

