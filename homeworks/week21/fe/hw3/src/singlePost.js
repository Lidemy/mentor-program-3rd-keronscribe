/* eslint-disable */

import React, { useState } from 'react';
import Info from './info';
import Pic from './pic';

const PostContent = ({ postBody }) => <div className="post-body">{postBody}</div>;

const SinglePost = ({
  post, imgURL, alt, handleToSinglePost, clickedId,
}) => {
  const [picWidth] = useState(600);
  const [picHeight] = useState(400);
  return (
    <div className="post">
      <Pic imgURL={imgURL} id={post.id} alt={alt} width={picWidth} hight={picHeight} clickedId={clickedId} />
      <Info title={post.title} key={post.id} userid={post.userId} id={post.id} handleToSinglePost={handleToSinglePost} clickedId={clickedId} />
      <PostContent key={post.id} postBody={post.body} />
    </div>
  );
};

export default SinglePost;
