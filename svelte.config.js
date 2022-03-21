// import adapter from "svelte-adapter-deno-deploy";
import adapter from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      out: "dist",
    }),
  },
};

export default config;
