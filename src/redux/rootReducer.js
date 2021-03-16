import { combineReducers } from "redux";
import {postsReducer} from "./postsReducer"
import {loadingReducer} from './loadingReducer'
import {alertReducer} from './alertReducer'

export const rootReducer = combineReducers({ // combine all Reducers in one rootReducer // go ../index.js
    postsReducer,
    loadingReducer,
    alertReducer,
})

