# Slice 8 — Deployment and route verification

## Goal
Make the completed frontend safe to hand off for Vercel deployment without changing hosting or production state.

## In scope
- Verify the production build output and Vercel-compatible SPA fallback behavior.
- Verify `/resume.pdf` exists and is reachable.
- Verify internal route refreshes resolve through the Vite/Vercel configuration.
- Check document title, viewport, theme metadata, and accessible route entry points.
- Record deployment instructions and remaining production smoke checks.

## Out of scope
- Deploying to Vercel.
- Railway/backend migration.
- Live AI chat or API integration.
- New content or visual redesign.

## Definition of done
- Production build passes.
- Résumé asset is present and loads.
- All internal routes have a documented refresh/fallback strategy.
- No deployment secrets or backend dependencies are introduced.
- Vercel deployment runbook is recorded.

## Human approval gate
Deployment itself requires explicit approval after local verification. Do not publish or alter production state automatically.
