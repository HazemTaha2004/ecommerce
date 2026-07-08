# Contributing to Electro Store

Thank you for your interest in contributing to Electro Store! We welcome contributions to help improve this Angular-based e-commerce platform.

To maintain high code quality and professional standards, please follow these guidelines.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## How Can I Contribute?

### Reporting Bugs
If you find a bug, please open a GitHub Issue and include:
- A clear, descriptive title.
- Steps to reproduce the behavior.
- Expected vs. actual behavior.
- Screenshots or recordings if applicable.
- Your environment details (Angular version, Node.js version, browser details).

### Proposing Enhancements
If you have ideas for new features:
- Open an Issue describing the feature and why it would be useful.
- Participate in community discussion on the proposal.

### Submitting Pull Requests (PRs)
1. Fork the repository and create your branch from `main`.
2. Ensure your code follows the styling and quality standards below.
3. Commit your changes using **Conventional Commits** (see below).
4. Push to your fork and submit a PR to the `main` branch.
5. Provide a clear description of the changes and reference any related issues.

---

## Coding Standards

### Angular Best Practices
- Follow the official [Angular Coding Style Guide](https://angular.io/guide/styleguide).
- Use **Standalone Components** where possible, as introduced in Angular 14+.
- Organize pages under `src/app/pages/` and layouts/components under `src/app/templates/`.
- Ensure proper encapsulation by putting styles in component-specific `.css` files rather than global styles.
- Manage routing declarations cleanly inside `src/app/app.routes.ts`. Avoid routing directly to Services.
- Follow type safety conventions using TypeScript interfaces and avoid using the `any` type when possible.

### HTML & CSS Styling
- Use Bootstrap classes for layout, grids, and components.
- Maintain responsive viewport configurations using Bootstrap break classes (`d-block`, `col-md-6`, etc.).

---

## Commit Messages

We use the [Conventional Commits](https://www.conventionalcommits.org/) format for all commits:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Common Types:
- `feat`: A new user-facing feature.
- `fix`: A bug fix.
- `docs`: Documentation-only changes.
- `style`: Changes that do not affect the meaning of the code (formatting, whitespace).
- `refactor`: A code change that neither fixes a bug nor adds a feature.
- `perf`: A code change that improves performance.
- `test`: Adding or correcting tests.

### Examples:
- `feat(cart): add local storage state persistence`
- `fix(routing): resolve ProductService mapping build failure`
- `docs(readme): add project build walkthrough`

---

## Development Workflow

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local development server:
   ```bash
   npm start
   ```
3. Open `http://localhost:4200` in your browser.
4. Run unit tests to check functionality:
   ```bash
   npm test
   ```
