

# Dwijesh Gontla | Systems Architect Portfolio

This is a professional portfolio website for Dwijesh Gontla, featuring integrated AI chat capabilities via Google Gemini.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [Firebase CLI](https://firebase.google.com/docs/cli) (Install via `npm install -g firebase-tools`)

### Setup & Local Development
1. **Clone the repository:**
   ```bash
   git clone https://github.com/DwijeshG/DJ-Website.git
   cd DJ-Website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add your Gemini API Key:
   ```env
   GEMINI_API_KEY=your_actual_key_here
   ```

4. **Run locally:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`.

## 🚢 How to Deploy

Since the Firebase project is already initialized, follow these steps to push updates live:

1. **Build the project:**
   This generates a production-ready `dist/` folder.
   ```bash
   npm run build
   ```

2. **Login to Firebase (if not already):**
   ```bash
   firebase login
   ```

3. **Deploy to Hosting:**
   ```bash
   firebase deploy --only hosting
   ```

**Live URL:** [https://dwijesh-gontla-portfolio.web.app](https://dwijesh-gontla-portfolio.web.app)

## 🛠 Tech Stack
- **Framework:** React 19 (TypeScript)
- **Bundler:** Vite
- **Styling:** Tailwind CSS (via CDN in index.html)
- **AI Engine:** Google Gemini SDK (`@google/genai`)
- **Hosting:** Firebase Hosting
