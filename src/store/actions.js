import * as mutationTypes from './mutationsType'

const actions = {
    updateUser({ commit, state }, user_payload){
        commit(mutationTypes.UPDATE_USER, user_payload)
    }
}

export default actions