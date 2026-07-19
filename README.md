# The Blog

React + TypeScript + Tailwind CSS implementation of the "The Blog" Figma design.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. `npm run build` type-checks and produces a production build.

## How the requirements are met

**1. Responsive, pixel-close, zero custom CSS**
Every element is styled with Tailwind utility classes only (`src/index.css` contains just the three `@tailwind` directives — no custom rules). Layouts use `sm:` / `md:` / `lg:` breakpoints throughout (grids, header nav, hero type scale, the bento "Recent blog posts" block, sidebar on the article page).

**2. Component architecture with props**
The UI is split into small, reusable, prop-driven components under `src/components` (`Header`, `Hero`, `ArticleCard`, `RecentPosts`, `AllPosts`, `Sidebar`, `Pagination`, `CategoryBadge`, `NewsletterForm`, `ThemeToggle`, etc.) composed into three pages under `src/pages` (`HomePage`, `ArticleDetailPage`, `NewsletterPage`). Nothing is hard-coded inside a component — content always arrives via props or context.

**3. State management holding the articles JSON**
`src/data/articles.ts` defines the 20-article dataset (typed via `src/types/index.ts`): each article has a cover image, a list of `sections` (each with its own image + written content), and a list of `categories`. `BlogContext` (`src/context/BlogContext.tsx`) loads this array into React state (`useState<Article[]>(ARTICLES)`) once at the top of the tree and exposes it — plus navigation and pagination state — to the whole app via context, so every component reads the "published articles" from one single source of truth.

**4. Dark mode / light mode with Tailwind only**
`tailwind.config.js` uses `darkMode: "class"`. `ThemeContext` (`src/context/ThemeContext.tsx`) keeps the current mode in React state, toggles the `dark` class on `<html>`, and persists the choice in `localStorage`. Every component styles its dark variant with Tailwind's `dark:` modifier — no UI library, no CSS-in-JS.

**5. Pagination via state, no library**
`BlogContext` slices the articles array by page number (`currentPageNumber`, `pageSize`, `totalPages`, `paginatedArticles`) using plain `useState`/`useMemo`. `src/components/Pagination.tsx` renders Previous/Next and numbered controls that call `setPageNumber`, entirely hand-rolled.

## Structure

```
src/
  types/           domain types (Article, Section, Category, ...)
  data/            the articles + categories dataset
  context/         ThemeContext (dark mode) and BlogContext (data/nav/pagination)
  components/      presentational, prop-driven building blocks
  pages/           HomePage, ArticleDetailPage, NewsletterPage
  utils/           formatDate helper
```

Navigation between Home / Article detail / Newsletter is handled by simple state in `BlogContext` (`currentPage`, `selectedSlug`) rather than a router library, since the brief only calls out state management.

## Notes

- Images are placeholder photos from `picsum.photos` (deterministic per-article seeds) — swap `coverImage` / section `image` URLs in `src/data/articles.ts` for real assets whenever you have them.
- Category badge colors cycle through three tones (gray / purple / pink) to match the Figma palette; adjust `COLOR_CLASSES` in `CategoryBadge.tsx` if you want an exact 1:1 category-to-color mapping.
