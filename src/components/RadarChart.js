import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';
const { Radar } = require('react-chartjs');

const chartData = {
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

const chartOptions = {
	scaleOverride: true,
	scaleSteps: 10,
	scaleStepWidth: 1,
	scaleStartValue: 0,
	maintainAspectRatio: false,
	scaleShowLabels: true,
	scaleBeginAtZero: false,
	pointDot: true,
	scale: {
		reverse: false,
		ticks: {
			beginAtZero: false,
			min: 1,
			suggestedMin: 1
		}
	}
};

export default class RadarChart extends React.Component {

	constructor(props) {
		super(props);
	}
	render() {
		const currentTasting = this.props.currentTasting;
		const labels = [];
		const data = [];
		for (const key of Object.keys(currentTasting)) {
			labels.push(key);
			data.push(currentTasting[key]);
		}
		chartData.labels = labels;
		chartData.datasets[0].data = data;

		return (
			<div>
				<Radar data={chartData} options={chartOptions} width="400" height="400" redraw />
			</div>
		);
	}
}
