import React from "react";
import { Panel, Grid, Row, Col, FormGroup, Tabs, Tab } from 'react-bootstrap';
import TastingForm from '../containers/TastingForm';
import TastingPreview from '../containers/TastingPreview';
import SaveTasting from '../containers/SaveTasting';
import ClearTasting from '../containers/ClearTasting';

export default class New extends React.Component {

	componentDidMount() {
		this.props.clearTasting();
	}

	render() {
		return (
		<div>
			<Grid>
        <Row>
          <Col>
	         <h1>New</h1>
           </Col>
        </Row>
				<Row>
					<Col xs={7}><TastingForm /></Col>
					<Col xs={5}><TastingPreview /></Col>
				</Row>
        <Row>
          <Col xs={1}><SaveTasting /></Col>
          <Col xs={1}><ClearTasting /></Col>
        </Row>
		</Grid>
		</div>
	);
}
}
