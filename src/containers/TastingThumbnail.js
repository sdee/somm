import { connect } from 'react-redux';
import RadarChart from '../components/RadarChart';

const mapStateToProps = (state, ownProps) => ({
	currentTasting: ownProps.tasting
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

const TastingThumbnail = connect(
	mapStateToProps,
	mapDispatchToProps
)(RadarChart);

export default TastingThumbnail;
