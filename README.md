# Sitemap Generator Pro 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Production-brightgreen.svg)]()
[![Developer](https://img.shields.io/badge/Powered%20By-HSINI%20MOHAMED-blueviolet.svg)](https://github.com/hsinidev)
[![SEO](https://img.shields.io/badge/SEO-Optimized-orange.svg)]()
[![Live Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://SitemapGenerator.doodax.com)

## 🌐 Live Demo
👉 **[Click here to view the Live Demo: SitemapGenerator.doodax.com](https://SitemapGenerator.doodax.com)**

---

## 📖 Project Description

**Sitemap Generator Pro** is a state-of-the-art, browser-based Single Page Application (SPA) developed to streamline technical SEO workflows. It provides a robust, privacy-focused solution for generating Google-compliant XML sitemaps instantly.

Unlike traditional server-side generators, this tool operates entirely within the client's browser using advanced JavaScript and React. This ensures zero data latency and complete privacy—your URLs never leave your device.

The application features a "Cosmic" aesthetic, utilizing a custom-built HTML5 Canvas particle engine to render a mesmerizing, multi-colored galaxy background. This design choice transforms a mundane technical task into an immersive and enjoyable user experience.

### Key Objectives
*   **Privacy First:** All processing occurs locally. No data transmission to backend servers.
*   **High Fidelity UI/UX:** A modern, glassmorphic interface with friendly navigation and rich animations.
*   **Educational Value:** Integrated comprehensive SEO guides and legal compliance resources.

---

## ✨ Features

*   **Instant XML Generation:** Real-time parsing of URL lists with immediate XML preview.
*   **Galaxy Particle Engine:** A custom physics-based animation engine rendering nebulas and starfields.
*   **Smart Modals:** Accessible, backdrop-blurred modals for "About", "Contact", "Privacy", and "Guides".
*   **SEO Optimization:** Fully integrated JSON-LD structured data, meta tags, and Open Graph protocols.
*   **Responsive Design:** Flawless experience across desktop, tablet, and mobile devices.

---

## 📂 Project Structure

This project follows a modern React structure with a clear separation of concerns.

```text
/
├── public/                   # Static Assets (Search Engine & Browser files)
│   ├── favicon.svg           # Scalable Vector Graphic Brand Icon
│   ├── robots.txt            # Crawler Directives
│   └── sitemap.xml           # Application's own Sitemap
├── components/               # React UI Components
│   ├── Footer.tsx            # Global Footer with Credits
│   ├── GalaxyBackground.tsx  # HTML5 Canvas Animation Core
│   ├── Header.tsx            # Navigation, Branding & Modal State
│   ├── Home.tsx              # Landing Page Hero Section
│   ├── Layout.tsx            # Global Layout Wrapper
│   ├── Modal.tsx             # Reusable Accessibility-focused Modal
│   └── SitemapGeneratorUI.tsx # Main Business Logic & UI
├── lib/
│   └── SitemapBuilder.ts     # Pure Typescript XML Generation Logic
├── utils/
│   └── SeoArticle.tsx        # Dynamic Content Component (SEO Guide)
├── App.tsx                   # Application Root & Routing Logic
├── types.ts                  # TypeScript Type Definitions
├── index.html                # Main Entry Point with SEO Meta Tags
├── index.tsx                 # React DOM Entry
└── README.md                 # Project Documentation
```

---

## 🛠 Technology Stack

*   **Frontend Library:** React 18
*   **Language:** TypeScript (Strict Mode)
*   **Styling:** Tailwind CSS (Utility-first framework)
*   **Animation:** HTML5 Canvas API (2D Context)
*   **Build System:** ES Modules / Vite-compatible

---

## 🚀 Installation & Setup

To run this project locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/hsinidev/sitemap-generator-pro.git
    ```

2.  **Navigate to the project directory**
    ```bash
    cd sitemap-generator-pro
    ```

3.  **Install dependencies**
    ```bash
    npm install
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```

---

## 📜 License & Credits

**Powered by:** [HSINI MOHAMED](https://github.com/hsinidev)  
**Contact:** hsini.web@gmail.com  
**Website:** doodax.com

This project is open-source and available under the **MIT License**.
