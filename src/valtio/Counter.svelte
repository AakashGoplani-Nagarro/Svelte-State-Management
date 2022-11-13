<script lang="ts">
	import { counterState, toSvelteStore } from './store';
	import Heading from './Heading.svelte';
	import Input from './Input.svelte';

	const countSnapshotStore = toSvelteStore(counterState);

	function decrement() {
		counterState.count--; // ToDo -> do not directly update statements here...
	}

	function increment() {
		counterState.count++;
	}
</script>

<article id="counter">
	<div class="counter">
		<button on:click={decrement}><span> - </span></button>
		<span>{$countSnapshotStore.count}</span>
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