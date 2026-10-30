<script>
    import Home from "./components/Home/Home.svelte";
    import Parent from "./components/Parent/Parent.svelte";

    const parents = [
      "Kyle",
      "Zach"
    ];

    const children = [
      {
        id: 1,
        name: "Jonathan",
        familySheep: "black-sheep"
      },
      {
        id: 2,
        name: "Sofus",
        familySheep: "grey-sheep"
      },
      {
        id: 3,
        name: "Luna",
        isGirl: true
      }
    ]

</script>

<h3>Welcome to the Svelte Family</h3>

<Home>
  <Parent name={parents[0]} children={children} />
  <Parent name={parents[1]} children={children} />
</Home>