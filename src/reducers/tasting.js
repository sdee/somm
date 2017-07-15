import { RATE_COMPONENT, SAVE_TASTING, LOAD_TASTING, CLEAR_TASTING } from '../actions/actions';

const wineData = require('../data/wine.json');

// TODO: change components to use .keys
const initialState = {
	components: wineData.components,
	currentTasting: {}
};

for (const component of wineData.components) {
	initialState.currentTasting[component] = 0;
}

const tastingReducer = (state = initialState, action) => {
	switch (action.type) {
	case RATE_COMPONENT: {
		const currentRatings = Object.assign({}, state.currentTasting);
		currentRatings[action.component] = action.rating;
		return Object.assign({}, state, {
			currentTasting: currentRatings
		});
	}

	case LOAD_TASTING: {
		return Object.assign({}, state, {
			currentTasting: action.tasting
		});
	}

	case CLEAR_TASTING: {
		const emptyTasting = {};
		for (const component of wineData.components) {
			emptyTasting[component] = 0;
		}

		return Object.assign({}, state, {
			currentTasting: emptyTasting
		});
	}


	default: {
		return state;
	}
	}
};

export default tastingReducer;
