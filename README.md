# Electro Store

An enterprise-ready, responsive e-commerce web application built using Angular 18 (with SSR/Prerendering), Bootstrap 5, and TypeScript. This project integrates standalone components, type-safe routing patterns, and real-time product parsing via FakeStoreAPI.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Angular](https://img.shields.io/badge/Angular-18-red.svg?logo=angular)](https://angular.io)

---

## 🚀 Live Demo

👉 **[Launch Live Demo (GitHub Pages / Vercel Placeholder)](#)**

---

## 📸 Screenshots & Previews

*Note: Capturing and adding high-resolution screenshots here is highly recommended. Suggested views include:*
- **Desktop Shop Page - Grid Catalog View**
- **Mobile Responsive Checkout and Form Validation**
- **User Authentication Screens**

---

## 🌟 Key Features

- **Angular 18 SSR & Prerendering**: Enabled server-side rendering (SSR) via `@angular/ssr` and Express to optimize first-contentful paint (FCP) and maximize SEO search crawling indexability.
- **Standalone Component Design**: Built completely using Angular standalone components, eliminating the overhead of classic `NgModule` configurations and making components lightweight and easily reusable.
- **E-Commerce Client Interface**:
  - **Dynamic Catalog Listings**: Render product categories, brand metrics, and sale banners.
  - **Interactive Sorting & Filtering**: Filter products programmatically based on user sliders.
  - **Checkout Form & Validation**: Complete billing address forms structured with Angular `FormGroup` validation (`FormControl`, `Validators`).
  - **Login & Register Views**: Built-in credential validation flows.
- **Service-Oriented Architecture**: Decoupled HTTP API integrations into isolated Injectable state services (`ProductService` querying `https://fakestoreapi.com/products`).
- **Responsive Bootstrap Layout**: Responsive layouts and grid alignments conforming to mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

### Frontend Core
- ![Angular](https://img.shields.io/badge/Angular-18.2.8-DD0031?style=flat-square&logo=angular&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square&logo=typescript&logoColor=white)
- ![RxJS](https://img.shields.io/badge/RxJS-7.8-e10079?style=flat-square&logo=reactivex&logoColor=white)

### Styling & Layout
- ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
- **FontAwesome** (Store UI icons)

### Backend & SSR Engine
- ![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)
- ![Express](https://img.shields.io/badge/Express-4.18-000000?style=flat-square&logo=express&logoColor=white)

---

## 📂 Project Structure

```text
electro-store/
├── .vscode/               # VSCode settings configurations
├── css/
│   └── ...                # Additional layout overrides
├── src/
│   ├── app/
│   │   ├── pages/         # Standalone Page Components (checkout, home, store, etc.)
│   │   ├── services/      # Injectable business logic & REST API providers
│   │   ├── templates/     # Reusable layout fragments (navbar, footer, header, etc.)
│   │   ├── app.component.ts
│   │   ├── app.config.ts  # Routing and SSR application bootstrap
│   │   └── app.routes.ts  # Declared routing endpoints
│   ├── assets/            # Static image assets and banners
│   ├── index.html         # Document shell (Bootstrap scripts + Google Fonts)
│   └── main.ts            # Entry bootstrap configurations
├── angular.json           # Angular CLI build & output properties
├── package.json           # Scripts and package requirements
├── server.ts              # Express-based Node server for Angular SSR
└── tsconfig.json          # TypeScript configurations
```

---

## ⚙️ Installation & Run Guidelines

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+) and [Angular CLI](https://angular.dev/tools/cli) installed globally.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/HazemTaha/electro-store.git
   cd electro-store
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm start
   ```
   Open your browser to `http://localhost:4200` to view the running storefront.

4. **Production Build & Server-Side Rendering (SSR)**:
   Build the project using production optimization:
   ```bash
   npm run build
   ```
   Start the compiled Node server to serve server-rendered routes:
   ```bash
   npm run serve:ssr:electro-store
   ```

---

## 🧑‍💻 Recruiter-Friendly Insight

### The Problem It Solves
Single Page Applications (SPAs) often suffer from slow initial paint and weak SEO profile crawls. This project demonstrates **Angular 18 SSR (Server-Side Rendering)** and hydration, where pages are parsed into flat HTML on the Node Express server before transmission, ensuring search engine bots index store catalogues immediately while providing lightning-fast rendering.

### Architectural Highlights
- **Decoupled API Logic**: Separation of concern rules are enforced by encapsulating HTTP client queries within custom Angular `@Injectable` services (`ProductService`), rather than fetching raw data inside views.
- **Reactive Forms Engine**: Checkout validator rules are handled asynchronously in the controller logic, allowing for instant user validation feedback without triggering full page redraws.
- **Standalone Module-less Loading**: Leverages Angular standalone routing paradigms, which speeds up startup times and ensures lazy-loading routes only load code as needed.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
