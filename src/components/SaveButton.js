import React from "react";
import { Button } from 'react-bootstrap';
import TastingForm from '../containers/TastingForm';
import TastingPreview from '../containers/TastingPreview'

export default class SaveButton extends React.Component {
	render() {
		const { onClick } = this.props;
		return (
			<div>
				<Button bsStyle="primary" onClick={onClick}>Save</Button>
			</div>
		);
	}
}
