Here are **interview questions with simple answers** based on the transcript you provided about **dynamic routing in Next.js**. These are tailored to test both conceptual understanding and practical knowledge.

---

### 🔹 Basic Interview Questions and Answers

---

**Q1. What is a dynamic route in Next.js?**
**A:** A dynamic route allows you to create pages where part of the URL can change based on data. For example: `/blogs/[id].js` matches `/blogs/1`, `/blogs/abc`, etc.

---

**Q2. How do you define a dynamic route in Next.js?**
**A:** You create a file inside the `app` or `pages` folder with square brackets, like `[slug].js`. The value in brackets becomes a route parameter.

---

**Q3. What is a slug in dynamic routing?**
**A:** A slug is the dynamic part of the URL. For example, in `/blogs/[slug]`, the `slug` can be any value like `coding`, `123`, etc.

---

**Q4. How do you access dynamic route parameters in Next.js (App Router)?**
**A:** In a server component, you get `params` and `searchParams` from the `props` object. Example:

```js
export default async function Page({ params }) {
  console.log(params.slug); // slug is the dynamic segment
}
```

---

**Q5. What's the difference between `params` and `searchParams` in Next.js?**
**A:**

* `params` refers to dynamic route segments (`/blogs/[id]`).
* `searchParams` refers to query strings (`?name=John`).

---

**Q6. How do you fix the issue when VS Code doesn’t suggest JSX autocomplete in `.js` files?**
**A:** Update your VS Code settings JSON with:

```json
"files.associations": {
  "*.js": "javascriptreact"
}
```

---

**Q7. What happens if you rename a dynamic route file and Next.js throws an error?**
**A:** Sometimes Next.js caches old paths. You can fix this by quitting and restarting the development server.

---

**Q8. Why is dynamic routing useful?**
**A:** It avoids creating multiple static files manually. For example, instead of having `blog1.js`, `blog2.js`, etc., you create one dynamic file and fetch content based on the route.

---

**Q9. Can we use multiple query parameters in the URL?**
**A:** Yes. Example:
`/blogs?name=vipin&age=38`
You can access them via `searchParams`.

---

**Q10. What’s the recommended naming convention for dynamic routes?**
**A:** Use semantic and meaningful names. For example:

* Folder: `blogs`
* File: `[blogId].js`
  This becomes: `/blogs/123`

---

### Bonus Practical Task

**Q11. How do you fetch a blog post dynamically using the `blogId` from the URL?**
**A:**

```js
export default async function BlogPage({ params }) {
  const { blogId } = params;
  const res = await fetch(`https://api.example.com/blogs/${blogId}`);
  const blog = await res.json();
  return <div>{blog.title}</div>;
}
```

---

Let me know if you'd like me to convert this into a PDF or flashcards format for quick revision.
