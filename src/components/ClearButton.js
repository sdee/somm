import React from "react";
import { Button } from 'react-bootstrap';
import TastingForm from '../containers/TastingForm';
import TastingPreview from '../containers/TastingPreview'

export default class ClearButton extends React.Component {
	render() {
		const { clearTasting } = this.props;
		return (
			<div>
				<Button bsStyle="primary" onClick={clearTasting} style={{margin:'0px'}}>Clear</Button>
			</div>
		);
	}
}
