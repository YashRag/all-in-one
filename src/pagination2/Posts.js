import React from 'react'

const Posts = ({posts,loading}) => {

    if(loading){
        return <h2>Loading...</h2>
    }

  return (
    <ul className='w-screen flex flex-col justify-center'>
        {posts.map(post=>(
            <li key={post.id}>{post.title}</li>
        ))}
    </ul>
  )
}

export default Posts
