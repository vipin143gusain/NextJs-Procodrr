Here's a set of **simple interview questions and answers** based on the transcript you provided, focused on **Metadata API in Next.js**:

---

### ✅ **Basic Interview Questions on Metadata API in Next.js**

---

**1. What is metadata in a web page?**
**Answer:** Metadata is information about a page that is not visible directly on the page, like title, description, and favicon. It is usually placed inside the `<head>` tag.

---

**2. Where do we define metadata in a Next.js application?**
**Answer:** Metadata can be defined in the `layout.js` or `page.js` file using the `metadata` export in the app directory.

---

**3. How do you set a page title using Metadata API in Next.js?**
**Answer:** You export a `metadata` object with a `title` field like this:

```js
export const metadata = {
  title: "Technical Agency",
};
```

---

**4. How can you apply different metadata for each page?**
**Answer:** You can define a separate `metadata` object in each `page.js` file. This allows different titles or descriptions for each route.

---

**5. How do you make the title dynamic for a route with parameters, like a blog post?**
**Answer:** You use the `generateMetadata` async function. It lets you access route parameters and set metadata dynamically.

```js
export async function generateMetadata({ params }) {
  return {
    title: `Blog ${params.id} | Technical Agency`,
  };
}
```

---

**6. What is `title.template` in Next.js metadata API?**
**Answer:** It’s used to create a reusable format for titles. For example:

```js
title: {
  default: "Technical Agency",
  template: "%s | Technical Agency",
}
```

This makes page titles like “Home | Technical Agency”, “About | Technical Agency”, etc.

---

**7. What is `title.absolute` in metadata API?**
**Answer:** If you use `title.absolute`, it ignores the template and sets the title exactly as you write it. Useful when you want to override the default pattern.

---

**8. How do you add a description meta tag in Next.js?**
**Answer:** Add the `description` field inside the `metadata` object:

```js
export const metadata = {
  title: "About | Technical Agency",
  description: "This is the about page of our agency.",
};
```

---

**9. What is the use of metadata description?**
**Answer:** The `description` helps with SEO. Search engines use it to understand what the page is about.

---

**10. What should you do if metadata doesn't appear after making changes?**
**Answer:** Restart the Next.js development server to apply the changes properly.

---

Would you like a **printable version (PDF)** of these Q\&As or a **quiz format** to test your knowledge?
