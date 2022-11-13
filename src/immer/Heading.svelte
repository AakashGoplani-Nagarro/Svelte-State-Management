<script lang="ts">
  import { headingCurrentState } from './store';

  $: _heading = $headingCurrentState.text || 'Immer Store';
</script>

<div class="heading">
  <h4>{ _heading }</h4>
</div>