import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { omit } from 'underscore';
import { browserHistory, Link } from 'react-router';
import { loadTasting } from '../actions/actions';
import TastingPreview from '../containers/TastingPreview';

export default class TastingPage extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		axios.get(`/api/tasting/${this.props.params.tastingId}`)
.then(({ data }) => {
	console.log(data);
	this.props.loadTasting(omit(data, "_id", "__v", "created_at", "updatedAt"));
})
.catch((error) => {
	if (error.response && error.response.status === 404) {
		this.setState({ isLoading: false });
	}
	throw error;
});
	}

	render() {
		const id = this.props.params.tastingId;
		return (
			<div>
				<b>tasting</b><br />
				<TastingPreview />
				{id}
        <div><Link to="/new"><Button bsStyle="primary">Create Another</Button></Link></div>
			</div>
		);
	}
}
