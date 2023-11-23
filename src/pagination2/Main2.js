import React, { useEffect, useState } from 'react'
import Posts from './Posts';
import Pagination from './Pagination';
const Main2 = () => {
  const [posts,setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(()=>{
    fetPosts();
  },[])

  const fetPosts = async()=>{
      setLoading(true);
      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await data.json();
      setPosts(json);
      console.log(json);
      setLoading(false);
  }

  // GET CURRENT POST 
const indexoflastpost = currentPage * postsPerPage;
const indexofFirst    =  indexoflastpost - postsPerPage;
const currentPosts = posts.slice(indexofFirst,indexoflastpost);


  return (
    <div className='w-screen items-center m-5'>
      <h1>My Posts</h1>
     
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postPerPage={postsPerPage} totalPosts={posts.length} setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default Main2
