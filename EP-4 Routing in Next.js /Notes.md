Here’s a set of **interview-style questions with simple, clear answers** based on the transcript you provided from the Next.js routing video. These are beginner-to-intermediate level questions suitable for interviews or quizzes:

---

### 🧠 **Basic Interview Questions on Next.js Routing**

---

#### 1. **Q: How does routing work in Next.js?**

**A:** Next.js uses **file-based routing**. Each file inside the `app` (or `pages` in older versions) folder becomes a route in the app.

---

#### 2. **Q: What is the default route in a new Next.js app?**

**A:** The default route is `/`, handled by `page.js` inside the `app` directory.

---

#### 3. **Q: What happens if you visit a route that doesn’t exist?**

**A:** Next.js automatically shows a **custom 404 error page** for non-existent routes.

---

#### 4. **Q: How can we create a new route like `/about` in Next.js?**

**A:** Create a folder called `about` inside the `app` directory and add a `page.js` file inside it. Export a React component from that file.

---

#### 5. **Q: What should be exported from `page.js` files?**

**A:** A default React component that renders the content for that page.

---

#### 6. **Q: What is the purpose of `layout.js` in the `app` directory?**

**A:** It defines the **common layout structure**, like `html`, `body`, and shared UI elements. Without it, you’ll get an error saying those tags are missing.

---

#### 7. **Q: What’s the equivalent of `index.html` in React for Next.js?**

**A:** The `layout.js` file acts like the `index.html` in React by wrapping all rendered pages.

---

#### 8. **Q: How do you navigate between pages in Next.js without reloading?**

**A:** Use the built-in **`Link` component from `next/link`** instead of the standard `<a>` tag.

---

#### 9. **Q: Why shouldn’t we use `<a>` tags for navigation in Next.js?**

**A:** Because `<a>` tags cause a **full page reload**, while `Link` enables **client-side navigation** (faster and smoother).

---

#### 10. **Q: What is the syntax for the `Link` component in Next.js?**

**A:**

```jsx
import Link from 'next/link';

<Link href="/about">About</Link>
```

---

#### 11. **Q: How do you create a `/services` page in Next.js?**

**A:**

1. Create a folder named `services` in the `app` directory
2. Inside that, create a `page.js` file
3. Export a default component that returns your page content

---

#### 12. **Q: Can the component name inside `page.js` be anything?**

**A:** Yes, because we use **default export**, the component name doesn’t matter (but using a meaningful name is good practice).

---

#### 13. **Q: What is client-side routing?**

**A:** It means navigating between pages **without reloading the browser**, which is possible using Next.js's `Link` component.

---

#### 14. **Q: What happens if we delete `layout.js`?**

**A:** The app will throw an error: `"html and body tags are missing in root layout"`.

---

#### 15. **Q: How do you add navigation links to multiple pages (home, about, services)?**

**A:**
Use the `Link` component in each page, like:

```jsx
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/services">Services</Link>
```

---

#### 16. **Q: How does Next.js map folder names to URLs?**

**A:** The **folder name becomes the route path**. For example:

* `app/about/page.js` → `/about`
* `app/services/page.js` → `/services`

---

#### 17. **Q: What's required to create a valid page route in Next.js (App Router)?**

**A:** A **folder** (route name) and a **`page.js`** file inside it with a default-exported React component.

---

#### 18. **Q: What file extension should you use when working with TypeScript in Next.js?**

**A:** Use `.tsx` instead of `.ts` for components that return JSX.

---

#### 19. **Q: What’s the role of `children` in `layout.js`?**

**A:** It acts like a **placeholder for the page content**, similar to the `root` div in React.

---

#### 20. **Q: Can you navigate to a route directly via URL?**

**A:** Yes, you can type the route in the browser, e.g., `/about`, and it will work if the route exists.

---

Would you like this formatted as a printable PDF or turned into a flashcard set for easy learning?
