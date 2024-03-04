# Food Order App

Food Order App is a React application that allows users to browse meals, add items to the cart, and proceed to checkout. The project is structured with reusable components, contexts for state management, custom hooks for making HTTP requests, and utility functions for formatting currency. This README provides an overview of the project structure, components, and functionalities.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Header](#header)
  - [Meals](#meals)
  - [MealItem](#mealitem)
  - [Cart](#cart)
  - [CartItem](#cartitem)
  - [Checkout](#checkout)
  - [Modal](#modal)
  - [Input](#input)
  - [Button](#button)
- [Contexts](#contexts)
  - [UserProgressContext](#userprogresscontext)
  - [CartContext](#cartcontext)
- [Hooks](#hooks)
  - [useHttp](#usehttp)
- [Utility Function](#utility-function)
  - [currencyFormatter](#currencyformatter)
- [Contributing](#contributing)
- [License](#license)
- [Course Information](#course-information)

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.

## Usage

Open the application in a web browser to browse meals, add items to the cart, and proceed to checkout.

## Components

### Header
The main header containing the logo, title, and navigation button.

### Meals
Displays a list of meals fetched from the backend.

### MealItem
Represents an individual meal item with details and an "Add to Cart" button.

### Cart
A modal displaying the items added to the cart, along with their quantity and total price.

### CartItem
Represents an individual item in the cart with options to increase or decrease the quantity.

### Checkout
A modal for the checkout process, allowing users to enter their details and submit an order.

### Modal
A reusable modal dialog component that can be opened and closed.

### Input
An input component for collecting user input, commonly used in forms.

### Button
A customizable button component for user interaction.

## Contexts

### UserProgressContext
Manages the user's progress in the application, such as navigating to the cart or checkout.

### CartContext
Manages the state of the shopping cart, including items, adding, removing, and clearing the cart.

## Hooks

### useHttp
A custom hook for making HTTP requests, providing data, loading state, error handling, and methods for sending requests and clearing data.

## Utility Function

### currencyFormatter
A utility function using `Intl.NumberFormat` to format currency values.


## Additional Information
This project is part of the Udemy course [React - The Complete Guide 2024 (incl. React Router & Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/).
