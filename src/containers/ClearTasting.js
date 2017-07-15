import { connect } from 'react-redux';
import Slider from '../components/Slider';
import ClearButton from '../components/ClearButton';
import { rateComponent, saveTasting, clearTasting } from '../actions/actions';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
	clearTasting: () => dispatch(clearTasting())
});

const ClearTasting = connect(
	mapStateToProps,
	mapDispatchToProps
)(ClearButton);

export default ClearTasting;
