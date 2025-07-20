Based on the provided transcript, here are **interview-style questions with simple answers** focusing on **Next.js rendering paradigms** and related client/server behavior:

---

### 🧠 **1. What is a Rendering Paradigm in Next.js?**

**Simple Answer:**
A rendering paradigm defines *how and where* HTML for a page is generated—either on the **client** (browser) or the **server**.

---

### 🧠 **2. How many types of rendering does Next.js support?**

**Simple Answer:**
Next.js supports four types of rendering:

1. **CSR** – Client Side Rendering
2. **SSR** – Server Side Rendering
3. **SSG** – Static Site Generation
4. **ISR** – Incremental Static Regeneration

---

### 🧠 **3. How does React render pages by default?**

**Simple Answer:**
React uses **Client Side Rendering (CSR)** by default. It sends a blank HTML file with a `div#root` and loads everything through JavaScript.

---

### 🧠 **4. What is Server Side Rendering (SSR)?**

**Simple Answer:**
In SSR, the HTML is **generated on the server** and sent to the browser. This helps with faster first-page load and better SEO.

---

### 🧠 **5. What is Static Site Generation (SSG)?**

**Simple Answer:**
SSG pre-generates HTML **at build time**, so it can serve static pages very quickly. Ideal for pages that don't change often.

---

### 🧠 **6. What is Incremental Static Regeneration (ISR)?**

**Simple Answer:**
ISR allows updating static pages **after build time**, without rebuilding the whole app. Pages can regenerate in the background.

---

### 🧠 **7. What are the pros and cons of CSR?**

**Simple Answer:**
✅ Pros: Fast navigation, app-like experience
❌ Cons: Poor SEO, slow first page load (blank HTML)

---

### 🧠 **8. What are the pros and cons of SSR?**

**Simple Answer:**
✅ Pros: Better SEO, content is available in HTML
❌ Cons: Slower than CSR for user interactions

---

### 🧠 **9. How does Next.js use both SSR and CSR?**

**Simple Answer:**
Next.js renders the **first page** using SSR for SEO and performance, then **switches to CSR** for navigation between pages.

---

### 🧠 **10. How does Next.js improve SEO compared to React?**

**Simple Answer:**
Next.js sends **full HTML from the server** (SSR/SSG), so search engine bots can read content easily. React sends an empty page initially.

---

### 🧠 **11. What happens if JavaScript is disabled in CSR apps?**

**Simple Answer:**
If JavaScript is disabled, CSR apps (like React) show a blank page because content is rendered using JS.

---

### 🧠 **12. What files are loaded in a React (CSR) app?**

**Simple Answer:**
Only one HTML file is loaded. All pages/components are inside a big **JavaScript bundle**.

---

### 🧠 **13. What files are loaded in a Next.js (SSR/SSG) app?**

**Simple Answer:**
Each page (like `/about`, `/services`) has its own HTML file (in production) and is served separately.

---

### 🧠 **14. What are RSC files in Next.js?**

**Simple Answer:**
RSC stands for **React Server Components**. These are server-rendered parts of a page sent as small payloads.

---

### 🧠 **15. What is the difference between SSR and SSG in Next.js?**

**Simple Answer:**

* **SSR**: HTML is generated **at request time** (dynamic).
* **SSG**: HTML is generated **at build time** (static).

---

### 🧠 **16. When should you use SSG?**

**Simple Answer:**
Use SSG for pages with content that doesn’t change often, like blogs or landing pages.

---

### 🧠 **17. When should you use SSR?**

**Simple Answer:**
Use SSR for dynamic content, like dashboards or user-specific data.

---

### 🧠 **18. When should you use CSR?**

**Simple Answer:**
Use CSR for pages where SEO doesn’t matter, or for parts of an app loaded after user login.

---

### 🧠 **19. What is prefetching in Next.js?**

**Simple Answer:**
Next.js fetches page data **in advance** when a link becomes visible, so navigation feels instant.

---

### 🧠 **20. What is the benefit of ISR in a live app?**

**Simple Answer:**
With ISR, you can **update static pages** (like product info) after deployment without a full rebuild.

---

Would you like me to create a **PDF summary or flashcards** for these questions as well?
