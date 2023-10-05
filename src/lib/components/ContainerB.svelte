<script lang="ts">
    import CounterScreen from "./CounterScreen.svelte";
</script>

<div>
    <p>container B:</p>
    <CounterScreen name="Compte A" />
</div>

<style>
    div {
        border: 2px solid white;
        padding: 1rem;
    }
</style>
