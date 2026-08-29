import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// `base` is '/' because the site is deployed from the `arman-akash.github.io`
// user-page repo, which publishes at the domain root. If you ever move this to a
// normal project repo, change it to '/<repo-name>/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
