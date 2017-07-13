import { connect } from 'react-redux';
import RadarChart from '../components/RadarChart';

const mapStateToProps = (state, ownProps) => ({
	currentTasting: state.tasting.currentTasting
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

const TastingPreview = connect(
	mapStateToProps,
	mapDispatchToProps
)(RadarChart);

export default TastingPreview;
