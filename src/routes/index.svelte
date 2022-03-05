<script>
  import Game from "$lib/Game.svelte";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Smooch+Sans:wght@300;400;500;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Game />

<style>
  :global(*) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :global(html),
  :global(body) {
    height: 100%;
    font-family: "Smooch sans";
  }
</style>
