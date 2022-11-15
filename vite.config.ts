import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      experimental: {
        inspector: {
          holdMode: true,
          showToggleButton: 'always',
          toggleButtonPos: 'bottom-left',
        },
      }
    })
  ]
})
