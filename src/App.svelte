<script lang="ts">
  import ReservationPage from "./lib/pages/ReservationPage.svelte";
  import CounterPage from "./lib/pages/CounterPage.svelte";
  import { page } from "./lib/stores/Page";
  import NavBar from "./lib/components/NavBar.svelte";
</script>

<NavBar />

{#if $page === "home"}
  <p>Home</p>
{/if}
{#if $page === "counter"}
  <CounterPage />
{/if}
{#if $page === "reservation"}
  <ReservationPage />
{/if}
