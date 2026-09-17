import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only */
  forbidOnly: !!process.env.CI,

  workers: process.env.CI ? 1 : undefined,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Reporter to use */
  reporter: [['html'], ['list']],

  /* Shared settings for all projects */
  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* Run tests only in Chrome */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
