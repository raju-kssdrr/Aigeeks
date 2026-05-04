# DevScroll — AI Engineering Learning Platform

A curated learning platform for AI and Quantum Computing engineers. Structured tracks, roadmaps, and resources for the future-ready developer.

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Landing page |
| `tracks.html` | AI Engineering + Quantum Computing learning tracks |
| `resources.html` | Curated resources from Anthropic, NVIDIA, Google, Microsoft |
| `roadmap.html` | Engineering Master Roadmap — 10-step AI engineering path |
| `video-paths.html` | AI Mastery Videos — Zero to Hero curated playlist |
| `harness-roadmap.html` | Harness Engineer Roadmap — 14-skill checklist with videos |
| `university.html` | Academy — Harvard, Stanford, MIT course audits |
| `agents.html` | AI Agents hub |
| `auth.html` | Authentication |

## Stack

- Vanilla HTML/CSS/JS — no framework
- Deployed on **Netlify** (see `netlify.toml`)
- API proxy → Railway backend (`https://devscroll-web-production.up.railway.app`)

## Tracks

### AI Engineering for Devs
LLM Orchestration · RAG & Vector Data · Agentic Systems · Fine-tuning & Evaluation · Production Deployment

### Quantum Computing for Devs
Quantum Fundamentals · Quantum Algorithms · Quantum ML · Error Correction & NISQ · Real Hardware (IBM, AWS Braket, Azure)

## Harness Engineer Roadmap
Skill-based checklist across 5 sections:
- Foundation
- Context Engineering
- Guide Design (Feedforward)
- Sensor Design (Feedback)
- Production & Iteration

Progress persisted in `localStorage`. Each skill links to a curated YouTube video.

## Deploy

Netlify auto-deploys from `main` branch. Publish directory is `.` (root).

```toml
# netlify.toml
[build]
  publish = "."

[[redirects]]
  from = "/api/*"
  to = "https://devscroll-web-production.up.railway.app/api/:splat"
  status = 200
  force = true
```

## Local Dev

```bash
# No build step needed — open any HTML file directly
open index.html

# Or serve locally for auth/localStorage to work correctly
python3 -m http.server 8080
```
