# Changelog

All notable changes to this project will be documented in this file.

The format is inspired by Keep a Changelog and this project adheres to Semantic Versioning.

---

## [Unreleased]

## [0.3.1] - 2026-03-03

### Fixed

- Corrigido problema onde o botão de exclusão não era exibido em dispositivos mobile.
- Ajustado comportamento de edição do card para funcionar corretamente em dispositivos touch (substituído `onDoubleClick` por `onClick`).
- Garantido suporte adequado a navegação por teclado (Enter e Space ativam edição).

### Added

- Adicionado favicon personalizado ao projeto.

## [0.3.0] - 2026-03-03

### Added

- Introduced visual identity inspired by Game of Thrones
- Added custom font integration (GameOfThrones + CormorantGaramond)
- Created centralized `theme.css` with design tokens (colors, spacing, radius, shadows, transitions)

### Changed

- Refactored global styles to use design tokens
- Standardized card geometry using `aspect-ratio`
- Improved hover behavior with `(hover: hover)` media query
- Enhanced mobile-first responsiveness using `clamp()`
- Improved accessibility (focus-visible states and reduced-motion support)

### Internal

- Introduced spacing token system (`spacing-sm`, `md`, `lg`, `xl`)
- Consolidated shadow and transition values into theme tokens

## [0.2.0] - 2026-03-02

### Added

- Dynamic area management (create, edit, delete)
- Inline editing for area titles
- Hover-based deletion for areas

### Changed

- Refactored area state to use structured `Area` type

### Internal

- Disabled base `no-unused-vars` rule to avoid conflict with TypeScript ESLint
- Improved component separation (EditableAreaCard extraction)

## [0.1.2] - 2026-02-26

### Added

- Configured ESLint (Flat Config)
- Added @typescript-eslint parser and rules
- Added React Hooks and React Refresh plugins
- Configured Prettier
- Integrated ESLint with Prettier
- Added lint and format scripts
- Updated .gitignore
- Committed pnpm-lock.yaml

## [0.1.1] - 2026-02-26

### Added

- Introduced CHANGELOG for structured version tracking
- Established release promotion workflow (`develop` → `main`)
- Applied Semantic Versioning strategy

---

## [0.1.0] - 2026-02-26

### Added

- Initial project structure
- README with purpose, roadmap, and architectural direction
- Branching strategy (main/develop workflow)
- Versioning baseline established
