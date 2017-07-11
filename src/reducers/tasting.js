import { SAVE_TASTING } from '../actions/actions';
const wineData = require('../data/wine.json');
const initialState = {
	components: wineData.components
};

const tastingReducer = (state = initialState, action) => {
  switch (action.type) {


default: {
  return state;
}
}
};

export default tastingReducer;
