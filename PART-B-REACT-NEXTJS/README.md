# React / NextJS App

## Overview
This project is a Next.js application that allows users to input and preview student information. It features a modern UI with a header, tabbed navigation, and responsive design.

## Components

### 1. **WelcomeCard**
- **File:** `src/components/WelcomeCard.jsx`
- **Description:** Displays a welcome message at the top of the page. Acts as a header.
- **Props:**
  - `name`: The name of the student to display in the welcome message.

### 2. **Counter**
- **File:** `src/components/Counter.jsx`
- **Description:** A simple counter component that allows users to increment and decrement a count.
- **State:**
  - `count`: The current count value.

### 3. **StudentInfo**
- **File:** `src/components/StudentInfo.jsx`
- **Description:** A form component that allows users to input student information (name, age, course, email) and preview the entered data.
- **Props:**
  - `setName`: A function to update the student's name in the parent component.
- **State:**
  - `studentInfo`: An object containing the student's information (name, age, course, email).
  - `submitted`: A boolean indicating whether the form has been submitted.

## Pages

### 1. **Home Page**
- **File:** `src/app/page.jsx`
- **Description:** The main page of the application. It includes the `WelcomeCard`, `Counter`, and `StudentInfo` components. It also features a tabbed navigation to switch between the Counter and Student Info sections.
- **State:**
  - `name`: The name of the student, passed to the `WelcomeCard` and `StudentInfo` components.
  - `activeTab`: The currently active tab ('counter' or 'student').

## Styles
- **File:** `src/styles/components.module.css`
- **Description:** Contains the CSS styles for the components, including layout, colors, and responsive design.

## How to Run
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## Features
- **Responsive Design:** The UI adapts to different screen sizes.
- **Tabbed Navigation:** Users can switch between the Counter and Student Info sections.
- **Form Validation:** The StudentInfo form validates user input before submission.
- **Modern UI:** The application uses a clean, modern design with a gradient background and card-based layout.

## Dependencies
- **Next.js:** A React framework for building server-rendered applications.
- **React:** A JavaScript library for building user interfaces.
- **React DOM:** A package that provides DOM-specific methods for React.
