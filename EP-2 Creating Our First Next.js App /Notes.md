Here's a list of **interview-style questions with simple answers** based on the transcript you provided from the **Next.js setup tutorial**. These are perfect for beginners or revision before a technical round.

---

### ✅ **Basic Next.js Interview Questions (with Simple Answers)**

---

#### 1. **What command do we use to create a Next.js app?**

**Answer:**
We use the command:

```bash
npx create-next-app@latest
```

---

#### 2. **What needs to be installed before using `create-next-app`?**

**Answer:**
You need to install **Node.js** in your system.

---

#### 3. **Where can we find the command to create a Next.js app?**

**Answer:**
On the official website: **[https://nextjs.org](https://nextjs.org)**

---

#### 4. **What does the `npx create-next-app@latest` command do?**

**Answer:**
It installs the necessary packages and sets up a new Next.js project.

---

#### 5. **Can we use JavaScript instead of TypeScript while setting up the app?**

**Answer:**
Yes, we can choose **No** when asked about TypeScript to use JavaScript.

---

#### 6. **What is Tailwind CSS, and can we use it while creating a Next.js app?**

**Answer:**
Tailwind is a utility-first CSS framework.
Yes, we can choose **Yes** to install and use Tailwind during setup.

---

#### 7. **What is the difference between App Router and Pages Router in Next.js?**

**Answer:**

* **App Router** is the newer routing system (recommended).
* **Pages Router** is the older method, still supported.

---

#### 8. **What is Turbopack in Next.js?**

**Answer:**
**Turbopack** is a new bundler developed by Vercel for Next.js.
It's faster than Webpack and used during development.

---

#### 9. **How do you start a Next.js project after setup?**

**Answer:**
Run the command:

```bash
npm run dev
```

---

#### 10. **On which port does the development server usually run?**

**Answer:**
By default, Next.js runs on **[http://localhost:3000](http://localhost:3000)**

---

#### 11. **What is the purpose of the `/app` folder in Next.js?**

**Answer:**
The `/app` folder contains the **main code** using the **App Router**.

---

#### 12. **What is a hydration error in Next.js?**

**Answer:**
A hydration error happens when the **HTML from the server doesn't match the HTML on the client** during rehydration.

---

#### 13. **What causes a hydration error in development mode?**

**Answer:**
Browser extensions like **dark mode togglers** that modify the DOM can cause it.

---

#### 14. **How can we fix hydration errors caused by extensions?**

**Answer:**
Run the app in an **Incognito Window** where no extensions are enabled.

---

#### 15. **Is hydration error a bug in Next.js?**

**Answer:**
No, it’s a **genuine error** caused by **DOM mismatch**, not a Next.js issue.

---

#### 16. **Which other frameworks may face similar hydration issues?**

**Answer:**
Frameworks like **Remix** or **SvelteKit** (SSR frameworks) can also show hydration errors if the DOM is modified.

---

#### 17. **What should you do if you see unexpected errors after creating a Next.js app?**

**Answer:**
Don't panic. Check for browser extensions or try running in **Incognito mode**.

---

### 🧠 Bonus Tips:

* Always make sure **Node.js** is installed before creating a Next.js app.
* Choose **App Router** during setup if you're learning the latest Next.js features.
* **Hydration errors** are common during development; understand the cause before debugging.

---

Would you like a printable version or flashcards format of these questions?
