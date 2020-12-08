export const actionToggleSound = () => ({
	type: "TOGGLE-SOUND"
});

export const actionToggleBabyMode = () => ({
	type: "TOGGLE-BABY-MODE"
});

export const actionSetGame = (game) => ({
	type: "SET-GAME",
	value: game
});

export const actionBackToHome = () => ({
	type: "BACK-TO-HOME"
});

export const actionSetEmoji = (emoji) => ({
	type: "SET-EMOJI",
	value: emoji
});
