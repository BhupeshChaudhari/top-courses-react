# Top Courses App

This is a React application bootstrapped with Vite. The application fetches a list of top courses from an API and allows users to filter the courses based on different categories. Additionally, users can like or unlike courses.

## Features
  - Fetches course data from an external API.
  - Displays courses with the ability to like/unlike them.
  - Filters courses based on categories.
  - Provides a responsive and user-friendly interface.
    
## How to Run
1. Clone the repository:
  ```
  git clone https://github.com/your-username/top-courses-catalog.git
  cd top-courses-catalog
  ```

2. Install dependencies:
  ```
  npm install 
  ```

3. Start the development server:
  ```
  npm run dev
  ```

## Project Struture:
```
  ├── public
  │   └── index.html
  ├── src
  │   ├── assets
  │   │   └── (images and other assets)
  │   ├── components
  │   │   ├── CourseCard.jsx
  │   │   ├── FilterBar.jsx
  │   │   └── (other components)
  │   ├── App.jsx
  │   ├── index.jsx
  │   └── styles
  │       └── (CSS/SCSS files)
  ├── package.json
  ├── vite.config.js
  └── README.md
```

## Dependencies
  - React
  - Vite
  - React Icons
  - React Toastify

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
