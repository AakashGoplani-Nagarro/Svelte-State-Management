<script lang="ts">
  import { onMount } from 'svelte';
  import { headingService } from './store';

  let value = '';
  onMount(() => {
    headingService.onTransition((state) => value = state.context.heading);
    return () => headingService.stop();
  });
</script>

<div class="heading">
  <h4>{value}</h4>
</div>