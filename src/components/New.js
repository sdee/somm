import React from "react";
import { Panel, Grid, Row, Col, FormGroup, Tabs, Tab } from 'react-bootstrap';
import TastingForm from '../containers/TastingForm';
import TastingPreview from '../containers/TastingPreview';
import SaveTasting from '../containers/SaveTasting';

export default class New extends React.Component {
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
					<Col xs={6}><TastingForm /></Col>
					<Col xs={5}><TastingPreview /></Col>
				</Row>
        <Row>
          <Col xs={6}><SaveTasting /></Col>
        </Row>
		</Grid>
		</div>
	);
}
}
