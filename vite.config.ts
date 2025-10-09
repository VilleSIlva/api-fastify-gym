import { defineConfig } from 'vitest/config'
import tsConfig from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsConfig(),
  ],
})
