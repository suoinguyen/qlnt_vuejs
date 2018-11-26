import * as mutationTypes from './mutationsType'

const mutations = {
    [mutationTypes.UPDATE_USER] (state, user_payload) {
        Vue.set(state, 'user', user_payload)
    }
}

export default mutations