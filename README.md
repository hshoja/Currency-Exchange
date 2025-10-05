# Currency-Exchange

a SPA for currency conversions. To get current courses use any open API you can find.

The application consist of two pages:

    * Converter from one currency to another;
    * Page with current exchange rates;

it also has:

    * Tests;
    * Application performance 
       - [*] lazy loading and suspense
       - [*] use callback and memo
       - [*] checked by profiler
       - [-] cache is not needed


 it uses:

    * React
    * Functional components
    * hooks
    * react context as store
    * react-router for routing;
    * Material UI
    * Test-Library/React

## Prerequietes 
create a free account on https://app.freecurrencyapi.com/dashboard and add REACT_APP_CURRENCY_API_KEY to .env file

## Scripts

- `npm start` - Start development server
- `npm test` - Run tests with coverage
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run cypress:open` - Open Cypress for E2E testing

