import { actionToggleBabyMode, actionToggleSound, actionBackToHome } from "../redux/actions/global";
import { h, Component } from "preact";
import playAudio from "../helpers/playAudio";
import { store } from "../entry.js";

export default class GameToolbar extends Component {
	toggleGameMode() {
		store.dispatch(actionToggleBabyMode());

		// Play pop sound effect
		playAudio("pop");
	}

	toggleSound() {
		store.dispatch(actionToggleSound());
	}

	goToHome() {
		store.dispatch(actionBackToHome());

		// Play pop sound effect
		playAudio("pop");
	}
	render() {
		const { gameMode, sound, selectedGame } = store.getState().global;
		const isModeToggled = gameMode !== 0;
		const isSoundToggled = sound !== "disabled";
		const homebtnCss = selectedGame === null ? " btn-home_disabled" : "";

		return (
			<div class="sidebar-container">
				<div>
					Start
					<br />
					<button class={`btn btn-home${homebtnCss}`} onClick={() => this.goToHome()}>
						<div class="home-icon"></div>
					</button>
				</div>
				<div>
					Baby mode
					<input
						className="mode-switch-checkbox"
						id={"mode-switch-new"}
						type="checkbox"
						checked={isModeToggled}
						onClick={() => this.toggleGameMode()}
					/>
					<label
						style={{ background: isModeToggled ? "#06D6A0" : "#cc2323" }}
						className="mode-switch-label"
						htmlFor={"mode-switch-new"}
					>
						<span className={"mode-switch-button"} />
					</label>
				</div>
				<div>
					Zvuk
					<input
						className="mode-switch-checkbox"
						id={"sound-switch-new"}
						type="checkbox"
						checked={isSoundToggled}
						onClick={() => this.toggleSound()}
					/>
					<label
						style={{ background: isSoundToggled ? "#06D6A0" : "#cc2323" }}
						className="mode-switch-label"
						htmlFor={"sound-switch-new"}
					>
						<span className={"mode-switch-button"} />
					</label>
				</div>
			</div>
		);
	}
}
