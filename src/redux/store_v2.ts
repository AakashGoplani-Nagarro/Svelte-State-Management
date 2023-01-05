import { createStore } from "redux";
import { readable } from "svelte/store";
import produce from "immer";

(window as any).process = { env: { NODE_ENV: 'production'}};

const initialState = { count: 0 };

const INC = "INCREMENT";
const DEC = "DECREMENT";

export const actions = {
	inc: () => ({type: INC}),
	dec: () => ({type: DEC})
};

const handlers = {
	[INC]: state => {
		state.count++;
	},
	[DEC]: state => {
		state.count--;
	}
};

const reducer = (state = initialState, action) =>
	handlers[action.type] ? produce(handlers[action.type])(state, action) : state;

function createReduxStore(reducer, initialState) {
	const reduxStore = createStore(
		reducer,
		initialState,
		(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
	);

	const state = readable(reduxStore.getState(), set => {
		const unsubscribe = reduxStore.subscribe(() => {
			set(reduxStore.getState());
		})
		return unsubscribe;
	});

	return {
		subscribe: state.subscribe,
		dispatch: reduxStore.dispatch
	};
}

export const store = createReduxStore(reducer, initialState);