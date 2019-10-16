/* eslint-disable */

import React, { useState } from 'react';
import Info from './info';
import Pic from './pic';


function PostsList({
  posts, imgURL, alt, handleToSinglePost, clickedId,
}) {
  const [picWidth] = useState(300);
  const [picHeight] = useState(200);
  return (
    posts.map(post => (
      <div className="posts-item" id={post.id}>
        <Pic imgURL={imgURL} id={post.id} alt={alt} handleToSinglePost={handleToSinglePost} width={picWidth} hight={picHeight} clickedId={clickedId} />
        <Info title={post.title} key={post.id} userid={post.userId} id={post.id} handleToSinglePost={handleToSinglePost} clickedId={clickedId} />
      </div>
    ))
  );
}

export default PostsList;
