# Awingfu.github.io

Personal portfolio website built with Astro and Tailwind CSS.

## Tech Stack

- [Astro](https://astro.build) - Modern static site generator
- [Tailwind CSS v4](https://tailwindcss.com) - Utility-first CSS framework (via `@tailwindcss/vite`)
- [TypeScript](https://www.typescriptlang.org) - Type safety

## Development

### Prerequisites

- Node.js 20.19.0+ or 22.0.0+
- npm 9.6.5+

### Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start local dev server at `localhost:4321`       |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview your build locally before deploying      |
| `npm run astro ...`       | Run Astro CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Project Structure

```
/
├── public/           # Static assets (images, favicons, etc.)
│   └── images/       # Image assets
├── src/
│   ├── layouts/      # Astro layout components
│   │   └── Layout.astro
│   ├── pages/        # Astro pages (file-based routing)
│   │   └── index.astro
│   └── styles/       # Global CSS
│       └── global.css
├── .github/
│   └── workflows/    # GitHub Actions for CI/CD
│       └── deploy.yml
└── package.json
```

## Deployment

The site automatically deploys to GitHub Pages when you push to the `master` branch via GitHub Actions. Pull requests targeting `master` also trigger a build check (no deployment).

### Manual Deployment Setup

1. Go to your repository Settings → Pages
2. Under "Build and deployment", set Source to "GitHub Actions"
3. Push to `master` branch to trigger deployment

## Credits

- Original design inspiration from Prologue by HTML5 UP
- [Cloudflare Setup](https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare)
- Icons: [Favicon.io](https://favicon.io)
