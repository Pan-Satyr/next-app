# Cypress Test Automation Showcase for Next.js App
This repository contains a forked Next.js project enhanced with a small test suite of **end-to-end (E2E) Cypress tests**, created as part of a test engineering learning project.

## 🔍 Purpose
The goal of this repository is to demonstrate the application of Cypress for automated testing in a modern web application. All test cases were written by me to validate some functionalities, UI behaviors in a real-world application structure.

> 🛠️ Original app code was provided as part of a Cypress course from 'freeCodeCamp.org': https://www.youtube.com/watch?v=u8vMu7viCm8. My work focuses entirely on building the test suite.

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Testing**: [Cypress](https://www.cypress.io/)
- **Language**: JavaScript
- **Node.js + npm**

---

## 🧪 Cypress Test Coverage

The Cypress tests cover multiple features and behaviors, including:

- ✅ Multi-page navigation flow
- ✅ Form interactions and validations
- ✅ Intercepts and mock API calls using `cy.intercept()`
- ✅ Component-level behaviors (grudges list interactions)
- ✅ DOM assertions with `cy.should()`, `cy.within()`, and custom selectors
- ✅ Use of `data-testid` attributes for stability

Tests are located in:
cypress/
├── e2e/ # Main test files
├── fixtures/ # Test data (e.g., JSON fixtures)
├── support/ # Custom commands and setup
└── cypress.config.js # Cypress config file

---

## 🛠️ Setup and Run

### Clone the repo
```bash
git clone https://github.com/Pan-Satyr/next-app.git
cd next-app
```

### Install dependencies
```bash
npm install
```

###Run the development server
```bash
npm run dev
```
App will be available at: http://localhost:3000

###Run Cypress tests
Open the Cypress Test Runner ina separate terminal:
```bash
npx cypress open
```

###Run tests in headless mode:
```bash
npx cypress run
```

Attribution
Original app was built using `create-next-app` and sourced from a Cypress testing course:  
[freeCodeCamp.org - Learn Cypress](https://www.youtube.com/watch?v=u8vMu7viCm8)

Next.js app ownership belongs to the course instructor.  
Test cases and test design in this repo are authored and maintained by **Pan-Satyr**.
