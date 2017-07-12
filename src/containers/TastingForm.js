import { connect } from 'react-redux';
import SliderPanel from '../components/SliderPanel';

const mapStateToProps = (state, ownProps) => ({
	components: state.tasting.components
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

const TastingForm = connect(
	mapStateToProps,
	mapDispatchToProps
)(SliderPanel);

export default TastingForm;
