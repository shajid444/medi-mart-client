# website url : https://assignment-000-c4847.web.app
## Overview
MediMart is a multi-vendor e-commerce platform designed to facilitate the buying and selling of medicines and healthcare products. The platform supports various user roles, including customers, sellers, and administrators, to create a seamless and efficient shopping experience. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), MediMart integrates Stripe for secure payment processing and TanStack Query for efficient data fetching and caching.

## Features
User Authentication: Secure registration, login, and social login options.
Product Management: Allows sellers to add, update, and delete products.
Shopping Cart: Customers can add products to the cart, view cart details, and proceed to checkout.
Order Processing: Handles order creation, management, and payment via Stripe.
Admin and Seller Dashboards: Custom dashboards for administrators and sellers to manage the platform and their products.
Responsive Design: Optimized for mobile, tablet, and desktop views.
Multi-language Support: Provides options for switching between different languages.
Profile Management: Users can update their profiles, including changing the avatar.
Search Functionality: Enables users to search for products easily.
## Technology Used
MongoDB: NoSQL database for storing user, product, and order information.
Express.js: Backend framework to build RESTful APIs.
React.js: Frontend library for building user interfaces.
Node.js: Server-side runtime environment for executing JavaScript code.
Stripe: Payment processing platform for handling secure transactions.
TanStack Query: Data fetching and state management library for React.
JWT (JSON Web Tokens): For secure authentication and authorization.
Axios: For making HTTP requests from the frontend to the backend.
Bcryptjs: For hashing passwords before storing them in the database.
Dotenv: For managing environment variables.

# For running the project

## Clone the repository
git clone https://github.com/yourusername/medimart.git
cd medimart

## Set up the backend
cd server
npm install

## Create .env file in the server directory and add environment variables

## Set up the frontend
cd ../client
npm install

## Start the backend server
cd ../server
npm run dev

## Start the frontend development server
cd ../client
npm start

## Access the application
## Open your browser and navigate to http://localhost:-----

