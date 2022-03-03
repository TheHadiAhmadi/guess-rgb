import adapter from "svelte-adapter-deno-deploy";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      out: "dist",
    }),
  },
};

export default config;
