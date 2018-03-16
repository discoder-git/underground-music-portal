import * as types from './mutation-types'

const state = {
    overlay: false
}

const mutations = {
    [types.SET_OVERLAY] (state, payload) {
        state.overlay = payload
    }
}

const actions = {
    setOverlay ({ state, commit }, payload) {
        commit(types.SET_OVERLAY, payload)
    }
}

const getters = {
    overlay (state, getters, rootState) {
        return state.overlay
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
