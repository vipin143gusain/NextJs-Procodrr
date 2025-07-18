Here’s a list of **simple interview questions with answers** based on the transcript you provided, covering **nested dynamic routes in Next.js**:

---

## ✅ **Interview Questions and Answers (Based on the Transcript)**

---

### 🔹1. **What are nested dynamic routes in Next.js?**

**Answer:**
Nested dynamic routes are routes that have dynamic parameters and are placed inside another route folder. For example, `/blog/[blogId]/comments/[commentId]` is a nested dynamic route where `blogId` and `commentId` are dynamic values.

---

### 🔹2. **Why do we need nested dynamic routes?**

**Answer:**
We use nested dynamic routes when a dynamic resource (like a comment) belongs to another dynamic resource (like a blog). It helps structure the application better and access related data through URL parameters.

---

### 🔹3. **How do you create a dynamic route in Next.js?**

**Answer:**
To create a dynamic route, we use square brackets in the file name, like `[id].js`, inside the `app` or `pages` directory.

---

### 🔹4. **How do you create a nested dynamic route for comments on a blog post?**

**Answer:**

1. Create a folder named `[blogId]` inside `/app/blog/`
2. Inside `[blogId]`, create a folder named `comments`
3. Inside `comments`, create a folder `[commentId]`
4. Add a `page.js` inside `[commentId]` to render individual comments

---

### 🔹5. **How do you access the `blogId` and `commentId` in the nested route?**

**Answer:**
We use the `params` object provided by Next.js.
Example:

```js
export default function Page({ params }) {
  const { blogId, commentId } = params;
  return <div>Comment {commentId} on Blog {blogId}</div>;
}
```

---

### 🔹6. **What happens if there is no child route? Can the parent access child params?**

**Answer:**
No. In Next.js, a parent route cannot access child route parameters. Only the current route can access its own and its parent’s dynamic params.

---

### 🔹7. **What file or folder is required to create a route in Next.js?**

**Answer:**
In the `app` directory of Next.js 13+, each route requires a `page.js` (or `page.tsx`) file. Just creating a file like `comments.js` without a proper directory and `page.js` will not create a route.

---

### 🔹8. **What is the difference between `/comments` and `/comments/[commentId]`?**

**Answer:**

* `/comments` shows the list of all comments for a blog.
* `/comments/[commentId]` shows a specific comment with its ID.

---

### 🔹9. **How do you debug and confirm which `params` you’re receiving in a route?**

**Answer:**
You can log `params` in your component using `console.log(params)` to view values like `blogId` and `commentId`.

---

### 🔹10. **What is a “slug” in the context of routing?**

**Answer:**
A "slug" is the part of the URL that is dynamic or uniquely identifies a resource. For example, in `/blog/mobile/comments/10`, "mobile" is the blog slug (blogId) and "10" is the commentId.

---

Would you like a printable PDF version of this for study or sharing?
