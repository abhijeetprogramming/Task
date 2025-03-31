import  React, { useState, useEffect, useReducer } from 'react'
import CardList from './components/CardList';
 import ViewToggle from "./components/ViewToggle"
import FeedbackForm from "./components/FeedbackForm"
import './App.css';

const initialState = {
  posts: [],
  loading: true,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return { ...state, posts: action.payload, loading:false};
      case "REMOVE_POST":
     return { ...state, posts: state.posts.filter(post => post.id !== action.payload)}
     default: 
     return state;

  }
}


const Person = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [gridView, setGridView] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type : "SET_POSTS", payload: data.slice(0, 50)})
      });
    }, 5000); 
  }, [])

  return (
    <div className='app-container'>
      <header className='header'>
        <div className='user-info'>
          <img src='https://tse3.mm.bing.net/th?id=OIP.kUFzwD5-mfBV0PfqgI5GrAHaHa&pid=Api&P=0&h=180' alt='User' className='user-icon' />
          <span><strong>Hi</strong><br/> Here's your News! </span>
        </div>
      </header>
      <div className='controls'>
        <ViewToggle gridView={gridView} setGridView={setGridView} />
        <button className='feedback-button' onClick={()=> document.getElementById("feedback-modal").style.display = "block"}>We' re Listening!</button>
      </div>
      {state.loading ? (
        <p className='loading'> Loading...</p>
      ) : (
        <CardList posts={state.posts} dispatch={dispatch} gridView={gridView} />
      )}
      <FeedbackForm />
    </div>
  )
}

export default Person