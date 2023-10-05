<script>
    import { goto } from "../stores/Page";
</script>

<header>
    <ul>
        <li><button on:click={() => goto("home")}>home</button></li>
        <li><button on:click={() => goto("counter")}>counter</button></li>
        <li>
            <button on:click={() => goto("reservation")}>reservation</button>
        </li>
    </ul>
</header>

<style>
    header {
        position: absolute;
        top: 0;
        left: 0;
    }
    ul {
        display: flex;
        list-style: none;
        & li {
            margin-right: 1rem;
        }
    }
</style>
