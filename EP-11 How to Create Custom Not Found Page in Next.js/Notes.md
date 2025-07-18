Here’s a set of **interview questions and simple answers** based on your provided transcript. These are suitable for someone familiar with **Next.js (App Router)** and cover key concepts related to **custom 404 (Not Found) pages**:

---

### ✅ **1. How does Next.js handle undefined routes by default?**

**Answer:**
Next.js shows a default 404 page (black screen with a "404" message) when a user visits a route that doesn’t exist.

---

### ✅ **2. How can you customize the 404 page in Next.js (App Router)?**

**Answer:**
You can create a file named `not-found.js` or `not-found.tsx` inside the relevant route directory. Next.js will automatically use this file to render a custom 404 page.

---

### ✅ **3. What is the purpose of customizing the 404 page?**

**Answer:**
To match the **look and feel** of the website and provide a better user experience, especially with brand colors, design consistency, or specific error messages.

---

### ✅ **4. How do you programmatically trigger a 404 page in Next.js?**

**Answer:**
You can import the `notFound()` function from `next/navigation` and call it based on a condition.

```ts
import { notFound } from 'next/navigation';

if (id === 'test') {
  notFound();
}
```

---

### ✅ **5. Can you trigger `notFound()` for dynamic routes?**

**Answer:**
Yes. For example, in a blog page with dynamic IDs, you can check if the blog ID is valid and use `notFound()` if it’s not.

---

### ✅ **6. How can you ensure only numeric blog IDs are accepted?**

**Answer:**
Use a **regular expression** to validate if the blog ID consists only of numbers.

```ts
const isValid = /^\d+$/.test(blogId);
if (!isValid) notFound();
```

---

### ✅ **7. Where should you place the `not-found.tsx` file?**

**Answer:**
Place it:

* In the **root app directory** for a global 404.
* Inside a **dynamic route folder** to show a custom 404 for that specific dynamic route.

---

### ✅ **8. Can you show different messages for different 404 pages (e.g., blog vs. service)?**

**Answer:**
Yes, by placing different `not-found.tsx` files in different dynamic route folders, you can customize the message for each route type.

---

### ✅ **9. Can you access route parameters inside `not-found.tsx`?**

**Answer:**
No, route parameters like `params.id` are **not available** in the `not-found.tsx` file because it's rendered outside the context of the original route.

---

### ✅ **10. How to show the current path in a custom 404 page?**

**Answer:**
Convert the 404 page into a **Client Component**, then use the `usePathname()` hook from `next/navigation`.

```tsx
'use client';
import { usePathname } from 'next/navigation';

const NotFound = () => {
  const pathname = usePathname();
  return <div>Path {pathname} not found</div>;
};
```

---

### ✅ **11. Why do header and footer appear on the 404 page in App Router?**

**Answer:**
Because they’re part of the global `layout.tsx` file, which wraps all routes — including the 404 page.

---

### ✅ **12. How can you remove the header and footer from the 404 page?**

**Answer:**
Use **Route Groups** to isolate the 404 page so that it doesn’t inherit the global layout. (Explained in the next video.)

---

Let me know if you want:

* A formatted **PDF/Markdown version**
* A **flashcard version** for practice
* Questions for **senior-level roles** too
