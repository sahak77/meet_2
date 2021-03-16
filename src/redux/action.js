import { CREATE_POST, FETCH_POST, SHOW_LOADING, HIDE_LOADING, HIDE_ALERT, SHOW_ALERT } from "./types";
import axios from 'axios'

//** action creators **// 


// go postReducer.js

export function createPost(post) {
    return { 
        type: CREATE_POST, 
        payload: post, 
    }
}

// go loadingReducer.js

export function showLoading() {
    return {
        type: SHOW_LOADING
    }
}
export function hideLoading() {
    return {
        type: HIDE_LOADING
    }
}

// go alertReducer.js // async

export function showAlert(error) {
    return dispatch => {
      dispatch({  type: SHOW_ALERT,payload: error,})

      setTimeout(() => {
          dispatch(hideAlert())
      }, 2000);
    }
}
export function hideAlert() {
    return {
        type: HIDE_ALERT,
    }
}

// go postReducer.js // async

export function fetchPost() {
    return dispatch => {
        dispatch(showLoading())
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then(function (response) {
                console.log(response.data);
                dispatch({ type: FETCH_POST, payload: response.data })
                dispatch(hideLoading())
            })
            .catch(err => {
                dispatch(hideLoading())
                dispatch(showAlert("server error"))
                console.log(err);
            })                
    }
} 
