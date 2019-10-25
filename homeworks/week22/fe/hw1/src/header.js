import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header(){
	return(
	<header>
		<nav>
			<div className="title">戲劇系館十二點關門</div>
			<div className="nav-items">
				<Link to="/">Home</Link>
				<Link to="/list">List</Link>
				<Link to="/about">About</Link>
			</div>
		</nav>
	</header>
	)
}


export default Header;