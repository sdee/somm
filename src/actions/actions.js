/*
*Action types
*/
export const SAVE_TASTING = 'SAVE_TASTING';

/*
*Action creators
*/

export function saveTasting(tasting) {
	return { type: SAVE_TASTING, tasting }; // add meta-attributes
}
