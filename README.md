This repository contains automated tests (TypeScript/Playwright) for Polish and English Ploom websites.

## How to run

To set up and run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Tobbil/monogo-task.git
   cd monogo-task
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment variable**:
   
   Adjust environment variable `LOCALE` inside .env file to choose which locale(s) to run the tests for.

   Example:
   ```bash
   LOCALE=en # Test only English website
   ```
   ```bash
   LOCALE=en,pl # Test English and Polish websites
   ```

   Available locales are defined in `tests/config/localeConfig.ts`
   
5. **Run tests**:

   For specific browser, for example Chromium:
   ```bash
   npx playwright test --project=chromium
   ```
   Run all tests:
   ```bash
   npx playwright test
   ```
   
