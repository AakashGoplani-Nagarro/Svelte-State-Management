import { writable } from 'svelte/store';

const initialState = { x:0, y:0 };
const domReducer = () => {
	const { subscribe, set } = writable(initialState);
	
	const actions = {
		startMousePositionTracking: () => {
			document.body.addEventListener("mousemove", move);
		},
		stopMousePositionTracking: () => {
			document.body.removeEventListener("mousemove", move);
		},
		resetPosition: () => {
			set(initialState);
		}
	};
	
	function move(event) {
		set({
			x: event.clientX,
			y: event.clientY,
		});
	}
	
	return {
		subscribe,
		...actions
	};
};
export const domStore = domReducer();
