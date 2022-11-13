<script lang="ts">
  import { onMount } from 'svelte';
  import { value, subscribe } from './store';

  let _heading = value || 'Redux Store';

  onMount(() => {
		return subscribe(() => {
			_heading = value;
		});
	});
</script>

<div class="heading">
  <h4>{ _heading }</h4>
</div>