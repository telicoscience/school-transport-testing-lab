# School Transport Testing Lab

A modern React + TypeScript web interface designed to practice automated testing with **Jest**, **React Testing Library**, and **Cypress**.

The project simulates a school transportation monitoring dashboard with students, routes, operational indicators, and incident management. Its main goal is to work as both a technical learning lab and a portfolio-ready frontend project.

## Purpose

This project demonstrates the ability to:

- structure a frontend application using React and TypeScript;
- separate business logic from the user interface layer;
- write unit tests with Jest;
- test React components with React Testing Library;
- validate real user flows with Cypress;
- organize technical documentation clearly;
- run automated tests in a CI pipeline with GitHub Actions.

## Tech Stack

- React
- TypeScript
- Vite
- Jest
- React Testing Library
- Cypress
- GitHub Actions

## Features

- Operational dashboard with key metrics.
- Student list with search and status filtering.
- Route details page.
- Incident registration form with validation.
- Open incidents list.
- Modern SaaS-style visual layout.

## Testing Strategy

The project is structured to practice different testing layers in a realistic frontend application.

### Jest

Jest is used to test business rules, pure functions, formatters, filters, and validation logic.

Main files:

```txt
src/tests/filters.test.ts
src/tests/validators.test.ts
src/tests/formatters.test.ts
```

### React Testing Library

React Testing Library is used to test components through user-visible behavior instead of implementation details.

Main files:

```txt
src/tests/DashboardCard.test.tsx
src/tests/OccurrenceForm.test.tsx
```

### Cypress

Cypress is used to test complete user flows directly in the browser.

Main files:

```txt
cypress/e2e/dashboard.cy.ts
cypress/e2e/students.cy.ts
cypress/e2e/occurrences.cy.ts
cypress/e2e/routes.cy.ts
```

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The application runs at:

```txt
http://127.0.0.1:5173
```

## Run Unit Tests

```bash
npm run test
```

## Run Test Coverage

```bash
npm run test:coverage
```

## Open Cypress

```bash
npm run cy:open
```

## Run Cypress in Headless Mode

```bash
npm run test:e2e
```

## Run the Full Verification Suite

```bash
npm run check
```

## MVP Completion Criteria

- [x] Dashboard with operational indicators.
- [x] Student list with search.
- [x] Status-based filtering.
- [x] Incident registration form.
- [x] Route details page.
- [x] Unit tests with Jest.
- [x] Component tests with React Testing Library.
- [x] End-to-end tests with Cypress.
- [x] CI workflow with GitHub Actions.

## Future Improvements

- Add a mock authentication flow.
- Add MSW to simulate API requests.
- Add a visual test coverage report.
- Deploy the application on Vercel.
- Record a short GIF showing the automated tests running.

## Portfolio Value

This project shows practical frontend testing skills in a domain-inspired application instead of a generic demo. It highlights automated testing, UI organization, validation logic, user-flow coverage, and continuous integration in a single repository.
