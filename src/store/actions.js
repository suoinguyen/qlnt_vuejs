import * as mutationTypes from './mutationsType'

const actions = {
    updateUser({ commit, state }, user_payload){
        commit(mutationTypes.UPDATE_USER, user_payload)
    },
    updateLoadingPage ({ commit, state }, payload){
        commit(mutationTypes.UPDATE_LOADING_PAGE, payload)
    },
}

export default actions