# Safia Asad Abdulkadir — Professional Portfolio Website

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![WCAG](https://img.shields.io/badge/WCAG_2.2-AA_Compliant-success.svg)

A modern, production-grade, accessible personal portfolio website built for **Safia Asad Abdulkadir** — Junior Software Developer and Remote Administrative & Data Specialist based in Somalia.

---

## 🌟 Overview & Key Highlights

This website is designed for international job applications, paid remote internships, non-governmental organizations (NGOs), technology companies, and global distributed teams. It features genuine academic records, verifiable capstone projects, authentic certificates, and balanced representation across software engineering and remote data operations.

* **Verified Academic Record:** B.Sc. in Computer Science candidate at East Africa University (Galkayo Campus) with a **3.90 / 4.00 cumulative GPA** and Semester 1, 4, and 6 Top Student recognitions.
* **Hands-On Software Projects:** Featuring the **Fududeeye Service** (Undergraduate Thesis CRM & Marketplace web application), Hotel Room Booking System, and Real Estate Management System.
* **Balanced Dual-Focus:** Equal emphasis on software development (React, JavaScript, Python, SQL) and remote digital support (Microsoft Excel, data cleaning, Word document formatting, and PDF conversion).
* **Document Lightbox & ATS CV Viewer:** Built-in high-resolution certificate and transcript viewer (East Africa University, Cisco Networking Academy, Amtel LTD) plus direct download of the official ATS-friendly CV PDF.
* **High Accessibility Standards:** Adheres to WCAG 2.2 AA contrast standards, keyboard navigable menus and modals, visible focus rings, and screen-reader accessible attributes.
* **Privacy & Security Focused:** Zero secret leakage, input-validated contact form with client-side mailto fallback, and no arbitrary percentages or fake metrics.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) with custom navy palette |
| **Icons** | [Lucide React](https://lucide.dev/) (consistent & accessible) |
| **Bundler & Tooling** | [Vite 5](https://vitejs.dev/) |
| **SEO & Structured Data** | JSON-LD `Person` schema, OpenGraph tags, `robots.txt`, `sitemap.xml` |

---

## 📁 Project Structure

```text
Sofia-Portfolio/
├── public/
│   ├── documents/
│   │   ├── Safia_Asad_Abdulkadir_CV.pdf          # Official ATS-formatted CV PDF
│   │   ├── amtel-internship-completion-letter.jpg  # Verified Amtel LTD recommendation
│   │   ├── cisco-cybersecurity-certificate.jpg    # Cisco Networking Academy certificate
│   │   ├── eau-ai-certificate.jpg                 # EAU AI-Powered Software Dev certificate
│   │   ├── eau-partial-transcript.pdf             # Semesters I–VIII coursework transcript
│   │   └── eau-transcript-certification.pdf       # EAU temporary transcript certification
│   ├── images/
│   │   ├── safia-profile-defense.jpg              # Primary hero photo (Thesis Defense 2026)
│   │   └── safia-profile-desk.jpg                 # About section photo with thesis binder
│   ├── favicon.svg                                # Custom SA monogram icon
│   ├── robots.txt                                 # Search engine indexing rules
│   └── sitemap.xml                                # Canonical search sitemap
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                             # Sticky navigation with mobile drawer
│   │   ├── Hero.tsx                               # Hero banner with verified badges & CTAs
│   │   ├── About.tsx                              # Dual-pillar biography & academic highlights
│   │   ├── Skills.tsx                             # Filterable skill matrix with context notes
│   │   ├── Experience.tsx                         # Chronological experience & document triggers
│   │   ├── Projects.tsx                           # Reusable project cards with GitHub links
│   │   ├── EducationCertificates.tsx              # University degrees & verified certificate grid
│   │   ├── RemoteServices.tsx                     # Remote offerings & global timezone panel
│   │   ├── Languages.tsx                          # Qualitative trilingual proficiencies
│   │   ├── Contact.tsx                            # Validated contact form & direct channels
│   │   ├── Footer.tsx                             # Quick links, back-to-top & copyright
│   │   ├── DocumentModal.tsx                      # High-res certificate/transcript lightbox
│   │   └── CVModal.tsx                            # ATS CV interactive modal & PDF download
│   ├── data/
│   │   └── portfolioData.ts                       # Centralized data model (easy to edit)
│   ├── types/
│   │   └── index.ts                               # TypeScript interfaces
│   ├── App.tsx                                    # Master application component
│   ├── index.css                                  # Tailwind directives & focus styles
│   └── main.tsx                                   # React DOM root entry
├── index.html                                     # HTML shell, fonts, OpenGraph, JSON-LD
├── tailwind.config.js                             # Custom Tailwind configuration
├── tsconfig.json                                  # Strict TypeScript compiler options
└── package.json                                   # NPM scripts & dependencies
```

---

## 🚀 Getting Started Locally

### Prerequisites

Ensure you have **Node.js** (v18.0 or later, v22 recommended) and **npm** installed.

```bash
node -v
npm -v
```

### Installation

1. Clone or open the repository folder:
   ```bash
   cd Sofia-Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. Run a production build:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 📝 Customization Guide: Where to Update Information

All personal details, projects, and career milestones are cleanly centralized in `src/data/portfolioData.ts`:

| What you want to update | Location in Code / Assets |
|---|---|
| **Full name, headline, bio, email, phone** | `src/data/portfolioData.ts` -> `personalInfo` |
| **Profile photos** | Replace files in `public/images/` or update path in `personalInfo.profileImages` |
| **CV / Resume PDF** | Replace `public/documents/Safia_Asad_Abdulkadir_CV.pdf` |
| **Certificates & verification images** | Add images/PDFs to `public/documents/` and link in `certificationsData` |
| **Projects & GitHub repositories** | Edit or add items to `projectsData` in `src/data/portfolioData.ts` |
| **Skills & tools** | Edit categories in `skillCategories` in `src/data/portfolioData.ts` |
| **LinkedIn or WhatsApp links** | Update `linkedinUrl` and `whatsappUrl` in `personalInfo` |
| **Contact form backend service** | Attach your free Formspree or EmailJS endpoint in `src/components/Contact.tsx` |

---

## 🌐 Deployment Instructions

You can host this website completely **free** on any modern static hosting platform.

### Option 1: Deploy on Vercel (Recommended — 2 minutes)

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Safia Asad Abdulkadir portfolio"
   git branch -M main
   git remote add origin https://github.com/Sofia-Asad/Sofia-Portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and sign in with your GitHub account (`Sofia-Asad`).
3. Click **"Add New"** > **"Project"** and import `Sofia-Portfolio`.
4. Keep the default settings (Framework: Vite, Build Command: `npm run build`, Output Directory: `dist`).
5. Click **"Deploy"**.
6. You will instantly receive a live public HTTPS URL (e.g. `https://safia-portfolio.vercel.app`).

### Option 2: Deploy on Netlify

1. Sign in to [netlify.com](https://www.netlify.com/) with GitHub.
2. Click **"Add new site"** > **"Import an existing project"**.
3. Select your repository `Sofia-Portfolio`.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click **"Deploy site"**.

### Option 3: Deploy on GitHub Pages

1. In your GitHub repository settings, go to **Pages** (under Code and automation).
2. Under **Build and deployment > Source**, choose **GitHub Actions**.
3. Choose the standard **Static HTML / Vite** workflow or run `npx gh-pages -d dist`.

---

## 🔒 Security, Privacy & Integrity

* **Zero Secret Leakage:** No private API keys or tokens are stored in the client bundle.
* **Privacy Protection:** No sensitive national identity document numbers or passports are published.
* **Factual Verification:** All listed certifications, GPA scores, and internship duties are supported by original university and corporate documentation.

---

## 📄 License

This portfolio codebase is open-source and released under the [MIT License](LICENSE).
Personal photographs, university transcripts, and certificates belong exclusively to **Safia Asad Abdulkadir**.
