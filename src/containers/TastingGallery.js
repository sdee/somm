import { connect } from 'react-redux';
import Gallery from '../components/Gallery';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

const TastingGallery = connect(
	mapStateToProps,
	mapDispatchToProps
)(Gallery);

export default TastingGallery;
