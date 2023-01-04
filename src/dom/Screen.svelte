<script lang="ts">
	import { domStore } from './store';

  function startTracking() {
    domStore.startMousePositionTracking();
  }

  function stopTracking() {
    domStore.stopMousePositionTracking();
  }

  function reset() {
    domStore.resetPosition();
  }
</script>

<div class="button-group">
  <button on:click={startTracking}>
    <span>Start Tracking</span>
  </button>
  <button on:click={stopTracking}>
    <span>Stop Tracking</span>
  </button>
  <button on:click={reset}>
    <span>Reset</span>
  </button>
</div>

<p class="position">
  Position: <span>{ '( x: ' + $domStore.x + ', y: ' + $domStore.y + ' )' }</span>
</p>

<style lang="scss">
  .button-group {
    display: flex;
    justify-content: space-evenly;
  }

  .position {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
</style>