import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { Article, Page } from "../types";
import { ARTICLES } from "../data/articles";

interface BlogContextValue {
  // Single source of truth for every published article.
  articles: Article[];

  // Simple client-side navigation, no router dependency required.
  currentPage: Page;
  selectedSlug: string | null;
  goToHome: () => void;
  goToNewsletter: () => void;
  openArticle: (slug: string) => void;

  // Pagination state for the "All blog posts" grid on the home page.
  currentPageNumber: number;
  pageSize: number;
  totalPages: number;
  paginatedArticles: Article[];
  setPageNumber: (page: number) => void;
}

const BlogContext = createContext<BlogContextValue | undefined>(undefined);

const PAGE_SIZE = 6;

export function BlogProvider({ children }: { children: ReactNode }) {
  const [articles] = useState<Article[]>(ARTICLES);
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const totalPages = Math.max(1, Math.ceil(articles.length / PAGE_SIZE));

  const paginatedArticles = useMemo(() => {
    const start = (currentPageNumber - 1) * PAGE_SIZE;
    return articles.slice(start, start + PAGE_SIZE);
  }, [articles, currentPageNumber]);

  const value: BlogContextValue = {
    articles,
    currentPage,
    selectedSlug,
    goToHome: () => {
      setCurrentPage("home");
      setSelectedSlug(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    goToNewsletter: () => {
      setCurrentPage("newsletter");
      setSelectedSlug(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    openArticle: (slug: string) => {
      setSelectedSlug(slug);
      setCurrentPage("article");
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    currentPageNumber,
    pageSize: PAGE_SIZE,
    totalPages,
    paginatedArticles,
    setPageNumber: (page: number) => {
      const clamped = Math.min(Math.max(page, 1), totalPages);
      setCurrentPageNumber(clamped);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  };

  return (
    <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
  );
}

export function useBlog(): BlogContextValue {
  const ctx = useContext(BlogContext);
  if (!ctx) throw new Error("useBlog must be used within a BlogProvider");
  return ctx;
}
