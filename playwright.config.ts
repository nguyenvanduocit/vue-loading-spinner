import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  webServer: {
    command: 'bunx vite --config tests/e2e/vite.config.ts --port 5199 --strictPort',
    port: 5199,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:5199',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
})
