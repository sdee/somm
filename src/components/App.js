import React from 'react';
import '../stylesheets/main.scss';

const wineData = require('../data/wine.json');

// app component
export default class App extends React.Component {
  // render
	render() {
		console.log('App loader');
		return (
			<div className="container">
				{this.props.children}
			</div>
		);
	}
}
