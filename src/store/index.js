import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';

import * as getters from './getters';
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: false,  // process.env.NODE_ENV !== 'production',
    getters,
    modules: {
        app
    },
    state,
    mutations,
    actions
})

export default store