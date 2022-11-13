import { createDraft, finishDraft } from 'immer';
import {enableAllPlugins} from "immer"

enableAllPlugins();

(window as any).process = { env: { NODE_ENV: 'production' } };

export let [counterCurrentState, counterDraftState] = getImmerStore({ count: 0 });
export let [headingCurrentState, headingDraftState] = getImmerStore({ text: 'Immer Store' });

function getImmerStore(obj) {
	let state = obj;
	let draft = createDraft(state);
	let draftSubscribers = new Set();
	let stateSubscribers = new Set();

	const draftStore = {
		subscribe(fn) {
			fn(draft);
			draftSubscribers.add(fn);
			
			return () => {
				draftSubscribers.delete(fn);
			};
		},
		set(value) {
			state = finishDraft(value);
			draft = createDraft(state);
			draftSubscribers.forEach((fn: any) => fn(draft));
			stateSubscribers.forEach((fn: any) => fn(state));
		}
	};

	const stateStore = {
		subscribe(fn) {
			fn(state);
			stateSubscribers.add(fn);
			
			return () => {
				stateSubscribers.delete(fn);
			}
		}
	};

	return [stateStore, draftStore];
}