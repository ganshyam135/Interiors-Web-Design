# Deployment Guide

## Overview

This repository contains a React + Vite frontend (in `client/`) and a Node/Express backend (in `server/`).

Goal: Deploy frontend to Vercel (static) and backend to Render (Node web service). Use Postgres for production persistence.

1. Prepare environment

---

- Create a Postgres database (Neon, Supabase, or Render Postgres) and copy the connection string.
- On Render, create a new Web Service (Free plan):
  - Build Command: `npm run build:full`
  - Start Command: `npm run start`
  - Add environment variable `DATABASE_URL` with the Postgres connection string.

2. Backend changes already applied

---

- `db/index.ts` now supports either `sqlite://path` (local) or a Postgres URL. For production, set `DATABASE_URL` to the Postgres URL.
- `render.yaml` exists in the repository for infra as code (you can edit the `envVars` values before deploying).

3. Frontend changes

---

- The frontend uses `VITE_API_URL` (an environment variable) as the API base URL when set. Set this variable on Vercel to your backend URL (e.g., `https://<your-render-service>.onrender.com`).
- If `VITE_API_URL` is not set, the frontend will use relative `/api/...` requests (good when you proxy via rewrites).

4. Vercel setup

---

- Create a Vercel project, point it to the repo, Root: repository root (the Vite config points to `client` as `root`).
- Use `vite build` (Vercel will read `vercel.json`) and output directory `dist/public`.
- Add `VITE_API_URL` in Project Settings if using Option B. Otherwise add rewrite rules to proxy `/api/*` to the Render backend.

5. Testing locally

---

- Build the entire project: `npm run build:full`
- Run production server locally: `NODE_ENV=production node dist/index.js`
- Test endpoints: `curl http://localhost:5000/api/services`

## Notes

- Do not rely on SQLite for production on Render; use Postgres.
- If you'd like, I can push these repo changes, add a Render service, and set the Vercel project env var for you if you grant access.
