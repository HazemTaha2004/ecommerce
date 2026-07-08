# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-07-08

### Added
- Created clean Git community standards docs: `LICENSE` (MIT), `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `SUPPORT.md`, and `CHANGELOG.md`.
- Added high-quality developer and recruiter-focused `README.md`.

### Changed
- Reorganized directory structure by moving the project files out of the deeply nested `v4/p1/my-first-project` folder directly to the `electro-store/` root.
- Renamed project key identifier from boilerplate `my-first-project` to `electro-store` in `package.json` and `angular.json`.
- Corrected template folder typo by renaming `src/app/templet` to `src/app/templates`.
- Updated all relative component imports referencing layout layouts from `templet` to `templates`.
- Fixed compiler build issue in `src/app/app.routes.ts` by commenting out the incorrect routing target for `/Product` (pointing directly to `ProductService` instead of a Component class), adding developer TODO guidelines.

### Removed
- Removed duplicate config file `(1).editorconfig`.
- Removed duplicate source entry file `src/main(1).ts`.
- Cleaned up empty folders `v4` and `p1`.
