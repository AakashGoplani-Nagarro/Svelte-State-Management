<script lang="ts">
	import createStore from './store';
	import Heading from './Heading.svelte';
	import Input from './Input.svelte';
	import { actions, store } from './store_v2'

	function decrement() {
		createStore.dispatch({ type:'DECREMENT' });
	}

	function increment() {
		createStore.dispatch({ type:'INCREMENT' });
	}

	function decrement_v2() {
		store.dispatch(actions.dec());
	}

	function increment_v2() {
		store.dispatch(actions.inc());
	}
</script>

<article id="counter">
	<div class="counter">
		<p>Enhancer: </p>
		<button on:click={decrement}><span> - </span></button>
		<span>{$createStore}</span>
		<button on:click={increment}><span> + </span></button>
	</div>
	<div class="counter_v2">
		<p>Standard: </p>
		<button on:click={decrement_v2}><span> - </span></button>
		<span>{$store.count}</span>
		<button on:click={increment_v2}><span> + </span></button>
	</div>
</article>

<article id="text">
	<Heading />
	<Input />
</article>

<style lang="scss">
	.counter, .counter_v2 {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
</style>