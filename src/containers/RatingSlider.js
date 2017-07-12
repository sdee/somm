import { connect } from 'react-redux';
import Slider from '../components/Slider';
import {rateComponent} from '../actions/actions';


const mapStateToProps = (state, ownProps) => ({
	component: ownProps.component,
	currentRating: state.tasting.currentTasting[ownProps.component]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	changeValue: (e) => { dispatch(rateComponent(ownProps.component, e.target.value))}
});

const RatingSlider = connect(
	mapStateToProps,
	mapDispatchToProps
)(Slider);

export default RatingSlider;
