import { FETCHED_POSTS, LOADING_POSTS } from "../types"

const URL = "https://jsonplaceholder.typicode.com/posts"

function fetchedPosts(posts){
  return {type: FETCHED_POSTS, posts}
}

function loadingPosts(){
  return {type: LOADING_POSTS}
}

function fetchingPosts(){
  return (dispatch) => {
    dispatch(loadingPosts())

    fetch(URL)
      .then(res => res.json())
      .then(posts => {
        dispatch(fetchedPosts(posts))
      })
  }
}

export { fetchingPosts }