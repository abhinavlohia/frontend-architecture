# React 19 Enterprise Frontend Architecture

Welcome to our modern, highly scalable React frontend! 

This application is built using **Feature-Sliced Design (FSD)** principles. While it might look different than a standard Create-React-App at first glance, FSD is designed to keep our code extremely organized, predictable, and easy to maintain as the app grows large. Read more about [FSD here](https://feature-sliced.design/).

## Technology Stack
Our core technologies are chosen for speed, type-safety, and enterprise-level reliability:
- **Core:** React 19 + TypeScript
- **Bundler:** Vite 7 (Extremely fast local development)
- **State & Data:** Redux Toolkit + RTK Query
- **Routing:** React Router v7
- **Styling:** SCSS Modules
- **Forms:** React Hook Form + Zod validation

---

## Getting Started (Beginner Friendly Guide)

### Prerequisites
1. Ensure you have **Node.js** installed (v20+ recommended). You can check by running `node -v` in your terminal.
2. Have the **Backend Server** repository cloned and running locally (usually on port 3000).

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd frontend-architecture
   ```

2. **Install all dependencies:**
   This command reads the `package.json` file and downloads React, Vite, Redux, and all our tools into a `node_modules` folder.
   ```bash
   npm install
   ```

3. **Synchronize with the Backend (Crucial Step):**
   Before running the app, we need to generate our TypeScript API code. Make sure your local backend server is turned **ON**. Then run:
   ```bash
   npm run generate-api
   ```
   *See the "Understanding API Generation" section below for more details on what this does!*

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```

5. **View the App:**
   Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal). As you save changes in your code editor, the browser will update instantly!

---

## Understanding API Generation (`npm run generate-api`)

This project uses an automated generator to write our TypeScript hooks out of the backend's Swagger data. **Why?** Because it guarantees our frontend data types match the backend exactly.

**You should only run this command when:**
1. You are running the project for the very first time.
2. The Backend team adds a **new API endpoint**.
3. The Backend team **updates** an existing API (e.g., changes a required field).

*(Ensure your local backend server is running before executing the script)*

---

## All Available Scripts

- `npm run dev` - Starts the Vite development server for building UI.
- `npm run generate-api` - Syncs frontend types/hooks with the backend Swagger JSON.
- `npm run lint` - Runs ESLint to catch bugs, bad FSD imports, and code quality issues.
- `npm run build` - Compiles TypeScript and creates an optimized `dist/` folder for production.
- `npm run preview` - Tests the production build locally before deploying.
