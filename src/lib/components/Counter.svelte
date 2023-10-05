<script lang="ts">
  import { counter } from "../stores/Counter";
  import CounterScreen from "./CounterScreen.svelte";

  export let name: string;

  function increment() {
    $counter++;
  }

  function decrement() {
    if ($counter > 0) $counter--;
  }
</script>

<CounterScreen {name} />

<button on:click={increment}>+</button>
<button on:click={decrement}>-</button>
