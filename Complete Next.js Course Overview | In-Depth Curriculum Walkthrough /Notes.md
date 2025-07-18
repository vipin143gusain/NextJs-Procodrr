Here’s a list of **interview questions with simple, clear answers** based on the provided transcript of the **Next.js course overview**. These are suitable for **junior/intermediate frontend developers** preparing for interviews or internal discussions.

---

## 🧠 **Interview Questions & Answers – Based on the Course Overview**

---

### 1. **What is Next.js? How is it different from React.js?**

**Answer:**
Next.js is a React-based framework that adds features like server-side rendering, file-based routing, and API support.
Unlike plain React, which is client-side only, Next.js supports different rendering methods (CSR, SSR, etc.) out of the box.

---

### 2. **What is the App Router in Next.js?**

**Answer:**
The App Router is the latest routing system in Next.js using the `app/` directory.
It supports file-based routing, nested routes, layouts, and server components.

---

### 3. **What’s the difference between App Router and Pages Router in Next.js?**

**Answer:**

* **Pages Router** is the old method using the `pages/` folder.
* **App Router** is the new structure introduced in Next.js 13+, which uses the `app/` folder and supports advanced features like server components and layouts.

---

### 4. **What languages are used in the course for Next.js?**

**Answer:**

* Most of the course uses **JavaScript** for basics.
* **TypeScript** is used for projects and the advanced section.

---

### 5. **What is file-based routing in Next.js?**

**Answer:**
File-based routing means pages are created based on the file structure inside the `pages/` or `app/` directory.
For example, `app/about/page.tsx` becomes the `/about` route.

---

### 6. **What are the types of rendering supported by Next.js?**

**Answer:**

* **CSR (Client-Side Rendering)**
* **SSR (Server-Side Rendering)**
* **SSG (Static Site Generation)**
* **ISR (Incremental Static Regeneration)**

Each has its use-case depending on when and how data is fetched.

---

### 7. **What is Hydration in Next.js?**

**Answer:**
Hydration is the process of converting static HTML (from server) into a fully interactive React app on the client.
It connects server-rendered HTML to client-side JavaScript.

---

### 8. **Why do hydration errors occur in Next.js?**

**Answer:**
Hydration errors usually happen when the server and client render different HTML.
Fixing involves making sure dynamic data is handled properly and only runs on the client.

---

### 9. **How is data fetching handled in Next.js?**

**Answer:**
You can fetch data using:

* `useEffect` for CSR
* `getServerSideProps()` for SSR
* `getStaticProps()` for SSG
* `fetch()` inside server components

---

### 10. **What are some common state management methods in Next.js?**

**Answer:**

* **Context API**
* **Redux** (via integration)
* **Zustand** or **Recoil** (optional third-party libraries)

---

### 11. **What styling options are commonly used in Next.js?**

**Answer:**

* **CSS Modules**
* **Tailwind CSS**
* **Styled-components** or **Sass** (optional)

---

### 12. **How is authentication implemented in Next.js?**

**Answer:**
Authentication is handled using **NextAuth.js** for:

* Email/password login
* Social logins (GitHub, Google)
* Securing routes & sessions
* Role-based access (RBAC)

---

### 13. **What is RBAC and how is it used in Next.js?**

**Answer:**
RBAC (Role-Based Access Control) allows assigning permissions based on user roles like `admin`, `user`, etc.
You can protect routes and allow features based on role.

---

### 14. **What are Middleware and Edge Functions in Next.js?**

**Answer:**

* **Middleware** runs before a request is completed (useful for auth, redirects, etc.)
* **Edge Functions** run at the edge (closer to users) for fast performance.

---

### 15. **How does Next.js support internationalization (i18n)?**

**Answer:**
Next.js supports multiple languages using built-in `i18n` routing, which allows localized routes like `/en`, `/fr`, etc.

---

### 16. **What tools are used for project setup in professional Next.js apps?**

**Answer:**

* **ESLint** – code linting
* **Prettier** – code formatting
* **Husky** – pre-commit hooks
* **Lint-staged** – run linters before commits
* **CI/CD Pipelines** – automated deployment

---

### 17. **How can you deploy a Next.js app?**

**Answer:**
You can deploy on platforms like:

* **Vercel** (official)
* **Netlify**
* **AWS, GCP, or DigitalOcean**
* Using CI/CD pipelines for automated builds

---

### 18. **What is the importance of understanding the legacy Pages Router?**

**Answer:**
Some companies still use the old Pages Router. Understanding it helps in maintaining or migrating old codebases.

---

### 19. **How do you structure an industry-level Next.js project?**

**Answer:**

* Use TypeScript
* Modular folder structure
* ESLint, Prettier, Husky
* Env variable management
* Git commit guidelines
* CI/CD configured

---

### 20. **Can Next.js be used without Node.js?**

**Answer:**
Yes, for frontend-only apps.
But for full-stack apps (API routes, database), **Node.js is essential**.

---

Would you like this as a **PDF**, or want a **quiz format** version for practice?
