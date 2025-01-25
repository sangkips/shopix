# shopix

A simple ecommerce platform

Tools and technologies used:

- Postgres for DB
- Django for backend
- NextJS (React) for frontend

## Features

- Poduct listing
- Cart functionality
- Checkout
- User profile
  - Past orders
  - profile details
- Admin functionality
  - crud products management
  - Order management

## User stories

- A customer lists / views products
  - products
- A customer adds a product to their cart
  - product details
  - cart
- A customer checks out
  - product
  - cart
  - customer details
  - payment
- A customer views their orders
  - orders

- An Admin logs in
  - user details (adin role)
- Admin adds a product
  - product
- Admin views all products
  - products
- Admin views orders

## Set up

The backend exposes an API that is consumed by the frontend.

To test the backend api, there is a [VSCode rest client based](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) file in [client.http](./client.http)

The backend code is in the [backend directory](./backend/)
