import { defineConfig, devices } from '@playwright/test';

/**
 * Tests run against the production build (`astro preview`), not the dev
 * server, so they check exactly what will be deployed.
 */
const PORT = 4322;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'on-first-retry',
  },
  projects: [
    // Mobile-first: the smallest common phone is tested first.
    { name: 'mobile', use: { ...devices['Pixel 7'], viewport: { width: 360, height: 780 } } },
    {
      name: 'tablet',
      use: { ...devices['Desktop Chrome'], viewport: { width: 820, height: 1180 } },
    },
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } },
    },
  ],
  webServer: {
    command: `pnpm astro preview --port ${PORT} --ignore-lock`,
    url: `http://localhost:${PORT}/styleguide`,
    reuseExistingServer: !process.env.CI,
  },
});
