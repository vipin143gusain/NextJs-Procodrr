Here are **interview questions with simple answers** based on the transcript you provided about **Incremental Static Regeneration (ISR)** in Next.js:

---

### 🔹 1. What is Incremental Static Regeneration (ISR) in Next.js?

**Answer:**
ISR allows you to update static pages after you’ve built your site. It regenerates pages **in the background** when a user visits them after a specified time.

---

### 🔹 2. Is ISR a standalone rendering method?

**Answer:**
No, ISR is an **extension of Static Site Generation (SSG)**. It only works on pages that are statically generated.

---

### 🔹 3. How do you enable ISR in a Next.js page?

**Answer:**
You export a variable called `revalidate` from your `getStaticProps`:

```js
export const revalidate = 5;
```

This means the page will be regenerated **after 5 seconds** (when a user visits the page).

---

### 🔹 4. What is the default value of `revalidate`?

**Answer:**
The default is `false`, which means the page will **never** be regenerated after build.

---

### 🔹 5. Does the page regenerate every X seconds automatically?

**Answer:**
No, the page regenerates **only when a user visits** the page **after** the revalidation time has passed.

---

### 🔹 6. Can you use `revalidate` inside the fetch function?

**Answer:**
Yes, you can pass it as part of the fetch config using `next.revalidate`:

```js
await fetch(url, {
  next: { revalidate: 5 }
});
```

This works at the **fetch level** instead of the page level.

---

### 🔹 7. What's the difference between setting `revalidate` globally vs inside fetch?

**Answer:**

* Global `revalidate` updates the **entire page**.
* Fetch-level `revalidate` only updates the **data fetched** by that fetch call.

---

### 🔹 8. What happens if a page is visited before the revalidate time?

**Answer:**
The old static version is served. The regeneration won't happen until a user visits **after** the revalidate time.

---

### 🔹 9. What is the real-world use case of ISR?

**Answer:**
Pages where data changes over time like:

* Weather updates
* News articles
* Product availability

---

### 🔹 10. How do you calculate the `revalidate` time for longer intervals like 1 month?

**Answer:**
You calculate the time in **seconds**:

```js
60 (seconds) * 60 (minutes) * 24 (hours) * 30 (days)
```

So `revalidate: 2592000` will revalidate the page after one month.

---

Would you like these as flashcards or formatted into a PDF?
