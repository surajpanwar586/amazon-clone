[![CI](https://github.com/surajpanwar586/amazon-clone/actions/workflows/ci.yml/badge.svg)](https://github.com/surajpanwar586/amazon-clone/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js version](https://img.shields.io/badge/node.js-v20.x-green.svg)](https://nodejs.org/en/)

# Amazon Clone - MERN

## Setup and Run

### Prerequisites

- Node.js
- npm

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Install dependencies for the root, frontend, and backend:
    ```bash
    npm run install:all
    ```

### Running the application

#### Frontend

-   Start the frontend application:
    ```bash
    npm run start:frontend
    ```
-   Run the frontend in development mode:
    ```bash
    cd frontend && npm run dev
    ```

#### Backend

-   Start the backend server:
    ```bash
    npm run start:backend
    ```
-   Run the backend server in development mode:
    ```bash
    cd backend && npm run dev
    ```
## Available Scripts

### Root

- `install:all`: Installs dependencies for root, frontend, and backend.
- `start:frontend`: Starts the frontend development server.
- `start:backend`: Starts the backend server.

### Frontend

- `npm test`: Runs tests for the frontend.
- `npm run dev`: Runs the frontend in development mode (not yet implemented).

### Backend

- `npm test`: Runs tests for the backend.
- `npm run dev`: Runs the backend in development mode (not yet implemented).
