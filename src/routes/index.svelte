<script>
  import Circle from "$lib/Circle.svelte";
  import ColorSlider from "$lib/ColorSlider.svelte";
  import { color2str, getRandomColor } from "$lib/utils";

  let message = "when you were ready, click on submit";
  let survivedLevels = 0;
  let failed = false;
  let score = 100;
  let expectedColor = getRandomColor();
  let circleColor = [0, 0, 0];

  function reset() {
    expectedColor = getRandomColor();
  }

  function fail() {
    failed = true;
    message = `You survived ${survivedLevels} levels`;
  }

  function validate() {
    if (circleColor[0] + circleColor[1] + circleColor[2] === 0) {
      return;
    }
    const diff =
      Math.abs(expectedColor[0] - circleColor[0]) +
      Math.abs(expectedColor[1] - circleColor[1]) +
      Math.abs(expectedColor[2] - circleColor[2]);

    circleColor = [0, 0, 0];

    message = `you lost ${diff} scores`;
    score = score - diff;
    if (score <= 0) {
      fail();
    }
    survivedLevels++;
    reset();
  }
</script>

<div class="main" style:background-color={color2str(expectedColor)}>
  <div class="header">
    <h1 class="message">Mix colors to hide the circle</h1>
    <h1 class="message score">
      {score}
    </h1>
  </div>
  <h2 style:text-align="center">{message}</h2>
  <div class="center">
    <Circle disabled={failed} on:click={validate} color={circleColor} />
  </div>
  <div class="footer">
    <ColorSlider disabled={failed} name="red" bind:value={circleColor[0]} />
    <ColorSlider disabled={failed} name="green" bind:value={circleColor[1]} />
    <ColorSlider disabled={failed} name="blue" bind:value={circleColor[2]} />
  </div>
</div>

<style>
  :global(*) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :global(html),
  :global(body) {
    height: 100%;
  }
  .main {
    height: 100%;
    transition: all ease-out 0.5s;
    display: flex;
    flex-direction: column;
  }
  .center {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .message {
    padding: 16px;
    font-size: 24px;
    font: monospace;
    text-align: center;
  }

  .score {
    font-size: 48px;
  }

  .footer {
    padding: 4px;
  }
</style>
