# Yuvraj Sehgal — Portfolio

Personal portfolio of **Yuvraj Sehgal** — Computer Science M.Sc. researcher at Brock
University and AI/ML engineer. Built with React, Vite, and Tailwind CSS, with
interactive 3D elements rendered in Three.js.

**Live site:** [17yuvrajsehgal.github.io/Yuvraj-Portfolio-Website](https://17yuvrajsehgal.github.io/Yuvraj-Portfolio-Website/)

## Sections

- **About** — overview, highlights, and GitHub contribution graph
- **Experience** — roles at Brock University (AI research, Mitacs Accelerate fellowship with Ciena), Mengalo, and Scotiabank, plus tech stack
- **Research & Publications** — peer-reviewed papers at FSE 2026 and the Journal of Systems and Software
- **Projects** — research systems (trace generation, LLM agents, AIOps datasets) and industry-style builds
- **Education & Awards** — degrees, scholarships, and funding
- **Contact** — contact form that opens the visitor's email app with the message pre-filled (no backend or credentials needed)

## Tech Stack

- [React 18](https://react.dev) + [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Three.js](https://threejs.org) via [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) and [drei](https://github.com/pmndrs/drei)
- [Framer Motion](https://www.framer.com/motion/) animations

## Run Locally

```bash
git clone https://github.com/17YuvrajSehgal/Yuvraj-Portfolio-Website
cd Yuvraj-Portfolio-Website
npm install
npm run dev
```

The dev server prints its local URL (typically `http://localhost:5173`).

## Deploy

The site deploys to GitHub Pages:

```bash
npm run deploy
```

## Structure

```
src/
├── assets/       # images, logos, project covers
├── components/   # Hero, About, Experience, Research, Works, Education, Contact, canvas/
├── constants/    # all site content (experience, publications, projects, education)
├── hoc/          # SectionWrapper
└── utils/        # motion variants
```

Most content updates only require editing `src/constants/index.js`.
