import { SAVE_TASTING } from '../actions/actions';
const wineData = require('../data/wine.json');

// TODO: change components to use .keys
const initialState = {
	components: wineData.components,
  currentTasting: {}
};

for (const component of wineData.components) {
	initialState.currentTasting[component] = 0;
}

console.log(initialState);

const tastingReducer = (state = initialState, action) => {
  switch (action.type) {


default: {
  return state;
}
}
};

export default tastingReducer;
