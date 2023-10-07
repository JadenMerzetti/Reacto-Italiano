# Portfolio for Jaden Merzetti

This repository contains the source code for a portfolio website built using React. The website showcases various sections including an "About Me" section, a portfolio of projects, a resume, and a contact form. The code is organized into components, and this readme provides an overview of the `MainContent` component.

## MainContent Component

The `MainContent` component is a key part of the portfolio website. It dynamically renders content based on the active button selected in the navigation bar. Here's an overview of the component's functionality:

### State Management

The component uses React's `useState` hook to manage the following pieces of state:

- `name`: Stores the user's name input in the contact form.
- `email`: Stores the user's email input in the contact form.
- `message`: Stores the user's message input in the contact form.
- `emailError`: Stores an error message if the email input is invalid.

### Input Validation

There is a function `handleEmailChange` that validates the email input using a regular expression. If the email is invalid, it sets the `emailError` state with an error message.

### Form Submission

When the user submits the contact form, the `handleSubmit` function is called. It checks if all required fields (name, email, and message) are filled out and if the email is valid. Depending on the validation results, it either displays an alert indicating success or prompts the user to correct errors.

### Conditional Rendering

The `MainContent` component renders different content based on the `activeButton` prop passed to it. The options are:

- `'About Me'`: Displays information about the portfolio owner.
- `'Portfolio'`: Displays a list of portfolio projects with descriptions and images.
- `'Resume'`: Displays the owner's resume along with a download link.
- `'Contact Me'`: Displays a contact form with fields for name, email, and message.

### Project Showcase

In the "Portfolio" section, the component maps over an array of project objects and renders them as individual project cards. Each card includes an image, a description, and alt text.

# Credits

This portfolio was created by **Jaden Merzetti**. If you have any questions or suggestions, please feel free to [contact me].

