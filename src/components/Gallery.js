import React from "react";
import axios from 'axios';
import { Panel, Grid, Row, Col, FormGroup, Tabs, Tab } from 'react-bootstrap';
import TastingForm from '../containers/TastingForm';
import TastingPreview from '../containers/TastingPreview';
import SaveTasting from '../containers/SaveTasting';
import ClearTasting from '../containers/ClearTasting';

export default class Gallery extends React.Component {

	componentDidMount() {
    axios.get(`/api/v1/tasting`)
    .then(({ data }) => {
      console.log("DATA");
    console.log(data);
    })
    .catch((error) => {
    if (error.response && error.response.status === 404) {
    }
    throw error;
    });
	}

	render() {
		return (
			<div >

      </div>
		);
	}
}
