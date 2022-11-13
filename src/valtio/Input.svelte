<script lang="ts">
  import { headingState } from './store';

  let _heading = headingState.text || '';
</script>

<div class="input">
  <label for="heading">Edit heading: </label>
  <input type="text" bind:value={_heading} on:input={() => { headingState.text = _heading; }}>
</div>

<style lang="scss">
  .input {
    display: flex;
    border: 1px solid black;
    padding: 1rem;

    label {
      margin-right: 1rem;
    }

    input[type="text"] {
      border-top: none;
      border-left: none;
      border-right: none;
      width: 50%;
      font-size: 0.9rem;
      
      &:focus {
        outline: none;
        border-color: blue;
      }
    }
  }
</style>