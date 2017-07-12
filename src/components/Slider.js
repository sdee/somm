import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';

export default class Slider extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		// destructure
		console.log(this.props);
		const component = this.props.component;
		const currentRating = this.props.currentRating;
		const changeValue = this.props.changeValue;
		const step = 1;
		const max = 10;
		const min = 0;
		return (
			<Row className="show-grid">
				<Col md={2}>
					{component}
				</Col>
				<Col md={3}>
					<ReactBootstrapSlider
						name={component}
						value={currentRating}
						slideStop={changeValue}
						step={step}
						max={max}
						min={min}
						orientation="horizontal"
					/>
				</Col>
				<Col md={2}>
					{currentRating}
				</Col>
			</Row>
		);
	}
}
