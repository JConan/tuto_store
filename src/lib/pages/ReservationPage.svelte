<script lang="ts">
    import {
        addPersonne,
        changeSejour,
        removePersonne,
        reservation,
    } from "../stores/Reservation";

    // function addPersonne() {
    //   $reservation = {
    //     ...$reservation,
    //     nPersonne: ($reservation.nPersonne || 0) + 1,
    //   };
    // }
    // function removePersonne() {
    //   const currentValue = $reservation.nPersonne || 0;
    //   $reservation = {
    //     ...$reservation,
    //     nPersonne: currentValue > 1 ? currentValue - 1 : 1,
    //   };
    // }

    // function changeSejour(input: InputEvent) {
    //   $reservation = {
    //     ...$reservation,

    //     sejour: input.data!,
    //   };

    //   if ($reservation.sejour === null) {
    //     delete $reservation.sejour;
    //   }
    // }

    function inputSejour(input: Event) {
        changeSejour((input as InputEvent).data!);
    }
</script>

<div>
    {JSON.stringify($reservation)}
</div>

<div>
    nPersonne:
    <button on:click={addPersonne}>+</button>
    <button on:click={removePersonne}>-</button>
</div>

<div>
    <label for="sejour-choice">sejour:</label>
    <input
        list="sejour-flavors"
        id="sejour-choice"
        name="sejour-choice"
        on:input={(e) => inputSejour(e)}
    />

    <datalist id="sejour-flavors">
        <option value="Chocolate" />
        <option value="Coconut" />
        <option value="Mint" />
        <option value="Strawberry" />
        <option value="Vanilla" />
    </datalist>
</div>

<style>
    div {
        border: 2px solid white;
        margin-bottom: 2rem;
        padding: 2rem;
    }
</style>
