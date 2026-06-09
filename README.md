# QA Automation Portfolio — Playwright

![Playwright Tests](https://github.com/onlihernan/qa-automation-playwright-portfolio/actions/workflows/playwright.yml/badge.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![Playwright](https://img.shields.io/badge/Playwright-latest-blueviolet?logo=playwright)

End-to-end automation framework built with **Playwright + JavaScript**, applying **Page Object Model**, **data-driven testing**, and **CI/CD with GitHub Actions**.

Portfolio project targeting a **Junior QA Automation** role, testing the [SauceDemo](https://www.saucedemo.com) application.

---

## 📂 Project Structure

```
qa-automation-playwright-portfolio/
├── .github/
│   └── workflows/
│       └── playwright.yml       # CI/CD pipeline
├── data/
│   ├── loginData.js             # Login test data
│   ├── productData.js           # Product data
│   └── userData.js              # User data for checkout
├── pages/
│   ├── loginPage.js             # Page Object: Login
│   ├── inventoryPage.js         # Page Object: Inventory
│   ├── cartPage.js              # Page Object: Cart
│   └── checkoutPage.js          # Page Object: Checkout
├── tests/
│   ├── login.spec.js            # Authentication tests
│   ├── cart.spec.js             # Cart tests
│   └── checkout.spec.js         # E2E purchase flow tests
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

**Total: 6 automated tests** covering login, cart and full purchase flow.

---

## 🏗️ Technical Decisions

### Page Object Model (POM)
Each screen has its own class under `/pages`, separating navigation and interaction logic from the tests. This makes the code reusable and easy to maintain — if a selector changes, it's updated in one place.

### Data-Driven Testing
Test data lives in `/data`, decoupled from the tests. The checkout test iterates over multiple users with `forEach`, running the same flow with different inputs without duplicating code.

### Selectors — professional criteria
Selectors were chosen following this priority order:
1. **Role and accessibility** — `getByRole('button', { name: 'Add to cart' })`
2. **Unique IDs** — `#user-name`, `#login-button`, `#checkout`
3. **Stable semantic CSS** — `.inventory_item`, `.complete-header`

XPath and fragile position-based selectors were avoided.

### CI/CD with GitHub Actions
Tests run automatically on every `push` and `pull request` to `main`. The pipeline installs dependencies, installs Playwright browsers, and runs the full test suite. The badge at the top of this README reflects the real-time pipeline status.

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

---

## 👤 About This Project

Personal QA automation portfolio developed as part of a training path targeting a **Junior QA Automation** role.

Covers the pillars of modern automation: scalable POM structure, separated test data, robust selectors, and a continuous integration pipeline.

**Planned next steps:**
- [ ] API Testing with Playwright (`/api-tests`)
- [ ] Fixtures for shared authentication state
- [ ] API response mocking
- [ ] Expanded negative test coverage

---

*Application under test: [SauceDemo](https://www.saucedemo.com) — practice environment for QA automation.*
