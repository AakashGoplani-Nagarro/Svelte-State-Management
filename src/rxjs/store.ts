import { BehaviorSubject } from 'rxjs';

let _count = 0;
let _heading = 'RxJs Store';
const counterState = new BehaviorSubject(_count);
const headingState = new BehaviorSubject(_heading);

export const counter = {
	subscribe: (fn) => {
		fn(_count);
		counterState.subscribe(value => fn(value));

		return () => {
			counterState.complete();
			counterState.unsubscribe();
		}
	},
	increment: () => {
		_count++;
		counterState.next(_count);
	},
	decrement: () => {
		_count--;
		counterState.next(_count);
	}
};

export const heading = {
	subscribe: (fn) => {
		fn(_heading);
		headingState.subscribe(value => fn(value));

		return () => {
			headingState.complete();
			headingState.unsubscribe();
		}
	},
	update: (value: string) => headingState.next(value)
};
