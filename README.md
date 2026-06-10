# Kamal Digi Studio

A premium, modern, and highly interactive web application for **Kamal Digi Studio**, Udaipur's premium photography and videography studio. Designed with rich aesthetics, smooth animations, and glassmorphic UI panels to showcase high-end visual storytelling.

---

## 🌟 Key Features

- **Liquid Glass Theme**: Modern UI featuring beautiful glassmorphic cards, harmonized dark layouts, and vibrant gradient backdrops.
- **Dynamic Micro-Animations**: Smooth scroll reveal effects, hover states, floating elements, and page transitions powered by **Framer Motion**.
- **Interactive Portfolio Preview**: Highlighted galleries for Weddings, Pre-Weddings, Events, Portraits, Maternity, and Commercial shoots.
- **SEO Optimized**: Fully structured semantic HTML with unique metadata configuration per page for maximum discoverability.
- **Responsive Layout**: Designed for seamless accessibility across all device types—smartphones, tablets, and desktops.
- **Floating Contact Panel**: Quick links for booking inquiries via WhatsApp and direct calls.

---

## 🛠️ Tech Stack

- **Core**: React 19, TypeScript, HTML5
- **Build Tool**: Vite 8
- **Styling**: Vanilla CSS (Tailored HSL design system, CSS Variables)
- **Animations**: Framer Motion 12
- **Icons**: Lucide React

---

## 📁 Project Structure

```text
kamaldigi/
├── public/                 # Static assets (Favicons, Logos, Generated Images)
│   └── images/             # Visual portfolio previews and hero assets
├── src/
│   ├── components/         # Reusable UI components (Footer, AnimatedCounter, etc.)
│   ├── hooks/              # Custom React hooks (e.g., useSEO)
│   ├── pages/              # Page views (Home, About, Services, Testimonials, Contact)
│   ├── index.css           # Global stylesheets & HSL styling system
│   ├── main.tsx            # Application entry point
│   └── App.tsx             # Routing configuration
├── index.html              # HTML template
├── package.json            # Dependencies & build scripts
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Eshbanoliver/kamaldigi.git
   ```
2. Navigate to the project directory:
   ```bash
   cd kamaldigi
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to the local address displayed in the terminal (usually `http://localhost:5173`).

---

## 📦 Production & Deployment

### Build the Project

To compile the application and bundle optimized assets for production, run:
```bash
npm run build
```
This will compile TypeScript and generate a static bundle in the `dist/` directory.

### Preview Production Build

To test the built files locally before hosting:
```bash
npm run preview
```

### Static Hosting

The output files inside the `dist/` directory can be uploaded directly to any static web hosting provider (e.g., Hostinger, Netlify, Vercel, Nginx, or Apache).
