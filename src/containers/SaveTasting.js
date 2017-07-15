import { connect } from 'react-redux';
import Slider from '../components/Slider';
import SaveButton from '../components/SaveButton';
import { rateComponent, saveTasting } from '../actions/actions';

const mapStateToProps = (state, ownProps) => ({
  currentTasting: state.tasting.currentTasting
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
	const { currentTasting } = propsFromState;
	const { dispatch } = propsFromDispatch;
	return {
		onClick: () => saveTasting(currentTasting, dispatch)
	};
};


const SaveTasting = connect(
	mapStateToProps,
	mapDispatchToProps,
  mergeProps
)(SaveButton);

export default SaveTasting;
