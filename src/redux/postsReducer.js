import { CREATE_POST, FETCH_POST } from "./types";

const initialState = {
    post: [],
    fetchedPosts: [],
}
export const postsReducer = (state = initialState, action) =>{ // get 2 parameter ... 1) state, 2)action // see action.js
    switch (action.type) {
        case  CREATE_POST:
           // add new post in post array
            return {...state, post: state.post.concat(action.payload)} // method 1
            // return {...state, post: [...state.post, action.payload]} // method 2
        case FETCH_POST:
            // add api data(objects) in fetchedPosts array
            return {...state, fetchedPosts: action.payload}
        default:
            return state
    }
}