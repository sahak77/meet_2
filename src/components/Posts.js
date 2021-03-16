import React from "react";
import Post from './Post';
import { connect } from "react-redux";

const Posts = ({syncPosts}) => {
    console.log(syncPosts);
    
    if (syncPosts.length) {
        return syncPosts.map(post => <Post title={post.title} key={post.id} />)
    }
    else{
        return <p className='text-center'>post not found</p>
    }
}


const mapStateToProps = state =>{  // get state
    return {
        syncPosts: state.postsReducer.post // give it like props --> line 5
    } 
}

export default connect(mapStateToProps, null)(Posts) //connect our component to redux store 