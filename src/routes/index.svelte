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

  function restart() {
    score = 100;
    reset();
    circleColor = [0, 0, 0];
    failed = false;
    survivedLevels = 0;
    message = "when you were ready, click on submit";
  }

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

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Smooch+Sans:wght@300;400;500;700&family=Sofadi+One&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="main" style:background-color={color2str(expectedColor)}>
  <div class="header">
    <p class="message">Mix colors to hide the circle</p>
    <p class="message score" class:alerting={score < 50 && score >= 0}>
      {score}
    </p>
  </div>
  <p class="message">{message}</p>
  <div class="center">
    <Circle
      disabled={failed}
      on:click={() => (failed ? restart() : validate())}
      color={circleColor}
    />
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
    font-family: "Smooch sans";
  }

  p {
    font-size: 24px;
    font-weight: bold;
  }

  .header {
    margin-top: 32px;
  }
  .main {
    height: 100%;
    transition: all ease-out 0.5s;
    display: flex;
    flex-direction: column;
  }

  .alerting {
    text-shadow: 0px 0px var(--radius) red;
    animation: alert 0.5s ease-out infinite;
    animation-direction: alternate;
  }

  @keyframes alert {
    0% {
      --radius: 0;
    }
    10% {
      --radius: 1px;
    }
    20% {
      --radius: 2px;
    }
    30% {
      --radius: 3px;
    }
    40% {
      --radius: 4px;
    }
    50% {
      --radius: 5px;
    }
    60% {
      --radius: 6px;
    }
    70% {
      --radius: 7px;
    }
    80% {
      --radius: 8px;
    }
    90% {
      --radius: 9px;
    }
    100% {
      --radius: 10px;
    }
  }
  .center {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .message {
    margin-top: 4px;
    padding-left: 32px;
    padding-right: 32px;
    font-size: 32px;
    font-weight: 400;
    font: monospace;
    text-align: center;
    color: white;
    /* text-shadow: 1px 1px 54px black; */
  }

  .score {
    font-size: 72px;
  }

  .footer {
    padding: 4px;
  }
</style>
