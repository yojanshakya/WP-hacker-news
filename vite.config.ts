/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  return {
    plugins: [react()],
    envPrefix: "APP_",
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/config/setupTests.ts"],
      coverage: {
        reporter: ["text","html"],
        provider: "c8"
      }
    },
  }
})
