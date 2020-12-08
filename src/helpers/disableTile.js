import {store} from "./../entry.js";

// Pulsate matching tiles
export function disableTile(tileId) {
	const {gridData} = store.getState().game;

	gridData[parseInt(tileId)].disabled = true;
}
