# PEPTQ Beta Standalone

This folder is now a standalone Vite + React app.

## Run locally

```powershell
npm install
npm run beta
```

The beta dev server runs on `http://127.0.0.1:5174`.

## Build beta output

```powershell
npm run build:beta
```

That command writes the beta site into `BETA_WEBSITE_ONLY_FOLDER`.

## Standard Vite commands

```powershell
npm run dev
npm run build
npm run preview
```

`BETA_VERSION/.env.beta` is already included for beta-mode endpoints.
