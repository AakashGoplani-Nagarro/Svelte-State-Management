<script lang="ts">
	import { counterService } from './store';
	import Heading from './Heading.svelte';
	import Input from './Input.svelte';
  import { onMount } from 'svelte';

	let value = 0;

	onMount(() => {
		counterService.onTransition((state) => value = state.context.count);
		return () => counterService.stop();
	});

	function decrement() {
		counterService.send('DEC');
	}

	function increment() {
		counterService.send('INC');
	}
</script>

<article id="counter">
	<div class="counter">
		<button on:click={decrement}><span> - </span></button>
		<span>{value}</span>
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