<script lang="ts">
  import Tabs from './components/Tabs.svelte';
</script>

<main>
  <header>
    <h1>Svelte Stores</h1>
  </header>

  <section>
    <Tabs />
  </section>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
  }

  section {
    width: 100%;
    margin: 1rem 0;
  }
</style>