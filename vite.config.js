import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import reactJsx from 'vite-react-jsx'
import pkg from './package.json'
// https://vitejs.dev/config/
export default defineConfig({
  base: (new URL(pkg.homepage)).pathname,
  server: {
    port: 3010
  },

  plugins: [reactJsx(), reactRefresh()],
})
