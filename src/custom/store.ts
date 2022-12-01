import { writable } from "svelte/store";
import { reduxify } from "./reduxify";

const initialCount: number = 0;
const initialHeading: string = "Custom Store";

const counterReducer = () => {
  const { subscribe, update, set } = writable<number>(initialCount);

  const actions = {
    increment: () => update((c) => c + 1),
    decrement: () => update((c) => c - 1),
    reset: () => set(0),
  };

  return reduxify({
    subscribe,
    ...actions,
  });
};

const headingReducer = () => {
  const { subscribe, set } = writable<string>(initialHeading);

  const actions = {
    update: (newValue: string) => set(newValue),
  };

  return reduxify({
    subscribe,
    ...actions,
  });
};

export const count = counterReducer();
export const heading = headingReducer();
