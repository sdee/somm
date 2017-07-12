import React from 'react';
import RatingSlider from '../containers/RatingSlider'

export default class SliderPanel extends React.Component {

	render() {
		const components = this.props.components;
    console.log(components);

		return (
			<div><h1>new</h1>
				{
         components.map(d => <RatingSlider component={d} />)
       }
     </div>

		);
	}
}
