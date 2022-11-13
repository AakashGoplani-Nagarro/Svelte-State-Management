<script lang="ts">
	import createStore from './store';
	import Heading from './Heading.svelte';
	import Input from './Input.svelte';

	function decrement() {
		createStore.dispatch({ type:'DECREMENT' });
	}

	function increment() {
		createStore.dispatch({ type:'INCREMENT' });
	}
</script>

<article id="counter">
	<div class="counter">
		<button on:click={decrement}><span> - </span></button>
		<span>{$createStore}</span>
		<button on:click={increment}><span> + </span></button>
	</div>
</article>

<article id="text">
	<Heading />
	<Input />
</article>

<style lang="scss">
	.counter {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
</style>