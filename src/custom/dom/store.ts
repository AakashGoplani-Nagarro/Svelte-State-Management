import { createStore } from 'redux';

(window as any).process = { env: { NODE_ENV: 'production'}};

function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1

    case 'DECREMENT':
      return state - 1

    default:
      return state
  }
}

function svelteStoreEnhancer(createStoreApi) {
	return function (reducer, initialState) {
		const reduxStore = createStoreApi(
			reducer, initialState
		);
		return {
			...reduxStore,
			subscribe(fn) {
				fn(reduxStore.getState());

				return reduxStore.subscribe(() => {
					fn(reduxStore.getState());
				});
			}
		}
	}
}

export let value = 'Svelte Store';
let subscribers = [];

export function update(newValue: string) {
  value = newValue;

  subscribers.forEach(fn => {
		fn();
	});
}

export function subscribe(fn) {
	subscribers.push(fn);
	
	return function unsubscribe() {
		subscribers.splice(subscribers.indexOf(fn), 1)
	}
}

export default createStore(reducer, svelteStoreEnhancer);