import React from "react";
import Link from 'gatsby-link';

class Menu extends React.Component{
	render() {
		function exitMenu() {
			window.history.back();
		}
		function warnUnimp(){
			/*have analytics track this query*/
			let warnMessage = document.querySelector(".warnTarget");
			warnMessage.style.visibility="initial";
			console.log('failed search');
		}
		return (
			<div className="section menupage">
				<div className="level is-mobile">
					<div className="level-left">
					    <input className="searchbar" type='text' placeholder='Search this site...'></input>
					    <span id="searchy" className="click-me the-closer" onClick={warnUnimp}>🔍</span>
					</div>
					<div className="level-right">
					    <span className="click-me the-closer" onClick={exitMenu}>Close ❌</span>
					</div>
				</div>
				<div className="menupage-items">
					<p className="warnTarget">Sorry, that feature is not working right now.</p>
					<Link to="/" className="title">Home</Link>
					<br/>
					<Link to="/about" className="title">About</Link>
					<br/>
					<Link to="/news" className="title">News</Link>
					<br/>
					<Link to="/team" className="title">Team</Link>
					<br/>
					<Link to="/contact" className="title">Contact Us</Link>
					<br/>
				</div>
			</div>
		)
	}
}

export default Menu;
