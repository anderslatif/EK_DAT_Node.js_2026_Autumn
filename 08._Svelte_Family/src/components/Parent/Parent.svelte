<script>
    import Child from "../Child/Child.svelte";

    import { fridgeMessages } from "../../stores/fridgeMessagesStore.js";

    const { name, children } = $props();


    function wipeFridge() {
        fridgeMessages.wipe();
    }
    
    function handleShowLove(name = "") {
        console.log(`${name}, loves me.`);
    }

    let cookieJar = $state(["🍪", "🍪", "🍪", "🍪", "🍪"]);

    function handleEatCookie() {
        cookieJar.pop();

        if (cookieJar.length === 0) {
            cookieJar = ["🍪", "🍪", "🍪", "🍪", "🍪"];
        }
    }

    /* assignment
    
        create handleEatCookie and onEatCookie
        children should be able to eat a cookie
        only the parents should be the ones who have access to the cookie jar
        when a child eats a cookie, it disappears from the cookie jar

        Bonus: replenish the cookie jar when empty
    */

</script>

<h1>Yo, I am {name}</h1>

<button onclick={wipeFridge}>Wipe Fridge</button>

<p>{cookieJar}</p>

{#each children as child (child.id)}
    <Child 
        {...child} 
        onShowLove={handleShowLove} 
        onEatCookie={handleEatCookie} 
        bind:cookieCount={cookieJar.length} 
    />
{/each}