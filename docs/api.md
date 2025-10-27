# API Documentation

This document outlines the API endpoints for the Amazon Clone application.

## Authentication

-   `POST /api/auth/register` - Register a new user.
-   `POST /api/auth/login` - Log in a user and return a JWT.
-   `GET /api/auth/me` - Get the currently logged-in user's profile.

## Products

-   `GET /api/products` - Get a list of all products (with pagination and filtering).
-   `GET /api/products/:id` - Get a single product by its ID.
-   `POST /api/products` - (Admin only) Create a new product.
-   `PUT /api/products/:id` - (Admin only) Update a product.
-   `DELETE /api/products/:id` - (Admin only) Delete a product.

## Cart

-   `GET /api/cart` - Get the current user's shopping cart.
-   `POST /api/cart` - Add an item to the cart.
-   `PUT /api/cart/:itemId` - Update the quantity of an item in the cart.
-   `DELETE /api/cart/:itemId` - Remove an item from the cart.

## Orders

-   `GET /api/orders` - Get a list of the current user's orders.
-   `GET /api/orders/:id` - Get a single order by its ID.
-   `POST /api/orders` - Create a new order from the user's cart.

## Admin

-   `GET /api/admin/users` - Get a list of all users.
-   `GET /api/admin/users/:id` - Get a single user by their ID.
-   `PUT /api/admin/users/:id` - Update a user's details.
-   `DELETE /api/admin/users/:id` - Delete a user.
-   `GET /api/admin/orders` - Get a list of all orders.