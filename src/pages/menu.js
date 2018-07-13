import React from "react";
import Link from 'gatsby-link';

class Menu extends React.Component{
	render() {
		var quickStyle = {
			width: '100%',
			height: '90vh',
			padding: '1vh 2vw',
			background: '#ff4400',
			fontSize: '2.5em'
		};
		var closerStyle = {
			display: 'inline-block',
			color: '#000',
			fontSize: '2.8em',
			cursor: 'pointer'
		};
		var glassStyle = {
			cursor: 'pointer'
		};
		var menuBar = {
			display: 'inline-block',
			width: '20%',
			height: '100%'
		}
		var menuContent = {
			display: 'inline-block',
			width: '80%',
			height: '100%'
		}
		var searchBar = {
			width: '50%',
			fontSize: '0.8em'
		}
		function exitMenu() {
			window.history.back();
		}
		return (
			<div style={quickStyle}>
				<div style={menuBar}>
					<span style={closerStyle} onClick={exitMenu}>❌</span>
				</div>
				<div style={menuContent}>
					<h1>Site Menu</h1>
					<div>
						<input style={searchBar} type='text' placeholder='Search this site...'/>
						<span style={glassStyle}>🔍</span>
					</div>
					<br />
					<div>
						<Link to="/">Home</Link>
					</div>
					<div>
						<Link to="/Products">Products</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Menu;
