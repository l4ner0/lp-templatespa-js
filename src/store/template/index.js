import state from './state'
import getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

const namespaced = true

export default {
    namespaced,
    state,
    getters,
    mutations,
    actions
}