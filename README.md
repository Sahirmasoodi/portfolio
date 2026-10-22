# Sahir Ul Islam — Portfolio

Frontend-only portfolio: React + Vite, Tailwind CSS, React Router, Framer Motion, Lucide.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview
```

## Before you publish
1. Put your resume at `public/Sahir-Ul-Islam-Resume.pdf` (the Download Resume button points to it).
2. Add your GitHub and LinkedIn URLs in `src/data/site.js` (buttons stay hidden until set).
3. Optional: add `public/images/profile.jpg` and set `profileImage` in `site.js`.
4. Add project screenshots to `public/images/` and set `screenshot`, `github`, `live` in `src/data/projects.js`.
   Empty values are hidden, never faked.

## Content lives in `src/data/`
`site.js` (name, links, nav) · `skills.js` · `experience.js` · `projects.js` · `achievements.js` · `education.js`

## Host on a static server
For clean URLs/404 routing, configure your host to serve `index.html` for unknown paths (Netlify/Vercel do this with a one-line rewrite).
