import React from 'react';
import axios from 'axios';
import RatingSlider from '../containers/RatingSlider'

export default class SliderPanel extends React.Component {

	render() {
		const components = this.props.components;

		return (
			<div style={{ paddingTop: '60px' }}>
				{
         components.map(d => <RatingSlider component={d} />)
       }
			</div>
		);
	}
}
