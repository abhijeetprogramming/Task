import React from 'react'
import './CardList.css';

const CardList = ({ posts, dispatch, gridView }) => {
  return (
  <div className={gridView ? "card-grid" : "card-list"}>
    {posts.slice(0, 6).map((post) => (
      <div key={post.id} className='card'>

      <button className="close" onClick={() => dispatch({ type: "REMOVE_POSTS", payload: post.id })}>
         x
      </button>
      
       <h3>{post.title}</h3>
       <p>{posts.body}</p>
       <span className='date'>Mon, 31 March 2025</span>
       <img src='https://cryptozone.dexignzone.com/codeigniter/demo/public/assets/images/contacts/15.jpg' alt="Post" className='card-img'/>
      </div>
    ))}
    </div>
  )
}

export default CardList