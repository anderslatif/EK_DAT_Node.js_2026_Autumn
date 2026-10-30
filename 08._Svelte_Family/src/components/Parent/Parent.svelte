<script>
    import Child from "../Child/Child.svelte";

    const { name, children } = $props();


</script>

<h1>Yo, I am {name}</h1>

{#each children as child (child.id)}
    <Child {...child} />
{/each}