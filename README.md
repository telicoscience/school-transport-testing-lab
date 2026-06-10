# School Transport Testing Lab

A learning-focused project designed to practice frontend testing with **Jest**, **React Testing Library**, and **Cypress**.

The goal is not to build a production-grade school transportation system. The goal is to create a realistic application that serves as a testing laboratory where different testing techniques, strategies, and tools can be practiced and documented.

---

## Project Goal

This repository exists to help practice:

- Unit Testing with Jest
- Component Testing with React Testing Library
- End-to-End Testing with Cypress
- Test organization and maintenance
- Test coverage analysis
- Mocking and stubbing
- API interception
- CI/CD integration using GitHub Actions

Every implemented feature should contribute to learning one or more testing techniques.

---

## Tech Stack

- React
- TypeScript
- Vite
- Jest
- React Testing Library
- Cypress
- GitHub Actions

---

## Planned Application Features

The application domain is intentionally simple.

- Dashboard
- Student Management
- Route Management
- Incident Management

These features exist only to provide realistic scenarios for automated tests.

---

## Project Architecture

```txt
school-transport-testing-lab/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── cypress/
│   ├── e2e/
│   │   ├── dashboard.cy.ts
│   │   ├── students.cy.ts
│   │   ├── routes.cy.ts
│   │   └── occurrences.cy.ts
│   │
│   ├── fixtures/
│   │   ├── students.json
│   │   ├── routes.json
│   │   └── occurrences.json
│   │
│   └── support/
│       ├── commands.ts
│       └── e2e.ts
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── layout/
│   ├── services/
│   ├── utils/
│   ├── data/
│   ├── tests/
│   ├── App.tsx
│   └── main.tsx
│
├── jest.config.ts
├── cypress.config.ts
├── package.json
└── README.md
```

---

# Roadmap

## Sprint 0 — Setup and Documentation

### Status

Completed

### Tasks

- [x] Create repository
- [x] Create project structure
- [x] Configure React + TypeScript + Vite
- [x] Configure Jest
- [x] Configure React Testing Library
- [x] Configure Cypress
- [x] Configure GitHub Actions
- [x] Create README
- [x] Translate README to English

---

## Sprint 1 — Jest Foundations

### Status

In progress

### Tasks

- [x] Create filterStudentsByName()
- [ ] Create filterStudentsByStatus()
- [ ] Create sortStudentsByName()
- [ ] Create countStudentsByStatus()
- [ ] Create formatStudentStatus()
- [ ] Create calculateAttendanceRate()
- [ ] Create unit tests for all utilities
- [ ] Create empty list tests
- [ ] Create invalid value tests
- [ ] Create test.each() examples
- [ ] Create beforeEach() examples
- [ ] Reach 20+ Jest tests
- [ ] Reach 80%+ coverage

---

## Sprint 2 — Validation Testing with Jest

### Status

Not Started

### Tasks

- [ ] Create validateOccurrenceForm()
- [ ] Validate required student
- [ ] Validate required type
- [ ] Validate required description
- [ ] Validate minimum description length
- [ ] Validate required priority
- [ ] Validate allowed status values
- [ ] Create valid form tests
- [ ] Create invalid form tests
- [ ] Create parameterized tests
- [ ] Reach 15+ validation tests

---

## Sprint 3 — React Testing Library

### Status

Not Started

### Tasks

- [ ] Test DashboardCard
- [ ] Test StatusBadge
- [ ] Test StudentTable
- [ ] Test SearchInput
- [ ] Test OccurrenceForm
- [ ] Test click events
- [ ] Test typing events
- [ ] Test validation messages
- [ ] Test empty states
- [ ] Reach 15+ component tests

---

## Sprint 4 — Cypress Fundamentals

### Status

Not Started

### Tasks

- [ ] Create dashboard.cy.ts
- [ ] Create students.cy.ts
- [ ] Create routes.cy.ts
- [ ] Create occurrences.cy.ts
- [ ] Test page navigation
- [ ] Test dashboard rendering
- [ ] Test route rendering
- [ ] Test student rendering
- [ ] Practice cy.visit()
- [ ] Practice cy.contains()
- [ ] Practice cy.url()

---

## Sprint 5 — Cypress User Flows

### Status

Not Started

### Tasks

- [ ] Search students
- [ ] Filter students
- [ ] Open route details
- [ ] Submit occurrence form
- [ ] Test invalid submission
- [ ] Test successful submission
- [ ] Test form reset
- [ ] Reach 10+ E2E tests

---

## Sprint 6 — Fixtures and Custom Commands

### Status

Not Started

### Tasks

- [ ] Create students fixture
- [ ] Create routes fixture
- [ ] Create occurrences fixture
- [ ] Use cy.fixture()
- [ ] Create custom commands
- [ ] Create reusable Cypress helpers
- [ ] Refactor duplicated tests

---

## Sprint 7 — API Mocking and Intercepts

### Status

Not Started

### Tasks

- [ ] Create service layer
- [ ] Mock GET students
- [ ] Mock GET routes
- [ ] Mock GET occurrences
- [ ] Mock POST occurrences
- [ ] Use cy.intercept()
- [ ] Test loading states
- [ ] Test error states
- [ ] Test delayed responses

---

## Sprint 8 — Coverage and CI

### Status

Not Started

### Tasks

- [ ] Run Jest coverage
- [ ] Run Cypress suite
- [ ] Run production build
- [ ] Configure CI workflow
- [ ] Add status badges
- [ ] Document testing strategy

---

## Sprint 9 — Testing Challenges

### Status

Not Started

### Tasks

- [ ] Introduce a bug intentionally
- [ ] Create a failing test
- [ ] Fix the bug
- [ ] Create regression tests
- [ ] Test edge cases
- [ ] Test invalid routes
- [ ] Test API failures
- [ ] Create Testing Notes document

---

## Rule for Repository Maintenance

Whenever a task is completed:

1. Mark the task as completed in this README.
2. Commit the implementation.
3. Commit the README update.
4. Keep sprint progress synchronized with repository status.

The README is the project's source of truth.
