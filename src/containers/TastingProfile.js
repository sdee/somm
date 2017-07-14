import { connect } from 'react-redux';
import TastingPage from '../components/TastingPage';
import { loadTasting } from '../actions/actions';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	loadTasting: tasting => dispatch(loadTasting(tasting))

});

const TastingProfile = connect(
	mapStateToProps,
	mapDispatchToProps
)(TastingPage);

export default TastingProfile;
