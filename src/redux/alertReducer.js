import { SHOW_ALERT, HIDE_ALERT } from "./types"

const initialState = {
    alert: null,
}


export const alertReducer = (state = initialState, action) => { // get 2 parameter ... 1) state, 2)action // see action.js
    switch (action.type) {
        case SHOW_ALERT:
            return {...state,  alert: action.payload,}
        case HIDE_ALERT:
            return {...state, alert: null}
        default:
           return state
    }
} 