<script>
  import { color2str } from "./utils";

  export let color;
  export let disabled;
</script>

<div
  on:click
  style:background-color={color2str(color)}
  class="circle"
  class:disabled
>
  Submit
</div>

<style>
  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 200%;
    width: 200px;
    height: 200px;
    border-radius: 999px;
    background-color: white;
  }
  .disabled {
    opacity: 0.2;
  }
</style>
