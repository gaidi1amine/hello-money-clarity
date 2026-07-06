import { readFile } from 'node:fs/promises';

export const prerender = true;

export async function GET() {
  const config = await readFile(new URL('../../public/admin/config.yml', import.meta.url), 'utf-8');

  return new Response(config, {
    headers: {
      'Content-Type': 'text/yaml; charset=utf-8'
    }
  });
}
