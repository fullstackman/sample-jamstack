import React from "react";
import Link from 'gatsby-link';

class Menu extends React.Component{
	render() {
		/*var quickStyle = {
			width: '100%',
			height: '90vh',
			padding: '1vh 2vw',
			background: 'linear-gradient(155deg, #ff4400 35%, #fff)',
			fontSize: '2.5em'
		};*/
		function exitMenu() {
			window.history.back();
		}
		return (
			<div className="section menupage">
				<div className="level is-mobile">
					<div className="level-left">
					    <input className="searchbar" type='text' placeholder='Search this site...'></input>
					    <span className="click-me">🔍</span>
					</div>
					<div className="level-right">
					    <span className="click-me" onClick={exitMenu}>Close ❌</span>
					</div>
				</div>
				<div>
					<Link to="/" className="title is-4">Home</Link>
					<br/>
					<Link to="/about" className="title is-4">About</Link>
					<br/>
					<Link to="/news" className="title is-4">News</Link>
					<br/>
					<Link to="/team" className="title is-4">Team</Link>
					<br/>
					<Link to="/contact" className="title is-4">Contact Us</Link>
					<br/>
				</div>
			</div>
		)
	}
}

export default Menu;
