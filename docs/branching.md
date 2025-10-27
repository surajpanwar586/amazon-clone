# Branching Strategy

This document describes the branching strategy used in this repository.

## Branches

### `main`

The `main` branch is the production branch. It should always be stable and deployable.

### `develop`

The `develop` branch is the main development branch. All feature branches are created from this branch and merged back into it.

### `feature/*`

Feature branches are used to develop new features. They are created from the `develop` branch and should be named `feature/<feature-name>`.

### `hotfix/*`

Hotfix branches are used to fix critical bugs in production. They are created from the `main` branch and should be named `hotfix/<fix-name>`.

### `release/*`

Release branches are used to prepare for a new production release. They are created from the `develop` branch and should be named `release/<version-number>`.