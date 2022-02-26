<script>
  export let name;
  let newUserName = "";

  function register() {
    alert(`call a post endpoint to ask the backend to store the new user...`);
  }
</script>

<h1>Hello {name}!</h1>
<p>
  Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how
  to build Svelte apps.
</p>

<link
  href="https://fonts.googleapis.com/css?family=Overpass:100,400"
  rel="stylesheet"
/>

<input type="text" bind:value={newUserName} />
<p />
<button on:click={register}> Register This UserName </button>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
