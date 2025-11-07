# 🎧 Audiophile E-commerce Website

This is a professional, multi-page e-commerce front-end and backend application built from a challenging Figma design. The primary focus was achieving **pixel-perfect responsiveness** and implementing a robust **serverless checkout and email system**.

The site utilizes a component-driven architecture with Next.js and integrates a highly scalable, real-time backend using Convex.

### [✨ View Live Demo Here](https://[(https://audiophile-ecommerce-seven-ruby.vercel.app/)]

---

## 💡 Key Features Implemented

* **Pixel-Perfect Responsive Design:** Built meticulously from the desktop, tablet, and mobile Figma designs using Tailwind CSS, ensuring visual fidelity down to the pixel.
* **Adaptive Header/Hero:** A single, "smart" Header component that dynamically changes its height and content (Hero Banner on Home, Category Title on Category pages) based on the current route.
* **Full Serverless Backend (Convex):**
    * **Secure Checkout:** Implemented a full checkout workflow where cart contents and totals are validated and finalized securely on the server side (`orders.tsx`).
    * **Transactional Email:** Used a Convex Node.js Action (`email.tsx`) integrated with **Nodemailer** to send transactional order confirmation emails using Gmail SMTP (requires App Password).
    * **Dynamic Data:** Product catalog, pricing, and related product lists are served from the Convex database.
* **Global State Management (Zustand):** Used the Zustand library for managing the entire shopping cart state (add, remove, quantity update) across the application.
* **Form Validation:** Implemented comprehensive client-side form validation using **React Hook Form** and **Zod**.

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | **Next.js 13/14** (App Router) | React Framework for routing and server components. |
| **Styling** | **Tailwind CSS V3** | Utility-first CSS framework for rapid, responsive design. |
| **State** | **Zustand** | Lightweight, fast global state management for the shopping cart. |
| **Backend/DB** | **Convex** | Real-time, serverless backend for database, queries, and mutations. |
| **Forms** | **React Hook Form / Zod** | Form management and schema validation. |
| **Email** | **Nodemailer** | Node.js library used within a Convex action to send mail via SMTP. |

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### 1. Prerequisites

You must have Node.js (version 18+) installed.

### 2. Backend Setup (Convex)

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Initialize Convex:** Start the development server. This links your local files to a Convex project and pushes your schema/functions.
    ```bash
    npx convex dev
    ```
3.  **Seed the Database:** Once `convex dev` is running, open your Convex Dashboard (URL is provided in the console). Navigate to the **"Functions"** tab and **Run** the `products:seedProducts` mutation to populate the database with all products.

### 3. Email Configuration (Required for Checkout)

For the Node.js email action to work, you must set secure credentials in your Convex dashboard:

1.  **Generate an App Password:** If using Gmail, follow the instructions to generate a **16-character App Password** (using 2-Step Verification).
2.  **Set Environment Variables:** Go to **Convex Dashboard** > **Settings** > **Environment Variables** and set the following (using your own email and the App Password):
    ```
    EMAIL_USER           = your-email@gmail.com
    EMAIL_PASS           = [YOUR 16-CHAR APP PASSWORD]
    EMAIL_SERVER_HOST    = smtp.gmail.com
    EMAIL_SERVER_PORT    = 465
    ```

### 4. Run the Frontend

In a separate terminal window, start the Next.js frontend:

```bash
npm run dev
