# Cypress Test Automation Showcase for Next.js App

### Why This Project Exists

This repository represents my first hands-on exploration of Cypress for end-to-end (E2E) test automation in a modern web application.
The application itself is a simple Next.js project provided as part of a Cypress training course — my focus here was not on developing application features, but on learning how to design, structure, and run automated tests.

---

## Credits

The original Next.js app was created as part of a **freeCodeCamp.org** Cypress course:

> **Course**: [Learn Cypress](https://www.youtube.com/watch?v=u8vMu7viCm8)  
> **Author**: [@coderyan](https://www.youtube.com/@coderyan)

The app structure and basic functionality come from the course.  
All test cases, test design, and Cypress setup in this repository were completed by completing the tutorial, as part of my QA automation learning process.

---

## Test Coverage

The Cypress suite in this project validates **basic navigation, UI interactions, and form behaviors**.

- **Multi-page navigation**: Verifying URL changes and navigation link integrity.
- **Form interactions and validations**: Positive and negative test flows.
- **Mock API calls with `cy.intercept()`**: Controlling backend responses for predictable tests.
- **Component-level behavior testing**: E.g., adding/removing items in a “Grudges” list.
- **Scoped DOM assertions**: Using `.within()` and targeted selectors.
- **Stable locators**: `data-testid` attributes to avoid brittle selectors.

**Test Files**:
| Test File | Purpose |
| -------------------- | ------- |
| `examples.cy.js` | Multi-page navigation, API intercept example, and “Grudges” component behavior |
| `forms.cy.js` | Subscription form validations and error handling |
| `fundamentals.cy.js` | Accordion component behavior and content toggling |

---

## Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/Pan-Satyr/next-app.git
cd next-app
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Visit: http://localhost:3000

### 3. Run Cypress tests

### Open Cypress Test Runner:

```bash
npx cypress open
```

### Project structure

```plaintext
├── app/               # Next.js application pages
├── cypress/           # Cypress E2E testing
│   ├── e2e/           # Test specs
│   ├── fixtures/      # Static test data
│   ├── support/       # Custom commands and setup
├── public/            # Static assets
├── cypress.config.js  # Cypress configuration
├── package.json
├── README.md

```

### Author

Alonso Ramirez - Test Analyst
