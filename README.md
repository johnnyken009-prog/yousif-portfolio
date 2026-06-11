# Yousif Al-Abbasi Portfolio

A responsive recruiter-facing portfolio for a mechatronics student focused on automation, controls, instrumentation, industrial maintenance, and electro-mechanical work.

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

- The general mechatronics resume downloaded by the site is stored at `public/resume.pdf`.
- LinkedIn and GitHub links are configured near the bottom of `src/App.jsx`.
- Edit project, work, education, and recruiter-summary content in `src/App.jsx`.
- Edit the six technical skill chapters and their 3D positions in `src/components/skillHubData.js`.
- The interactive workbench scene is implemented in `src/components/SkillHub3D.jsx` and `src/components/SkillModule3D.jsx`.
- The 3D workbench is lazy-loaded so the recruiter-facing content can render before the Three.js bundle.
- Mobile and lower-power devices use reduced pixel density and disable scene shadows and panning.
- No profile photo is currently used; the interactive mechatronics workbench is the primary hero visual.
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
