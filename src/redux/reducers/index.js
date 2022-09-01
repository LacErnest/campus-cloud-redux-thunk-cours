import { FETCHED_POSTS, LOADING_POSTS } from "../types";
import { combineReducers } from "redux";

const postsReducer = (posts = [], action) => {
  switch(action.type){
    case FETCHED_POSTS:
      return action.posts
    default:
      return posts
  }
}

const loadingReducer = (loading = false, action) => {
  switch(action.type){
    case LOADING_POSTS:
      return true
    case FETCHED_POSTS:
      return false
    default: 
      return loading
  }
}

const rootReducer = combineReducers({
  posts: postsReducer,
  loading: loadingReducer
})

export default rootReducer