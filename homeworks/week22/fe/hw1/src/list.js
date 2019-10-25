import React,{useEffect,useState}  from 'react';
import ListItem from './listItem'
import './list.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


function List(){
	const [posts,setPosts] = useState([]);
	const url = `https://qootest.com/posts`;
	
  useEffect(()=>{
    axios.get(url)
    .then(response=>{
			const {data} = response;
			setPosts(data);
    })
	},[])

	return(
		<>
			<h2>All the stories</h2>
			<div className="list-wrapper">
				<div className='list'>
					{posts.map(({title,body,id},i) =>{
						return (<Link to={`/posts/${id}`} className="list-item" data-id={id}key={i} ><ListItem title={title} body={body} key={id} id={id}/></Link>)	
					})}
				</div>
			</div>
		</>
	)
}


export default List;
