import React from 'react';
import './pages.css';

function About(){
	return (
		<>
		<div className="about-wrapper">
			<div className="about_title">About</div>
			<img src="https://picsum.photos/id/237/700/500" alt="I am a doggy"></img>
			<div className="page-holder">This page is still building, but you can watch me first.</div>
		</div>
		</>
	)
}


function Home(){
	return (
		<>
		<div className="home-wrapper">
			<div className="home_title">Home</div>
			<div className="page-holder">This page is still building, but you can watch me first.</div>
			<img src="https://picsum.photos/id/1025/700/500" alt="I am a doggy"></img>
		</div>		
		</>
	)
}

export {About, Home}