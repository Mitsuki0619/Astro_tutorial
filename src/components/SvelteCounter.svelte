
<script lang="ts">
  let count: number = 0;
  const handleClickCount= (num: number): void => {
    count += num;
    console.log("Svelte is the best!");
  }
</script>
<button class="counter" on:click={() => handleClickCount(2)}>{count}</button>;
<style>
  .counter {
    padding: 4px 8px;
  }
</style>