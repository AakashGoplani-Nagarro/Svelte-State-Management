<script lang="ts">
	import { count } from './store';
	import Heading from './Heading.svelte';
	import Input from './Input.svelte';

	function decrement() {
		count.decrement();
	}

	function increment() {
		count.increment();
	}
</script>

<article id="counter">
	<div class="counter">
		<button on:click={decrement}><span> - </span></button>
		<span>{$count}</span>
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