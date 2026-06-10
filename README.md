# Yousif Al-Abbasi Portfolio

A responsive recruiter-facing portfolio for a mechatronics engineering student, built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Personalize

- Replace `public/resume.pdf` with Yousif's real resume PDF. Keep the same filename so both download buttons continue to work.
- Replace the LinkedIn and GitHub placeholder links near the bottom of `src/App.jsx`.
- Edit project, skill, work, or education content in the data arrays at the top of `src/App.jsx`.
- Replace `public/og-image.svg` if you want a different social sharing preview.

## Deploy and connect `yousif.cc`

### Vercel

1. Import this folder into a new Vercel project.
2. Vercel should detect Vite automatically. The build command is `npm run build` and the output directory is `dist`.
3. In the project dashboard, open **Settings → Domains** and add `yousif.cc`.
4. Add the DNS records Vercel provides at your domain registrar. Add `www.yousif.cc` too if desired, then redirect it to the root domain.

### Netlify

Use `npm run build` as the build command and `dist` as the publish directory. Add `yousif.cc` under domain management and follow the supplied DNS instructions.

## Notes

- Site metadata and canonical URLs already use `https://yousif.cc`.
- The site uses Google Fonts. To make it fully self-hosted, download DM Sans and Space Mono and update the font declarations in `src/styles.css`.
