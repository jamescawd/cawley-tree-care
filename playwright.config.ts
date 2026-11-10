import { defineConfig, devices } from '@playwright/test';

/**
 * Tests run against the production build (`astro preview`), not the dev
 * server, so they check exactly what will be deployed.
 */
const PORT = 4322;
/** Second build with sample (fake) tracking IDs, for the consent tests only. */
const TRACKING_PORT = 4323;
const TRACKING_ENV = [
  'ASTRO_OUT_DIR=dist-tracking',
  'PUBLIC_GA4_ID=G-TEST000001',
  'PUBLIC_GOOGLE_ADS_ID=AW-123456789',
  'PUBLIC_GOOGLE_ADS_QUOTE=quoteLabel01',
  'PUBLIC_GOOGLE_ADS_CALL=callLabel01',
  'PUBLIC_META_PIXEL_ID=1234567890123456',
].join(' ');

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
  testIgnore: 'tracking.spec.ts',
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
    {
      name: 'tracking-mobile',
      testMatch: 'tracking.spec.ts',
      testIgnore: [],
      use: {
        ...devices['Pixel 7'],
        viewport: { width: 360, height: 780 },
        baseURL: `http://localhost:${TRACKING_PORT}`,
      },
    },
    {
      name: 'tracking-desktop',
      testMatch: 'tracking.spec.ts',
      testIgnore: [],
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 900 },
        baseURL: `http://localhost:${TRACKING_PORT}`,
      },
    },
  ],
  webServer: [
    {
      command: `pnpm astro preview --port ${PORT} --ignore-lock`,
      url: `http://localhost:${PORT}/styleguide`,
      reuseExistingServer: !process.env.CI,
    },
    {
      command: `${TRACKING_ENV} pnpm astro build && ${TRACKING_ENV} pnpm astro preview --port ${TRACKING_PORT} --ignore-lock`,
      url: `http://localhost:${TRACKING_PORT}/styleguide`,
      reuseExistingServer: !process.env.CI,
      timeout: 240_000,
    },
  ],
});
