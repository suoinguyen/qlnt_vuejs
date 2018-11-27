import Vue from 'vue'
import * as mutationTypes from './mutationsType'

const mutations = {
    [mutationTypes.UPDATE_USER] (state, user_payload) {
        state.userLogged = user_payload;
    }
}

export default mutations