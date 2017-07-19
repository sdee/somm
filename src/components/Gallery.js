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

	componentDidMount() {
		axios.get('/api/v1/Tasting?limit=12')
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
		return (
			<Grid>
				<Row>
					<Col lg={12}>
						<h1 className="page-header">Tastings Gallery</h1>
					</Col>
				</Row>
				<Row>
					{this.state.tastings.map((tasting, i) =>
						(
							<Col
								lg={3}
								md={4}
								xs={6}
							>
								<TastingThumbnail
									tasting={tasting}
									key={tasting.key}
								/>
								{tasting.key}</Col>
					))}
				</Row>
			</Grid>
		);
	}
}
