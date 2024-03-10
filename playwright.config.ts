import { defineConfig, devices } from '@playwright/test';
require(`dotenv`).config();

export default defineConfig({
  testDir: `./tests`,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: undefined,
  globalTimeout: 60 * 60 * 1000,
  reporter: `html`,
  use: {
    baseURL: `https://skleptest.pl`,
    trace: `on`,
  },
  projects: [
    {
      name: `chromium`,
      use: { ...devices[`Desktop Chrome`] },
    },

    {
      name: `firefox`,
      use: { ...devices[`Desktop Firefox`] },
    },

    {
      name: `webkit`,
      use: { ...devices[`Desktop Safari`] },
    },
  ]
});