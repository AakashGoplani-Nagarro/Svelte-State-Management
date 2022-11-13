<script lang="ts">
	import { counter } from './store';
	import Heading from './Heading.svelte';
	import Input from './Input.svelte';

	function decrement() {
		counter.decrement();
	}

	function increment() {
		counter.increment();
	}
</script>

<article id="counter">
	<div class="counter">
		<button on:click={decrement}><span> - </span></button>
		<span>{$counter}</span>
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