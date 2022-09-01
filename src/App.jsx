import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchingPosts } from './redux/actions/actionCreators'

function App() {
  
  const posts = useSelector((store) => store.posts)

  const dispatch = useDispatch()

  useEffect(() => {
    if(posts.length < 1){
      dispatch(fetchingPosts())
    }
  }, [posts])

  return (
    <div className="App">
      
    </div>
  )
}

export default App
