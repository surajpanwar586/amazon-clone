# Environment Variables

This document explains how to set up environment variables for this project.

## Backend

The backend uses a `.env` file in the `backend` directory to store environment variables.
Create a `.env` file in the `backend` directory and add the following variables:

```
DB_URI=your_database_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_KEY=your_stripe_api_key
```

### Variables

- `DB_URI`: The connection string for your database.
- `JWT_SECRET`: A secret key for signing JSON Web Tokens.
- `STRIPE_KEY`: Your secret API key for Stripe.

## Frontend

The frontend uses a `.env` file in the `frontend` directory to store environment variables.
Create a `.env` file in the `frontend` directory and add the following variables:

```
REACT_APP_API_URL=http://localhost:5000/api
```

### Variables

- `REACT_APP_API_URL`: The URL of the backend API.