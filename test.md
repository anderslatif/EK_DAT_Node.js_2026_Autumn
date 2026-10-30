<Counter bind:count />
  let { count = $bindable(0) } = $props();