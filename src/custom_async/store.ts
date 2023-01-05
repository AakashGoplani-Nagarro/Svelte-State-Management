import { writable } from "svelte/store";
import produce from 'immer';

const initialCount: number = 0;
const initialObject = {
	root: {
		numberList: {
			sucess: {
				entries: ''
			},
			error: {
				entries: ''
			}
		}
	}
};
let randomNumber: number = 0;

const counterReducer = () => {
  const { subscribe, set } = writable<number>(initialCount);

  const actions = {
    generateCounter: async () => {
      return new Promise<number>((resolve, reject) => {
        return setTimeout(() => {
          randomNumber = Math.ceil((Math.random() * 99) + 1);
          set(randomNumber);
          if (isPrimeNumber(randomNumber)) {
            reject(0 - randomNumber);
          }
          resolve(randomNumber);
        }, 1000);
      });
    }
  };

  return {
    subscribe,
    ...actions,
  };
};

export const count = counterReducer();

const nestedObjReducer = () => {
  const { subscribe, update } = writable(initialObject);

  const actions = {
    load: async () => {
      return new Promise((resolve) => {
        return setTimeout(() => {
          update((currentState) => 
            produce(currentState, (draft) => {
              if (isPrimeNumber(randomNumber)) {
                const errorEntries = draft.root.numberList.error.entries;
                draft.root.numberList.error.entries = errorEntries + ', -' + randomNumber;
              } else {
                const successEntries = draft.root.numberList.sucess.entries;
                draft.root.numberList.sucess.entries = successEntries + ', ' + randomNumber;
              }
              resolve(true);
            })
          );
        }, 1000);
      });
    }
  };

  return {
    subscribe,
    ...actions,
  };
};

export const nestedObj = nestedObjReducer();

function isPrimeNumber(num: number): boolean {
  let i = 2, flag = true;
  for(; i <= num - 1; i++) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
