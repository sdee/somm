import React from 'react';
import RatingSlider from '../containers/RatingSlider'

export default class SliderPanel extends React.Component {

	render() {
		const components = this.props.components;

		return (
			<div>
				{
         components.map(d => <RatingSlider component={d} />)
       }
			</div>
		);
	}
}
