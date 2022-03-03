/**
 * @type {import('@sveltejs/kit').Handle}
 */
export async function handler({ event, resolve }) {
  return resolve(event, {
    ssr: false,
  });
}
