import {SHOW_LOADING, HIDE_LOADING} from './types'

const initialState = {
    loading: false
}
export const loadingReducer = (state = initialState, action) =>{ // get 2 parameter ... 1) state, 2)action // see action.js
    switch (action.type) {
        case SHOW_LOADING:
            return {...state, loading: true }
        case HIDE_LOADING:
            return {...state, loading: false }
        default:
            return state
    }
}