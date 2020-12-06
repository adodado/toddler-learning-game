import {h, Component} from "preact";
import {actionDisableActive} from "../redux/actions/game";
import {actionSetGame} from "../redux/actions/global";
import newGame from "../helpers/newGame";
import speech from "../helpers/speech";
import {store} from "./../entry.js";

export default class SelectGame extends Component {
	setGame(game) {
		store.dispatch(actionSetGame(game.val.toLowerCase()));
		store.dispatch(actionDisableActive());

		// Start new game
		newGame(game.val.toLowerCase());

		// Use speech synthesis API to narrate game title (if sound is enabled)
		speech(game.text.toLowerCase());
	}

	render() {
		const state = store.getState(),
			{sound} = state.global,
			games = [{text: "Životinje", val: "Animals"}, {text: "Boje", val: "Colours"}, {text: "Brojevi", val: "Numbers"}, {text: "Oblici", val: "Shapes"}];

		return (
			<div class="select-container">
				<h1 class="heading">Izaberi Igru</h1>
				<div class="game-container">
					{games.map((item) => {
						return (
							<button class="btn btn-game" onClick={() => this.setGame(item, sound)}>
								<div class={`game-select game-select_${item.val.toLowerCase()}`} />
								{item.text}
							</button>
						);
					})}
				</div>
			</div>
		);
	}
}
