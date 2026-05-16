# Registration Wizard

A modern multi-step registration wizard built using React.js, Vite, Tailwind CSS, React Hook Form, and Zod validation.

This project demonstrates enterprise-level frontend architecture with reusable components, responsive design, form validation, conditional rendering, animated transitions, and clean folder organization.

---

## Features

* Multi-step registration wizard
* Built with React + Vite
* Tailwind CSS responsive UI
* React Hook Form integration
* Zod schema validation
* Conditional rendering (without React Router)
* Password strength indicator
* Show/Hide password functionality
* Step progress indicator
* Smooth animations using Framer Motion
* Review & confirmation screen
* Success screen after submission
* Dark mode support
* Clean scalable folder structure

---

## Tech Stack

* React.js
* Vite
* Tailwind CSS
* React Hook Form
* Zod
* Framer Motion
* Lucide React Icons

---

## Project Structure

```txt
src/
│
├── components/
│   ├── FormNavigation.jsx
│   ├── ProgressBar.jsx
│   └── SuccessMessage.jsx
│
├── schemas/
│   └── validationSchema.js
│
├── steps/
│   ├── StepOne.jsx
│   ├── StepTwo.jsx
│   └── StepThree.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

Clone the repository and install dependencies.

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

Vite will start the local development server.

Usually:

```txt
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

---

## Preview Production Build

```bash
npm run preview
```

---

## Available Scripts

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

---

## Dependencies

Main dependencies used in this project:

* react
* react-dom
* react-hook-form
* zod
* @hookform/resolvers
* framer-motion
* lucide-react

---

## Development Dependencies

* vite
* tailwindcss
* @vitejs/plugin-react
* eslint
* @eslint/js
* eslint-plugin-react-hooks
* eslint-plugin-react-refresh

---

## Validation

The form uses:

* React Hook Form for form state management
* Zod for schema validation
* Resolver integration using @hookform/resolvers

---

## Deployment

This project can be deployed easily on:

* Vercel
* Netlify
* GitHub Pages

### Vercel Settings

```txt
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

---

## Learning Objectives

This project demonstrates:

* Professional React architecture
* Multi-step form handling
* Validation workflows
* Reusable component design
* Scalable frontend structure
* Responsive UI development
* Enterprise coding practices

---

## Author

A TEJASYA
P/IL/26/NOIDA/M1299
KLH UNIVERSITY  
