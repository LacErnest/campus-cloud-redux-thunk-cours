import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchingPosts } from './redux/actions/actionCreators'

function App() {
  
  const posts = useSelector((store) => store.posts)
  const loading = useSelector((store) => store.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    if(posts.length < 1){
      dispatch(fetchingPosts())
    }
  }, [posts])
  const listPosts = posts.map(post => <li key={post.id}>{post.title}</li>)
  return (
    <div className="App">
      {loading ? <div>Chargement des posts...</div>: 
      <ul>{listPosts}</ul>
      }
    </div>
  )
}

export default App
