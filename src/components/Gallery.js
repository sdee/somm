import React from "react";
import axios from 'axios';
import { Panel, Grid, Row, Col, FormGroup, Tabs, Tab } from 'react-bootstrap';
import TastingForm from '../containers/TastingForm';
import TastingThumbnail from '../containers/TastingThumbnail';
import SaveTasting from '../containers/SaveTasting';
import ClearTasting from '../containers/ClearTasting';

export default class Gallery extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			tastings: []
		};
	}

	componentWillMount() {
		axios.get('/api/v1/Tasting?limit=9')
    .then(({ data }) => {
	console.log('DATA');
	console.log(data);

	const result = data.map((el) => {
		const o = Object.assign({}, el);
		o.key = el._id;
		return o;
	});

	console.log(result);
	this.setState({ tastings: result });
})
    .catch((error) => {
	if (error.response && error.response.status === 404) {
	}
	throw error;
});
	}

	render() {
		console.log("STATE");
		console.log(this.state.tastings);
		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h1 className="page-header">Tastings Gallery</h1>
					</div>
					{this.state.tastings.map((tasting, i) => (<div><TastingThumbnail tasting={tasting} id={tasting.key} key={tasting.key} />{tasting.key}</div>))}
				</div>
			</div>
		);
	}
}
