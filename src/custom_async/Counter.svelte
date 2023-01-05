<script lang="ts">
	import { count, nestedObj } from './store';

	let promise: Promise<number>;
	let newObject: Promise<unknown>;

	function fetchData() {
		promise = count.generateCounter();
		newObject = nestedObj.load();
	}
</script>

<article id="counter">
	<div class="counter">
		<button on:click={fetchData}><span>Fetch Number</span></button>
		{#await promise}
			<span>Loading...</span>
		{:then value}
			<span class="success">Success: {value || $count}</span>
		{:catch error}
			<span class="error">Error: {error}</span>
		{/await}
	</div>
</article>

<article id="nested-object">
	<div class="output">
		{#await newObject}
			<span>Updating...</span>
		{:then value}
			{#if value}
				<code>{ JSON.stringify($nestedObj) }</code>
			{/if}
		{/await}
	</div>
</article>

<style lang="scss">
	.counter {
		display: flex;
		justify-content: space-evenly;
		align-items: center;

		.success {
			color: green;
		}

		.error {
			color: red;
		}
	}

	.output {
		margin: 2rem 0;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
</style>