# Registration Wizard

Small React registration wizard built with Vite.

## What is inside

- 3 steps with conditional rendering
- React Hook Form + Zod validation
- Preserved form data when moving back and forward
- Password show/hide buttons
- Password strength indicator
- Review screen and success screen
- Tailwind styling with a dark mode toggle

## Folder layout

```txt
src/
  components/
    FormNavigation.jsx
    ProgressBar.jsx
    SuccessMessage.jsx
  schemas/
    validationSchema.js
  steps/
    StepOne.jsx
    StepTwo.jsx
    StepThree.jsx
  App.jsx
  index.css
  main.jsx
```

## Run locally

```bash
npm install
npm run dev
```

Vite will print the local URL. It is usually:

```txt
http://localhost:5173
```

## Build

```bash
npm run build
```

## Deploy on Vercel

Use the Vite preset.

```txt
Build command: npm run build
Output folder: dist
Install command: npm install
```

The submit handler currently logs the form data with `console.log(formData)` because that was part of the task requirement.
