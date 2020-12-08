// Initial global state
const initialGlobalState = {
	sound: localStorage.getItem("sound") || "enabled",
	selectedGame: null,
	gameMode: localStorage.getItem("gameMode") || 0,
	emoji: "grinning-face-with-smiling-eyes"
};

export const global = (state = initialGlobalState, action) => {
	const soundSetting = state.sound === "enabled" ? "disabled" : "enabled";
	const gameModeSetting = state.gameMode === 0 ? 1 : 0;

	switch (action.type) {
		case "TOGGLE-SOUND":
			localStorage.setItem("sound", soundSetting);
			return Object.assign({}, state, {
				sound: soundSetting
			});
		case "SET-GAME":
			return Object.assign({}, state, {
				selectedGame: action.value
			});
		case "BACK-TO-HOME":
			return Object.assign({}, state, {
				selectedGame: null
			});
		case "SET-EMOJI":
			return Object.assign({}, state, {
				emoji: action.value
			});
		case "TOGGLE-BABY-MODE":
			return Object.assign({}, state, {
				gameMode: gameModeSetting
			});
		default:
			return state;
	}
};
