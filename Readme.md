# cv-seba

Source for my CV site — <https://sebasortiz1989.github.io/cv-seba/>

## The CV itself

`cv/` holds the canonical CV — **PDF, markdown source, and print-ready HTML.**
That folder is the source of truth; the site is a second rendering of the same
facts and the two must be updated together. See [`cv/README.md`](cv/README.md).

## The site

React + Vite. All content lives in one place: the `personalData`, `experiences`,
`education`, `skills` and `projects` objects at the top of `src/App.jsx`. Edit
those; the components render whatever is in them and empty arrays are skipped.

```bash
npm install
npm run dev      # local preview
npm run deploy   # builds and publishes to GitHub Pages
```

The site does not update until `npm run deploy` runs — pushing to `master`
changes the source only.
