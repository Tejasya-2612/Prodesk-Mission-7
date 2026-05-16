# AI Prompt — Registration Wizard Project

Build a professional enterprise-level React.js multi-step registration wizard application using modern frontend architecture and best practices.

---

## Tech Stack Requirements

Use the following technologies:

* React.js with Vite
* Tailwind CSS
* React Hook Form
* Zod validation
* Framer Motion animations
* Lucide React icons
* Functional components only

---

## Main Requirements

Create a fully responsive 3-step registration wizard using conditional rendering only.

DO NOT use React Router.

---

# Step 1 — Personal Information

Create fields for:

* Full Name
* Email Address
* Phone Number

Requirements:

* Real-time validation
* Proper error messages
* Responsive layout
* Clean UI with Tailwind CSS

---

# Step 2 — Account Setup

Create fields for:

* Username
* Password
* Confirm Password

Requirements:

* Password visibility toggle
* Password strength indicator
* Match password validation
* Show validation messages clearly

---

# Step 3 — Review & Submit

Display all entered information in a professional review card.

Requirements:

* Allow users to go back and edit data
* Display a final submit button
* Show success message after submission

---

# Validation Requirements

Use:

* React Hook Form
* Zod schemas

Validation rules:

* Email must be valid
* Phone must contain valid digits
* Password minimum 8 characters
* Confirm password must match password

---

# UI/UX Requirements

Design should be:

* Professional
* Enterprise-level
* Modern
* Minimal
* Fully responsive
* Mobile-friendly

Include:

* Step progress bar
* Smooth transitions
* Loading state on submit
* Dark mode toggle
* Animated cards

Use Tailwind CSS utility classes only.

---

# Architecture Requirements

Use clean folder structure:

```txt
src/
│
├── components/
├── steps/
├── schemas/
├── hooks/
├── utils/
├── assets/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Additional Requirements

* Preserve form state when moving between steps
* Use reusable components
* Use clean code practices
* Use meaningful variable names
* Add comments where needed
* Production-ready structure
* Follow modern React best practices

---

# Deliverables

Generate:

* Full React.js source code
* Tailwind configuration
* Validation schemas
* Reusable UI components
* Step components
* Main App.jsx
* Folder structure
* Installation instructions
* README.md

---

# Package Requirements

Install and configure:

```bash
npm install react-hook-form zod @hookform/resolvers framer-motion lucide-react
```

---
