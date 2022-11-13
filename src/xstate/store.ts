import { createMachine, interpret, assign } from 'xstate';

const increment = (context) => context.count + 1;
const decrement = (context) => context.count - 1;

const counterMachine = createMachine({
  initial: 'active',
  predictableActionArguments: true,
  context: {
    count: 0,
  },
  states: {
    active: {
      on: {
        INC: { actions: assign({ count: increment }) },
        DEC: { actions: assign({ count: decrement }) }
      }
    }
  }
});

const headingMachine = createMachine({
  initial: 'active',
  predictableActionArguments: true,
  context: {
    heading: 'Xstate Stores',
  },
  states: {
    active: {
      on: {
        UPDATE: { actions: assign((context, event) => ({ heading: Object.values(event.value).join('') })) },
      }
    }
  }
});

export const counterService = interpret(counterMachine).start();
export const headingService = interpret(headingMachine).start();
