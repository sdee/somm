import axios from "axios";
import { browserHistory } from 'react-router';
/*
*Action types
*/
export const SAVE_TASTING = 'SAVE_TASTING';
export const RATE_COMPONENT = 'RATE_COMPONENT';
export const LOAD_TASTING = 'LOAD_TASTING';
export const CLEAR_TASTING = 'CLEAR_TASTING';


/*
*Action creators
*/

export function saveTasting(tasting, dispatch) {
	return axios.post('/api/tasting/', tasting)
    .then((response) => {
	const id = response.data._id;
	browserHistory.push(`/tasting/${id}`)
})
    .catch((error) => {
	console.log(error);
});
}

export function rateComponent(component, rating) {
	console.log('rate component');
	return { type: RATE_COMPONENT, component, rating };
}

export function loadTasting(tasting) {
	return { type: LOAD_TASTING, tasting };
}

export function clearTasting() {
	return { type: CLEAR_TASTING };
}
