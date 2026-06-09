# QA Automation Portfolio — Playwright

![Playwright Tests](https://github.com/onlihernan/qa-automation-playwright-portfolio/actions/workflows/playwright.yml/badge.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![Playwright](https://img.shields.io/badge/Playwright-latest-blueviolet?logo=playwright)

Framework de automatización E2E construido con **Playwright + JavaScript**, aplicando **Page Object Model**, **data-driven testing** y **CI/CD con GitHub Actions**.

Proyecto de portfolio orientado a rol **QA Automation JR**, testeando la aplicación [SauceDemo](https://www.saucedemo.com).

---

## 📂 Estructura del proyecto

```
qa-automation-playwright-portfolio/
├── .github/
│   └── workflows/
│       └── playwright.yml       # Pipeline CI/CD
├── data/
│   ├── loginData.js             # Datos de prueba para login
│   ├── productData.js           # Datos de productos
│   └── userData.js              # Datos de usuarios para checkout
├── pages/
│   ├── loginPage.js             # Page Object: Login
│   ├── inventoryPage.js         # Page Object: Inventario/Productos
│   ├── cartPage.js              # Page Object: Carrito
│   └── checkoutPage.js          # Page Object: Checkout
├── tests/
│   ├── login.spec.js            # Tests de autenticación
│   ├── cart.spec.js             # Tests de carrito
│   └── checkout.spec.js         # Tests de flujo E2E de compra
├── playwright.config.js
└── package.json
```

---

## 🧪 Cobertura de tests

### Login (`login.spec.js`) — 3 casos
| Test | Tipo | Resultado esperado |
|------|------|--------------------|
| Login exitoso con credenciales válidas | Happy path | Redirige al inventario |
| Login con password incorrecto | Negativo | Muestra mensaje de error |
| Login con usuario incorrecto | Negativo | Muestra mensaje de error |

### Carrito (`cart.spec.js`) — 1 caso
| Test | Tipo | Resultado esperado |
|------|------|--------------------|
| Validar producto agregado al carrito | Funcional | Nombre, precio y cantidad correctos |

### Checkout (`checkout.spec.js`) — 2 casos (data-driven)
| Test | Tipo | Resultado esperado |
|------|------|--------------------|
| Flujo E2E de compra — Juan Perez | E2E | Compra completada exitosamente |
| Flujo E2E de compra — Ana Gomez | E2E | Compra completada exitosamente |

**Total: 6 tests automatizados** cubriendo login, carrito y flujo completo de compra.

---

## 🏗️ Decisiones técnicas

### Page Object Model (POM)
Cada pantalla de la aplicación tiene su propia clase en `/pages`. Esto separa la lógica de navegación/interacción de los tests, haciendo el código reutilizable y fácil de mantener. Si cambia un selector, se actualiza en un solo lugar.

### Data-Driven Testing
Los datos de prueba viven en `/data`, separados de los tests. El test de checkout itera sobre múltiples usuarios con `forEach`, ejecutando el mismo flujo con datos distintos sin duplicar código.

### Selectores — criterio profesional
Se priorizaron selectores robustos siguiendo este orden:
1. **Roles y accesibilidad** — `getByRole('button', { name: 'Add to cart' })`
2. **IDs únicos** — `#user-name`, `#login-button`, `#checkout`
3. **CSS estables y semánticos** — `.inventory_item`, `.complete-header`

Se evitaron XPath y selectores frágiles basados en posición o estructura del DOM.

### CI/CD con GitHub Actions
Los tests corren automáticamente en cada `push` y `pull request` a `main`. El pipeline instala dependencias, instala los browsers de Playwright y ejecuta la suite completa. El badge en este README refleja el estado en tiempo real.

---

## ▶️ Cómo ejecutar localmente

**Requisitos:** Node.js 18+

```bash
# Clonar el repositorio
git clone https://github.com/onlihernan/qa-automation-playwright-portfolio.git
cd qa-automation-playwright-portfolio

# Instalar dependencias
npm install

# Instalar browsers de Playwright
npx playwright install

# Ejecutar todos los tests
npx playwright test

# Ejecutar en modo UI (visual)
npx playwright test --ui

# Ver reporte HTML
npx playwright show-report
```

---

## 🔧 Stack tecnológico

| Herramienta | Uso |
|-------------|-----|
| [Playwright](https://playwright.dev/) | Framework de automatización E2E |
| JavaScript (ES6+) | Lenguaje de implementación |
| Node.js | Runtime |
| GitHub Actions | CI/CD pipeline |
| SauceDemo | Aplicación bajo prueba |

---

## 👤 Sobre este proyecto

Portfolio personal de automatización QA desarrollado como parte de un proceso de formación orientado a rol **QA Automation JR**.

Cubre los pilares de la automatización moderna: estructura escalable con POM, separación de datos de prueba, selectores robustos y pipeline de integración continua.

**Próximos pasos planeados:**
- [ ] API Testing con Playwright (`/api-tests`)
- [ ] Fixtures para manejo de autenticación compartida
- [ ] Mocking de respuestas de API
- [ ] Ampliar cobertura de casos negativos

---

*Aplicación bajo prueba: [SauceDemo](https://www.saucedemo.com) — entorno de práctica para automatización QA.*
