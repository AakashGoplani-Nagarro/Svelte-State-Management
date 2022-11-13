<script lang="ts">
  import { heading } from './store';

  $: _heading = $heading || 'RxJs Store';
</script>

<div class="heading">
  <h4>{ _heading }</h4>
</div>