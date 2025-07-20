Here are **interview questions** with **simple answers** based on the transcript about **static rendering**, **dynamic rendering**, and rendering behavior in **Next.js**:

---

### 🧠 **Basic Concept Questions**

**1. What is static rendering in Next.js?**
**Answer:** Static rendering means HTML pages are generated at build time. These pages don’t change per request and are served from the server as-is.

**2. What is dynamic rendering in Next.js?**
**Answer:** Dynamic rendering means HTML pages are generated at runtime, per request, based on dynamic data or route parameters.

**3. Are static and dynamic rendering both part of server-side rendering?**
**Answer:** Yes, both are forms of server-side rendering in Next.js.

**4. When does static rendering happen?**
**Answer:** During the build step using `npm run build`.

**5. When does dynamic rendering happen?**
**Answer:** At runtime, when a request is made to a dynamic route.

---

### ⚙️ **Execution Behavior Questions**

**6. What happens to static page code in production mode?**
**Answer:** It runs only once during the build. No re-execution on every request.

**7. What happens to dynamic page code in production mode?**
**Answer:** It runs on each request to that dynamic route.

**8. What is the difference in rendering between development and production mode?**
**Answer:** In development mode, both static and dynamic pages may re-run their code often. In production, static pages don’t re-run their code; dynamic ones do on each request.

**9. What does the console.log behavior tell us in Next.js development vs production?**
**Answer:** In development, console logs appear for every page load. In production, console logs appear only for dynamic pages at runtime.

---

### 🌍 **Routing and Rendering Questions**

**10. Is a blog listing page usually static or dynamic?**
**Answer:** Static. It's generated during the build.

**11. Are individual blog detail pages static or dynamic?**
**Answer:** Dynamic. They are generated per request based on dynamic URL.

**12. How do we know if a route is dynamic in Next.js build output?**
**Answer:** Dynamic routes are marked with an "F" (fallback) in the build output.

---

### 🧪 **Practical Behavior Questions**

**13. What does `npm run build` do in Next.js?**
**Answer:** It builds static pages and prepares the app for production with optimized files.

**14. What happens if we add a console.log to a static page and build?**
**Answer:** The log will show only during build time, not during runtime in production.

**15. What happens if we go to a dynamic route like `/blog/100` that was not preloaded?**
**Answer:** A fetch request is sent to the server, and the dynamic content is rendered and shown in the browser.

---

### 🖥️ **Client-Side Rendering**

**16. Does Next.js also use client-side rendering?**
**Answer:** Yes. After server renders the page, React takes over and handles routing/client-side interactivity.

**17. How can we identify client-side rendering behavior in the browser?**
**Answer:** Through network requests, we can see fetch/XHR requests for dynamic content and observe that the full page doesn’t reload on navigation..

**18. What does RSC payload refer to?**
**Answer:** React Server Component payload. It's data sent from server to client for rendering server components.

---

Would you like these in **PDF format**, **MCQ format**, or with **code examples**?
