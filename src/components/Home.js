import React from 'react';

// Home page component
export default class Home extends React.Component {
  // render
	render() {
		console.log('Render');
		return (
			<div className="page-home">
				<h4>Hello world!</h4>
			</div>
		);
	}
}
