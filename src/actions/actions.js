import axios from "axios"
/*
*Action types
*/
export const SAVE_TASTING = 'SAVE_TASTING';
export const RATE_COMPONENT = 'RATE_COMPONENT';

/*
*Action creators
*/

export function saveTasting(tasting, dispatch) {
  console.log("SAVE");
	console.log(tasting);
}

// export function createGroup(dispatch) {
// 	return axios.post('/api/groups', )
//   .then((response) => { dispatch({ type: 'CREATE', element: response }); })
//   .catch((error) => {
// 	console.log(error);
// });
// }

export function rateComponent(component, rating) {
	console.log('rate component');
	return { type: RATE_COMPONENT, component, rating };
}
