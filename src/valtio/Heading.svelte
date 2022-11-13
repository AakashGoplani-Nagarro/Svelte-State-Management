<script lang="ts">
  import { headingState, toSvelteStore } from './store';

  const headingSnapshotStore = toSvelteStore(headingState);
</script>

<div class="heading">
  <h4>{$headingSnapshotStore.text}</h4>
</div>