Here’s a list of **interview questions** with **simple and clear answers** based on the transcript you shared, focused on **SSG (Static Site Generation)**, **dynamic routing**, and **`dynamicParams`** in **Next.js App Router**:

---

### ✅ Basic Questions

**1. What is Static Site Generation (SSG) in Next.js?**
**Answer:**
SSG means pages are pre-rendered at **build time**. Once built, those pages are served instantly without needing server processing.

---

**2. What happens if a user visits a dynamic page that was not generated at build time?**
**Answer:**
The page is generated **on-the-fly at runtime** and served to the user. This is known as **Incremental Static Generation**.

---

**3. How does Next.js know how many pages to generate at build time?**
**Answer:**
Next.js uses the `getStaticPaths` function to define which dynamic routes (e.g., `/blog/[id]`) should be pre-rendered.

---

**4. What is `dynamicParams` in Next.js App Router?**
**Answer:**
`dynamicParams` is a setting that controls whether dynamic pages not listed in `generateStaticParams()` can be generated at runtime.

---

**5. What happens if we set `export const dynamicParams = false` in a dynamic route?**
**Answer:**
Only the pages listed during build time will work. Any other page visited will return **404 Not Found**.

---

**6. What is the default value of `dynamicParams` in Next.js?**
**Answer:**
The default value is `true`, which means pages not pre-rendered can still be generated when accessed.

---

**7. Will `dynamicParams = false` have any effect in development mode?**
**Answer:**
No, in **development mode**, all pages are generated dynamically regardless of the setting.

---

**8. When should you set `dynamicParams = false`?**
**Answer:**
When you want to strictly control which pages exist and avoid runtime page generation — like a static blog with a fixed number of posts.

---

**9. What happens if data (like blog posts) keeps increasing and we want new pages to be generated automatically?**
**Answer:**
Keep `dynamicParams` set to `true` (or just don’t define it), so that new pages can be generated dynamically as needed.

---

**10. What command do you run to build your Next.js app for production?**
**Answer:**
`npm run build`

---

Let me know if you'd like MCQs, scenario-based questions, or coding-based interview questions on this topic too.
