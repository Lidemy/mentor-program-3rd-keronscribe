import React from 'react';
import './listItem.css';
import { maxHeaderSize } from 'http';

function ListItem({title,body,id}){
	let shortenBody = body.substring(0,15);
	let picUrl = `url(https://picsum.photos/id/${id}/500)`

	return(
	<div>
		<div className='list-item-title'>{title}</div>
		<div className='list-item-body'>「{shortenBody}」</div>
		<div className="list-item-more">Read More</div>
		</div>)
}

export default ListItem