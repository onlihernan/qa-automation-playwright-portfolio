# QA Automation Portfolio — Playwright

![Playwright Tests](https://github.com/onlihernan/qa-automation-playwright-portfolio/actions/workflows/playwright.yml/badge.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![Playwright](https://img.shields.io/badge/Playwright-latest-blueviolet?logo=playwright)

End-to-end automation framework built with **Playwright + JavaScript**, applying **Page Object Model**, **BasePage inheritance**, **custom fixtures**, **data-driven testing**, and **CI/CD with GitHub Actions**.

Portfolio project targeting a **Junior QA Automation** role, testing the [SauceDemo](https://www.saucedemo.com) application.

---

## 📂 Project Structure

```
qa-automation-playwright-portfolio/
├── .github/
│   └── workflows/
│       └── playwright.yml              # CI/CD pipeline
├── data/
│   ├── loginData.js                    # Login test data
│   ├── productData.js                  # Product data
│   └── userData.js                     # User data for checkout
├── pages/
│   ├── basePage.js                     # Base class — shared methods and setup
│   ├── loginPage.js                    # Page Object: Login
│   ├── inventoryPage.js                # Page Object: Inventory
│   ├── cartPage.js                     # Page Object: Cart
│   └── checkoutPage.js                 # Page Object: Checkout
├── tests/
│   ├── api-tests/
│   │   └── posts.api.spec.js           # API tests — JSONPlaceholder
│   ├── login.spec.js                   # Authentication tests
│   ├── cart.spec.js                    # Cart tests
│   ├── checkout.spec.js                # E2E purchase flow tests
│   └── checkout.negative.spec.js      # Negative cases — checkout validation
├── fixtures.js                         # Custom fixtures — shared login state
├── playwright.config.js
└── package.json
```

---

## 🧪 Test Coverage

### Login (`login.spec.js`) — 3 cases
| Test | Type | Expected result |
|------|------|-----------------|
| Successful login with valid credentials | Happy path | Redirects to inventory |
| Login with wrong password | Negative | Displays error message |
| Login with wrong username | Negative | Displays error message |

### Cart (`cart.spec.js`) — 1 case
| Test | Type | Expected result |
|------|------|-----------------|
| Validate product added to cart | Functional | Correct name, price and quantity |

### Checkout (`checkout.spec.js`) — 2 cases (data-driven)
| Test | Type | Expected result |
|------|------|-----------------|
| E2E purchase flow — Juan Perez | E2E | Purchase completed successfully |
| E2E purchase flow — Ana Gomez | E2E | Purchase completed successfully |

### Checkout Negative Cases (`checkout.negative.spec.js`) — 3 cases
| Test | Type | Expected result |
|------|------|-----------------|
| Submit form without first name | Negative | Displays error message |
| Submit form without last name | Negative | Displays error message |
| Submit form without postal code | Negative | Displays error message |

### API Tests (`posts.api.spec.js`) — 4 cases
| Test | Type | Expected result |
|------|------|-----------------|
| GET /posts — returns 100 posts | Functional | Status 200, 100 items |
| GET /posts/1 — returns correct post | Functional | Status 200, correct data |
| POST /posts — creates new post | Functional | Status 201, correct body |
| GET /posts/999 — non-existent resource | Negative | Status 404 |

**Total: 13 automated tests** covering authentication, cart, E2E flows, negative cases and API testing.

---

## 🏗️ Technical Decisions

### Page Object Model (POM) + BasePage Inheritance
Each screen has its own class under `/pages`. All page objects extend a `BasePage` class that centralizes shared setup (`this.page`) and common methods (`waitForPageLoad`, `getTitle`, `navigateTo`). This avoids repetition and makes the codebase easier to scale — adding a new page object takes seconds.

### Custom Fixtures
A `loggedInPage` fixture in `fixtures.js` handles the login flow once and shares the authenticated state across all tests that need it. This eliminates repeated login setup in every test, keeps tests cleaner, and improves execution speed.

### Data-Driven Testing
Test data lives in `/data`, decoupled from the tests. The checkout test iterates over multiple users with `forEach`, running the same flow with different inputs without duplicating code.

### Negative Test Coverage
Beyond happy path testing, the suite includes negative cases for both UI flows (missing form fields) and API calls (non-existent resources). This validates that the application handles errors correctly, not just success scenarios.

### Selectors — professional criteria
Selectors were chosen following this priority order:
1. **Role and accessibility** — `getByRole('button', { name: 'Add to cart' })`
2. **Unique IDs** — `#user-name`, `#login-button`, `#checkout`
3. **Stable semantic CSS** — `.inventory_item`, `.complete-header`

XPath and fragile position-based selectors were avoided.

### CI/CD with GitHub Actions
Tests run automatically on every `push` and `pull request` to `main`. The pipeline installs dependencies, installs Playwright browsers, and runs the full test suite. Retries are configured for flaky test resilience in CI. The badge at the top of this README reflects the real-time pipeline status.

---

## ▶️ Running Locally

**Requirements:** Node.js 18+

```bash
# Clone the repository
git clone https://github.com/onlihernan/qa-automation-playwright-portfolio.git
cd qa-automation-playwright-portfolio

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run all tests
npx playwright test

# Run in UI mode
npx playwright test --ui

# View HTML report
npx playwright show-report
```

---

## 🔧 Tech Stack

| Tool | Purpose |
|------|---------|
| [Playwright](https://playwright.dev/) | E2E automation framework |
| JavaScript (ES6+) | Implementation language |
| Node.js | Runtime |
| GitHub Actions | CI/CD pipeline |
| SauceDemo | Application under test |
| JSONPlaceholder | API testing practice endpoint |

---

## 👤 About This Project

Personal QA automation portfolio developed as part of a training path targeting a **Junior QA Automation** role.

Covers the pillars of modern automation: scalable POM structure with BasePage inheritance, custom fixtures for shared state, separated test data, robust selectors, negative test coverage, API testing, and a continuous integration pipeline.

**Planned next steps:**
- [ ] API response mocking with `page.route()`
- [ ] Additional fixtures for different user roles
- [ ] Expanded API test coverage

---

*Application under test: [SauceDemo](https://www.saucedemo.com) — practice environment for QA automation.*
