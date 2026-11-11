# Pandraju Rahul Karthikeya — Portfolio Website 🚀

A modern, high-performance portfolio website built with **React 18 / 19, Vite, and Tailwind CSS**, tailored for **Software Development Engineering (SDE)** and **AI / Machine Learning Engineering** roles.

---

## ⚡ Instant Preview (Zero Dependencies)
You can test and view your portfolio right away without running any commands:
1. Navigate to this directory in Windows Explorer:
   ```
   C:\Users\rahul\.gemini\antigravity\scratch\rahul-portfolio
   ```
2. Double-click **`preview.html`** to open it in your browser (Chrome, Edge, etc.).

---

## 🛠️ Tech Stack
- **Framework**: React 18 / 19
- **Build Tool**: Vite (Lightning fast HMR & optimized production bundles)
- **Styling**: Tailwind CSS with custom glassmorphism and developer dark theme
- **Icons**: Lucide React
- **Design System**: Deep slate `#080c14`, electric blue `#3b82f6`, cyan `#06b6d4`, and emerald `#10b981`

---

## 💻 Running the Full React + Vite Project Locally

### Step 1: Install Node.js and Git (if not already installed)
Open **PowerShell as Administrator** or run:
```powershell
winget install OpenJS.NodeJS.LTS
winget install Git.Git
```
*(Or download Node.js LTS from [nodejs.org](https://nodejs.org/) and Git from [git-scm.com](https://git-scm.com/)).*

### Step 2: Install Dependencies & Run
In PowerShell or Terminal inside this folder:
```bash
# Install node dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser!

---

## 📦 Pushing to Your GitHub

Follow these steps to create a new GitHub repository and push your code:

1. **Create a new repository on GitHub**:
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `portfolio` or `rahul-karthikeya`
   - Set to **Public**
   - Do **not** initialize with README or .gitignore (we already have them)
   - Click **Create repository**

2. **Initialize Git and Push**:
   In your terminal inside `rahul-portfolio`:
   ```bash
   git init
   git add .
   git commit -m "feat: Initial commit of developer portfolio"
   git branch -M main
   git remote add origin https://github.com/rahulkarthikeya/portfolio.git
   git push -u origin main
   ```

---

## 🌐 Free 1-Click Deployment

### Option A: Deploy on Vercel (Recommended — Easiest & Fastest)
1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click **"Add New Project"** -> Import your `portfolio` repository.
3. Vercel automatically detects **Vite**. Click **"Deploy"**.
4. You get a live URL (e.g., `rahul-karthikeya.vercel.app`) in under 60 seconds with automatic deployments on every `git push`!

### Option B: Deploy on GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `package.json`, add:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run:
   ```bash
   npm run deploy
   ```
4. In your GitHub repo settings -> **Pages** -> Source: Select `gh-pages` branch.

---

## 🎨 Project Structure

```
rahul-portfolio/
├── index.html                   # Main Vite HTML entry
├── preview.html                 # Standalone instant browser preview
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite configuration (with relative base path)
├── tailwind.config.js           # Tailwind color & font extensions
├── postcss.config.js            # PostCSS configuration
├── .gitignore                   # Ignore node_modules, dist, logs
├── README.md                    # Setup, GitHub & Deployment Guide
├── public/                      # Static assets (favicons, resume.pdf)
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main layout container
    ├── index.css                # Global styles, scrollbar & utilities
    ├── data/
    │   └── portfolioData.js     # Single source of truth for all info & projects
    └── components/
        ├── Navbar.jsx           # Responsive header with navigation & links
        ├── Hero.jsx             # Headline, target roles & metric badges
        ├── SpecializationCards.jsx # SDE & Systems vs. AI & ML focus
        ├── Projects.jsx         # Interactive project grid with filters
        ├── Skills.jsx           # Categorized skills matrix
        ├── Experience.jsx       # Salesforce internship & hackathon awards
        ├── Education.jsx        # SRM University AP details & coursework
        ├── Contact.jsx          # Email copy, message form & socials
        └── Footer.jsx           # Copyright & back-to-top button
```

---

## 📝 Updating Your Content
All your portfolio details, links, and projects are centralized in:
[`src/data/portfolioData.js`](./src/data/portfolioData.js)

To update your projects, hackathons, or contact details, simply edit this file!

---

### Adding Your Resume PDF
To let recruiters download your PDF resume:
1. Place your resume PDF in the `public/` directory (e.g. `public/resume.pdf`).
2. Update `resumeUrl: "/resume.pdf"` in `src/data/portfolioData.js`.
