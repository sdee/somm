import { connect } from 'react-redux';
import New from '../components/New';
import { rateComponent, clearTasting } from '../actions/actions';


const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
	clearTasting: () => dispatch(clearTasting())
});

const NewTasting = connect(
	mapStateToProps,
	mapDispatchToProps
)(New);

export default NewTasting;
