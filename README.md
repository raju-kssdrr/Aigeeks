# DevScroll — AI Engineering Learning Platform

A curated learning platform for AI and Quantum Computing engineers. Structured tracks, lesson pages, roadmaps, and resources for the future-ready developer.

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Landing page |
| `tracks.html` | AI Engineering + Quantum Computing learning tracks |
| `lessons/` | 22 individual lesson pages (12 AI + 10 Quantum) |
| `resources.html` | Curated resources from Anthropic, NVIDIA, Google, Microsoft |
| `roadmap.html` | AI Engineering Roadmap — 10-step learning path |
| `video-paths.html` | AI Mastery Videos — Zero to Hero curated playlist |
| `harness-roadmap.html` | Harness Engineer Roadmap — 14-skill checklist with videos |
| `university.html` | Academy — Harvard, Stanford, MIT course audits |
| `agents.html` | AI Agents hub |
| `auth.html` | Sign up |
| `login.html` | Login |

## Stack

- Vanilla HTML/CSS/JS — no framework
- Deployed on **Netlify** (see `netlify.toml`)
- API proxy → Railway backend (`https://devscroll-web-production.up.railway.app`)

## Tracks

### AI Engineering for Devs (12 lessons)

| Module | Lessons |
|--------|---------|
| M1: LLM Orchestration | Prompt Engineering & Tuning · Function Calling & Tool Use |
| M2: RAG & Vector Data | Vector Embeddings · Semantic Search Strategies |
| M3: Agentic Systems | LangChain vs LangGraph · Auto-GPT Architectures |
| M4: Fine-tuning & Evaluation | LoRA & QLoRA · LLM Evaluation Metrics · RLHF & DPO |
| M5: Production Deployment | API Integration · Self-hosted LLMs (vLLM) · Cost Optimization |

### Quantum Computing for Devs (10 lessons)

| Module | Lessons |
|--------|---------|
| M1: Quantum Fundamentals | Qubits, Superposition & Entanglement · Quantum Gates & Circuits |
| M2: Quantum Algorithms | Grover's Search · Shor's Factoring |
| M3: Quantum ML | Variational Quantum Circuits · Quantum Neural Networks |
| M4: Noise & Error Correction | Quantum Error Correction · NISQ Algorithms & Mitigation |
| M5: Real Hardware | IBM Quantum & Qiskit Runtime · Amazon Braket & Azure Quantum |

Each lesson page includes concept cards, runnable code examples, curated resources, and prev/next navigation.

## Harness Engineer Roadmap

Skill checklist across 5 sections:
- Foundation
- Context Engineering
- Guide Design (Feedforward)
- Sensor Design (Feedback)
- Production & Iteration

Progress persisted in `localStorage`. Each skill links to a curated YouTube video.

## Security

- CSP headers configured in `netlify.toml`
- Open redirect protection on auth flows (`?next=` param validated)
- No secrets in codebase — `.env` and all variants gitignored

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
# No build step needed
python3 -m http.server 8080
# then open http://localhost:8080
```
