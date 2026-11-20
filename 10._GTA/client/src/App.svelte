<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Cities from './pages/Cities/Cities.svelte';
  import GrandTheft from './pages/GrandTheft/GrandTheft.svelte';

  const url = "";

</script>

<Router {url}>

  <nav>
    <Link to="/">Home</Link>
    <Link to="/cities">Cities</Link>
    <Link to="/grandtheft">Grand Theft</Link>
  </nav>

  <div>
    <Route path="/">
      <h1>Home</h1>
    </Route>
    <Route path="/cities"><Cities /></Route>
    <Route path="/grandtheft"><GrandTheft /></Route>
  </div>

</Router>

