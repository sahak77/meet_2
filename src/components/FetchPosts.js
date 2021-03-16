import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from '../redux/action' // import action creator
import Post from "./Post";

// ** connect redux store to component using hooks ** //

const FetchedPosts = () => {
    const fetch_data = useSelector((state) => { // get state using useSelector
        return state.postsReducer.fetchedPosts 
    })
    const loading = useSelector((state) => {
        return state.loadingReducer.loading
    })

    // useEffect(() => {
    //     dsipatch(fetchPost())
    // }, [])
    const dsipatch = useDispatch()
    if (loading) {
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
    if (!fetch_data.length) {
        return (
            <button className='btn btn-primary' onClick={dsipatch.bind(this, fetchPost())} /* dispatch action using useDispatch() --> line 15 */>Loading</button>
        )
    }
    else {
        return fetch_data.map(i => <Post title={i.title} key={i.id} />)
    }
}

export default FetchedPosts
