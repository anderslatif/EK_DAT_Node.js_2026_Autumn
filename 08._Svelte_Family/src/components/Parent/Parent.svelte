<script>
    import Child from "../Child/Child.svelte";

    const { name, children } = $props();

    function handleShowLove(name = "") {
        console.log(`${name}, loves me.`);
    }

    /* assignment
    
        create handleEatCookie and onEatCookie
        children should be able to eat a cookie
        only the parents should be the ones who have access to the cookie jar
        when a child eats a cookie, it disappears from the cookie jar
    */

</script>

<h1>Yo, I am {name}</h1>

{#each children as child (child.id)}
    <Child {...child} onShowLove={handleShowLove} />
{/each}