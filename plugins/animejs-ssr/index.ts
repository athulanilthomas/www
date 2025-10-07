import { resolve } from "path";
import type { Plugin } from 'vite'

const POLYFILL_ID = 'animejs';
const POLYFILL_PATH = resolve(__dirname, './polyfill.server.ts')

export default function animeSSR(): Plugin {
  return {
    name: 'vite-plugin-anime-sync',
    resolveId(source, _, { ssr }) {
        if (source === POLYFILL_ID) {
            return { id: ssr ? POLYFILL_PATH : source }
        }
        return null
    }
  }
}