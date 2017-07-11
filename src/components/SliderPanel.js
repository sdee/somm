import React from 'react';

const wineData = require('../data/wine.json');

export default class SliderPanel extends React.Component {

	render() {
		const components = this.props.components;
    console.log(components);

		return (
			<div><h1>new</h1>
       {
         components.map((d) => {
          <b>d</b>
         })
       }
     </div>

		);
	}
}
