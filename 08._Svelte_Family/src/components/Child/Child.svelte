<script>
    const { name, familySheep } = $props();

</script>

<div
    class={familySheep || "not-a-sheep"}
>
    <h2>I am {name}</h2>
</div>

<style>
    .black-sheep h2 {
        color: blueviolet;
    }

    .grey-sheep h2 {
        color: darkolivegreen;
    }

    .not-a-sheep h2 {
        color: greenyellow;
    }
</style>