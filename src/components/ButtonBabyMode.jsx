import {h, Component} from "preact";
import {actionToggleBabyMode} from "../redux/actions/global";
import playAudio from "../helpers/playAudio";
import {store} from "../entry.js";

export default class ButtonBabyMode extends Component {
	toggle() {
		store.dispatch(actionToggleBabyMode());

		// Play pop sound effect
		playAudio("pop");
	}

	render() {
		const {gameMode, selectedGame} = store.getState().global,
			btnCss = gameMode === 1 ? " btn-toggle-mode_disabled" : "";

		return (
			!selectedGame && (
				<button class={`btn btn-toggle-mode${btnCss}`} onClick={() => this.toggle()}>
					Toggle Game Mode
				</button>
			)
		);
	}
}
