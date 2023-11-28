# Dynamic Form Application

## Overview

This project involves creating a dynamic form submission application using React, Vite, Babel, Redux Toolkit, Styled Components, Jest, and TypeScript. The goal is to build a responsive single-page application (SPA)capable of collecting, verifying, and displaying data in accordance with a JSON structure.

## Technologies Used

- **React:** Used as the primary library for building the SPA.
- **Vite:** Utilized for fast and efficient project setup.
- **Babel:** Employed for JavaScript/TypeScript compilation and transformation.
- **Redux Toolkit:** Implemented for efficient state management.
- **Styled Components:** Utilized for styling components with dynamic styles and media queries.
- **Jest:** Integrated for unit testing purposes.
- **TypeScript:** Used for adding static types to the codebase.

## Task Details

### Build

The application is built as a React SPA, leveraging Vite for a quick and optimized development experience. The styling is handled using Styled Components, ensuring a responsive layout with a single-column design for mobile devices.

### State Management

Redux Toolkit is employed for state management within the application. This helps in managing and updating the state of the form components efficiently.

### Testing

Jest is used for unit testing, with a focus on achieving comprehensive test coverage. Unit tests are included to ensure the reliability and correctness of the application.

### Form Fields

The form fields are dynamically generated based on the provided JSON structure (`field-set.js`). Each field object in the array represents one form field.

### Usability

Validation is implemented for required fields, and common input validations (e.g., email, phone) are included to enhance the usability of the form.

### Submission

Upon successful form submission, users are directed to a thank-you page. This page mirrors the layout of the form field UI, displaying the collected data.

### Responsive UI

The application's UI is designed to be responsive, adapting to both desktop and mobile views for an optimal user experience.

## How to Run

1. Clone the repository: `git clone [repository_link]`
2. Install dependencies: `npm install`
3. Run the application: `npm run dev`

## How to Test

Run unit tests using: `npm test`

## Repository

Please find the code for this challenge in the following public GitHub repository: [Repository Link](https://github.com/Ash19-88/front-end-challenge.git)

Feel free to explore the code, run the application, and review the implemented features.
