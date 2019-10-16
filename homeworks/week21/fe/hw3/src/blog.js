/* eslint-disable */

import React, { useState, useEffect } from 'react';
import Header from './header';
import PostsList from './postsList';
import SinglePost from './singlePost';
import About from './about';
import './style.css';


function Blog() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [blogName] = useState('Sharing Our Lives');
  const [navOptions] = useState(['About', 'List']);
  const [imgURL] = useState('https://picsum.photos/id/');
  const [alt] = useState('Pretty photo');
  const [postsURL] = useState('https://jsonplaceholder.typicode.com/posts');
  const [clickedId, setClickedId] = useState(null);
  const [chosenSide, SetChosenSide] = useState('List');

  // 取得貼文
  const getPosts = () => {
    fetch(postsURL)
      .then(res => res.json())
      .then(
        (result) => {
          setPosts(result);
        },
        (error) => {
          setError(true);
        },
      );
  };

  useEffect(() => getPosts(), [postsURL]);

  // 控制點擊
  const handleToSinglePost = (theId) => {
    setClickedId(theId);
    SetChosenSide('blog');
  };

  const handleChangeSide = (side) => {
    SetChosenSide(side);
    setClickedId(null);
  };


  return (
    <div>
      <Header blogName={blogName} navOptions={navOptions} handleChangeSide={handleChangeSide} chosenSide={chosenSide} />
      {(chosenSide.toLowerCase() === 'about') && <About />}
      {(chosenSide.toLowerCase() === 'blog') && <SinglePost post={posts[clickedId - 1]} imgURL={imgURL} alt={alt} clickedId={clickedId} handleToSinglePost={handleToSinglePost} /> }
      {(chosenSide.toLowerCase() === 'list') && <PostsList className="posts" posts={posts} error={error} imgURL={imgURL} alt={alt} handleToSinglePost={handleToSinglePost} clickedId={clickedId} /> }
      <footer><div>Made by Cian</div></footer>
    </div>
  );
}

export default Blog;
