# AmazonAWS Project

## Overview
This project is a React-based application built with Vite. It uses Tailwind CSS for styling and various libraries for additional functionality, such as routing, sorting, and state management.

---

## Features
- **React**: Fast and modular UI components.
- **React Router DOM**: Seamless client-side routing.
- **Tailwind CSS**: Utility-first CSS framework for responsive and modern design.
- **Vite**: Next-generation frontend tooling for blazing fast development.
- **ESLint**: Linting support to maintain code quality.
- **LocalForage**: Asynchronous storage for caching and data persistence.
- **Match Sorter**: Advanced sorting utility for user-friendly search and filtering.
- **Sort By**: Simple sorting utility.

---

## Installation

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd amazonaws
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```

4. **Build for Production:**
   ```bash
   npm run build
   ```

5. **Preview the Production Build:**
   ```bash
   npm run preview
   ```

---

## Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the application for production.
- **`npm run lint`**: Run ESLint to check code quality.
- **`npm run preview`**: Preview the production build locally.

---

## Dependencies

### Main Dependencies:
- **React**: ^18.3.1
- **React DOM**: ^18.3.1
- **React Router DOM**: ^7.1.1
- **LocalForage**: ^1.10.0
- **Match Sorter**: ^8.0.0
- **Sort By**: ^0.0.2

### Development Dependencies:
- **Vite**: ^6.0.5
- **Tailwind CSS**: ^3.4.17
- **PostCSS**: ^8.4.49
- **Autoprefixer**: ^10.4.20
- **ESLint**: ^9.17.0
- **ESLint Plugins**:
  - `@eslint/js`
  - `eslint-plugin-react`
  - `eslint-plugin-react-hooks`
  - `eslint-plugin-react-refresh`
- **TypeScript Types**:
  - `@types/react`
  - `@types/react-dom`

---

## Folder Structure
```
.
├── public        # Static assets
├── src           # Application source code
│   ├── components # Reusable UI components
│   ├── pages      # Application pages
│   ├── styles     # Tailwind CSS and custom styles
│   └── main.jsx   # Application entry point
└── package.json  # Project configuration and dependencies
```

---

## Contributing
Feel free to contribute to this project. Submit issues or pull requests for any improvements or bug fixes.

---

## License
This project is licensed under the MIT License.
