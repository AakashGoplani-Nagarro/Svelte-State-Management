import { proxy, snapshot, subscribe } from 'valtio/vanilla';

export const counterState = proxy({ count: 0 });
export const headingState = proxy({ text: 'Valtio Store' });

export function toSvelteStore(proxyState) {
  return {
    subscribe(fn) {
      fn(snapshot(proxyState));

      return subscribe(proxyState, () => {
        fn(snapshot(proxyState));
      });
    }
  };
}