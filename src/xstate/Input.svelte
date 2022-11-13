<script lang="ts">
  import { headingService } from './store';

  let _heading = headingService.getSnapshot().context.heading || '';
</script>

<div class="input">
  <label for="heading">Edit heading: </label>
  <input
    type="text"
    bind:value={_heading}
    on:input={(e) => { headingService.send({ type: 'UPDATE', value: e.target.value }); }}
    />
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