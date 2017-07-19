import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import PropTypes from 'prop-types';

const { Radar } = require('react-chartjs');

export default class RadarChart extends React.Component {

	constructor(props) {
		super(props);
		this.chartData = {
			labels: [],
			datasets: [
				{
					label: 'Tasting Preview',
					fillColor: 'rgba(0,255,0,0.2)',
					strokeColor: 'red',
					pointBackgroundColor: 'rgba(179,181,198,1)',
					pointBorderColor: '#fff',
					pointHoverBackgroundColor: '#fff',
					pointHoverBorderColor: 'rgba(179,181,198,1)',
					data: []
				}
			]
		};

		this.chartOptions = {
			scaleOverride: true,
			scaleSteps: 10,
			scaleStepWidth: 1,
			scaleStartValue: 0,
			maintainAspectRatio: false,
			scaleShowLabels: this.props.scaleShowLabels,
			scaleBeginAtZero: false,
			pointDot: this.props.pointDot,
			scale: {
				reverse: false,
				ticks: {
					beginAtZero: false,
					min: 1,
					suggestedMin: 1
				}
			}
		};
	}
	render() {
		const currentTasting = this.props.currentTasting;
		console.log("Current Tasting");
		const labels = [];
		const data = [];
		for (const key of Object.keys(currentTasting)) {
			labels.push(key);
			data.push(currentTasting[key]);
		}
		this.chartData.labels = labels;
		this.chartData.datasets[0].data = data;
		console.log(this.chartData);

		return (
			<div>
				<Radar
					key={this.chartData.key}
					id={this.chartData.key}
					data={this.chartData}
					options={this.chartOptions}
					width={this.props.width.toString()}
					height={this.props.height.toString()}
					redraw
				/>
			</div>
		);
	}
}

RadarChart.propTypes = {
	currentTasting: PropTypes.object.isRequired,
	height: PropTypes.number.isOptional,
	width: PropTypes.number.isOptional,
	pointDot: PropTypes.bool.isOptional,
	scaleShowLabels: PropTypes.bool.isOptional
};

RadarChart.defaultProps = {
	width: 400,
	height: 400,
	pointDot: true,
	scaleShowLabels: true
};
