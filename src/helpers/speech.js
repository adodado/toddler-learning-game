import {store} from "./../entry.js";

// Use speech synthesis API to narrate tile label for now, and replace with mp3 sounds later
export default function speech(value) {
	const {sound} = store.getState().global;

	const voices = window.speechSynthesis.getVoices();

	if ("speechSynthesis" in window && sound === "enabled") {
		// speechSynthesis behaves differently across browsers
		// - In Chrome when selecting tiles quickly, this causes major animation jank, plus the second tile label isn't narrated
		// - Overcome this by not using window.speechSynthesis.cancel() in Chrome
		// - This can lead to long gaps between narrations, plus a long queue
		// - Until Chrome improves, we can't use .cancel(), but we'll use it on other browers
		const isChrome = navigator.userAgent.includes("Chrome");

		// Create speech synthesis utterance object
		const utterance = new SpeechSynthesisUtterance(value);

		// Configure utterance
		utterance.lang = "de-DE";
		utterance.voice = voices[2];
		utterance.volume = 1;
		utterance.rate = isChrome ? 0.8 : 1;
		utterance.pitch = 1;

		// Cancel any queued utterances
		if (!isChrome) {
			window.speechSynthesis.cancel();
		}

		// Narrate utterance
		window.speechSynthesis.speak(utterance);
	}
}
