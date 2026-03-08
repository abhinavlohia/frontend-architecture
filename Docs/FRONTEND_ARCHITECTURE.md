# Frontend Architecture Guide (Beginner Friendly)

Welcome to the frontend codebase! If you are used to standard React folders (like having one big `components` folder and one big `pages` folder), our setup might look a bit different. 

We use **Feature-Sliced Design (FSD)**.

## What is Feature-Sliced Design?
FSD is an architectural methodology for frontend applications. Instead of grouping files by their **technical type** (e.g., putting all CSS in one folder, all Redux slices in one folder), we group files by their **business meaning**.

This ensures that as the app grows to hundreds of pages, the code remains easy to read, find, and refactor.

---

## The 3 Golden Rules of FSD
Before we look at the folders, you only need to memorize these three rules:
1. **Layers are strictly ordered.** A layer can only import from layers *below* it. It can NEVER import from layers above it.
2. **We use Public APIs.** If you want to use a button from the `shared` layer in the `features` layer, you must import it from `shared/ui/index.ts`. You should never do deep imports like `shared/ui/Button/Button.tsx`.
3. **Use the `@` alias.** Always use `@/shared/...` or `@/features/...` instead of `../../../shared/...`.

---

## The Folder Structure (The "Layers")
Inside `src/`, you will find our layers. They are ordered from **highest business logic** (top) to **lowest/most reusable code** (bottom):

### 1. `app/` (Highest Layer) 
* **What it is:** The global initialization of the entire application.
* **What goes here:** Things that wrap the *entire* app. (e.g., Redux Store setup, React Router definitions, Global CSS, `App.tsx`, `main.tsx`).
* **Can it be reused?** No. Nothing else imports from `app`.

### 2. `pages/`
* **What it is:** Full-screen views that are tied to a specific URL route.
* **What goes here:** The structural layout of a page (e.g., `HomePage.tsx`, `LoginPage.tsx`). These files simply combine features and widgets together.
* **Rule:** A Page *cannot* import another Page.

### 3. `widgets/`
* **What it is:** Meaningful "blocks" of a page that combine multiple features.
* **What goes here:** Things like `Header`, `Sidebar`, `UserProfileCard`. 
* **Example:** A `Header` widget might contain a "Search" feature, a "Theme Toggle" feature, and a "User Avatar" entity.

### 4. `features/`
* **What it is:** A specific action or business value the user interacts with.
* **What goes here:** The logic and UI for doing something specific (e.g., `Auth` feature handles login logic, `LikePost` feature handles the like button and API call).
* **Rule:** Features *cannot* import other Features. They are independent.

### 5. `entities/`
* **What it is:** Business entities (the "nouns" of your app).
* **What goes here:** UI components and state that represent core data structures (e.g., `User`, `Product`, `Post`). An entity tells you *how a user looks* (avatar, name display), but the `features` layer handles what happens when you *click/interact* with the user.

### 6. `shared/` (Lowest Layer)
* **What it is:** Completely generic, reusable code that has NO specific business logic.
* **What goes here:** Generic UI buttons (`Button.tsx`, `Input.tsx`), generic utility functions (`formatDate()`), and the base API configuration (`baseApi.ts`).
* **Rule:** Shared code can be used by absolutely every other layer, but it can never import from *any* other layer above it.

---

## How Data Works (RTK Query)
We use Redux Toolkit (RTK) Query for fetching data from the backend. 

* **No manual fetching:** You will virtually never write `axios.get('/users')`.
* **Generated Hooks:** Whenever the backend changes, we run `npm run generate-api`. This looks at the backend's OpenAPI (Swagger) documentation and automatically writes perfect TypeScript Hooks for us inside `@/shared/api/generatedApi.ts`.
* **Usage:** You simply pull these hooks into your component:
  ```tsx
  import { useUsersControllerFindAllQuery } from '@/shared/api/generatedApi';

  const MyComponent = () => {
      const { data, isLoading } = useUsersControllerFindAllQuery();
      if (isLoading) return <Spinner />;
      return <div>{data.name}</div>;
  };
  ```

## Summary for Beginners
If you are assigned to build a new view, work your way up the pyramid:
1. Do I need a generic UI element? Build it in `shared/`.
2. Do I need to display a specific piece of business data? Build it in `entities/`.
3. Do I need to add interactivity (a form, a button click)? Build it in `features/`.
4. Do I need to group these together into a logical block? Build it in `widgets/`.
5. Do I need to show this on a URL? Drop the widget into a `pages/` file.
