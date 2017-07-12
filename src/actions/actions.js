/*
*Action types
*/
export const SAVE_TASTING = 'SAVE_TASTING';
export const RATE_COMPONENT = 'RATE_COMPONENT';

/*
*Action creators
*/

export function saveTasting(tasting) {
	return { type: SAVE_TASTING, tasting };
}

export function rateComponent(component, rating) {
	console.log('rate component');
	return { type: RATE_COMPONENT, component, rating };
}
