import {useParams} from "react-router";
import React, {useEffect,useState} from 'react';
import axios from 'axios';
import './post.css';


export default function Post(){
	let {id} = useParams();
  const	[title,setTitle] = useState('');
	const [body,setbody] = useState('');
	const [author,setAuthor] = useState('');


  const postUrl = `https://qootest.com/posts/${id}`

	useEffect(()=>{
    axios.get(postUrl)
    .then(response => {
			setTitle(response.data.title);
			setbody(response.data.body);
			setAuthor(response.data.author);
    })
	},[])


	return(
		<div className="post-wrapper">
			<div className="post_title">{title} </div>
			<div className="post_author">{author}</div>
			<div className="post_body">{body} </div>
		</div>
	)
}