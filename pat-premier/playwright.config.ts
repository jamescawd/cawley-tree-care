import { defineConfig, devices } from '@playwright/test';

/** Tests run against the production build (`astro preview`). */
const PORT = 4401;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: { baseURL: `http://localhost:${PORT}`, trace: 'off' },
  projects: [
    { name: 'mobile', use: { ...devices['Pixel 7'], viewport: { width: 360, height: 780 } } },
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } } },
  ],
  webServer: {
    command: `pnpm exec astro preview --port ${PORT} --ignore-lock`,
    port: PORT,
    reuseExistingServer: !process.env.CI,
  },
});
