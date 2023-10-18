# Project description
```
Assignment for - Full Stack Developer

About this Job: 
This is a Full Stack Development Job opportunity. Where you get a chance to work with Real Software development products. Building Pixel Perfect web apps, writing complex Logics etc. 

Assignment Guideline:
For this assignment you will use 
ReactJS Or Refine (mandatory)
NodeJS Backend (mandatory)
ViteJS  (build tool, mandatory)
Typescript (mandatory)
Tailwind CSS (mandatory)
Please note that using HTML, bootstrap CSS, ANGULAR, Javascript, etc will result in disqualification. Use only the stack mentioned above.

Follow best practices such as:
Minimum code, more reusable component
Folder structure: Organize your codebase into logical folders.
Component structure: Divide your UI into small, reusable components.
State management: Use Redux.
Use functional components and hooks for cleaner code.
Follow JSX best practices for clean and readable code.

Assignment: Building an Admin Panel

Page 1: Login Page

Objective: Create a login page with email field validation and appropriate messages for login success and failure. Integrate an API for authentication. Upon successful login, redirect the user to the form page.



Page 2: Registration Page

Objective: Create a registration page asking for basic details like Name, Email, and Password.

Page 3: Multi-Step Form with Progress Indicator

Objective: Create a functional multi-step form with a progress indicator. The form will contain 3 steps, and these steps will be represented on a progress bar. The form should have three action buttons: Next/Submit, Previous, and Cancel.


Step 1: Basic Details

Objective: This step should capture basic information.
Fields: User's Name, Email, Phone number, and Address (in standard format, including Address line one, Address line two, City, State, Pincode, Country).

Step 2: Multi-File Upload

Objective: In this step, users should be able to upload multiple files.
Fields: File Upload Field (Allow multiple file uploads with valid types PNG and PDF, up to a limit of 3 files), and Geolocation Status Field (Automatically record the geolocation during this stage, display the geolocation capture process while acquiring coordinates, and update the status to indicate confirmation of geolocation capture once coordinates are recorded).

Step 3: Multi-Field Select Dropdown

Objective: Create a dropdown where users can select multiple options.

Form Submission
Objective: Submit the form and display relevant messages on success and failure.

Page 4: Submission Table

Objective: Create a table where users can view their own form submissions.
Features: Add a search and filter option. The filter should be applicable based on the date of submission, allowing users to select a date range to filter their submissions.
Further Assignment Explanation:

You are tasked with building an admin panel consisting of several pages and components. Here's a breakdown of what you need to do:

Login Page: Create a page where users can log in using their email. Ensure that you validate the email field and provide appropriate feedback for successful and unsuccessful logins. You should integrate an API for authentication. After a successful login, redirect the user to the form page.
Registration Page: Build a page where new users can register by providing basic information like their name, email, and password.

Multi-Step Form: Design a multi-step form with a progress indicator and state management. The form should have three steps, and users should be able to navigate between steps using Next, Previous, and Cancel buttons.

Step 1 (Basic Details): This step should collect basic information, including the user's name, email, phone number, and address in a standardized format.

Step 2 (Multi-File Upload): In this step, users should be able to upload multiple files. Limit the file types to PNG and PDF, with a maximum of 3 files. Also, automatically record the geolocation during this step and display the capture process.

Step 3 (Multi-Field Select Dropdown): Create a dropdown where users can select multiple options.

Form Submission: Implement form submission functionality and provide clear messages for success and failure.

Form Control:
Next : User should be able to go to the next step if all the inputs are filled.
Previous : User should be able to go to the Previous step and edit the Input.
Cancel : Cancel the form progress.
Submit : Submit the form.

Submission Table Page: Create a table where users can view their form submissions. Add features like search and filtering based on the date of submission, allowing users to select a date range.

Remember to make the user interface intuitive and user-friendly, and ensure that the components and pages are well-connected and responsive
Guidelines: 
Use NodeJs backend Only
Use field Validation for Forms
The web app should be responsive on all devices (Mobile, tab and desktop)
Design should be clean and minimal.

Assignment Submission:
Submit your assignment through a Github URL
Deploy frontend on Vercel/Netlify.
Deploy Backend on Cyclic.
Fill the form - https://forms.gle/7t6CXXPEkpUUVQ3N6

```



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
