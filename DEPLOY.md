# DEPLOY INSTRUCTIONS

## Option 1: Vercel (Recommended)

1. Push to GitHub:
```bash
gh repo create adrian-portfolio-elite --public --source=. --push
```

2. Deploy to Vercel:
- Go to https://vercel.com/new
- Import the GitHub repo
- Click Deploy

## Option 2: Netlify

```bash
npm run build
npx netlify deploy --prod --dir=dist
```

## Option 3: Manual Vercel CLI

```bash
vercel login
vercel --prod
```

---

## Current Status

✅ **Local dev server running:** http://localhost:5173/
✅ **Production build ready**
✅ **Git initialized**

**Project:** `/Users/opcwadmin/adrian-portfolio-elite`
