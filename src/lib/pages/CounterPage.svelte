<script lang="ts">
    import Counter from "../components/Counter.svelte";
    import ContainerA from "../components/ContainerA.svelte";
</script>

<div>
    <Counter name="Compte A" />
</div>

<div>
    <ContainerA />
</div>

<style>
    div {
        border: 2px solid white;
        margin-bottom: 2rem;
        padding: 2rem;
    }
</style>
