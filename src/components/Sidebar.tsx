import { Article } from "../types";
import { useBlog } from "../context/BlogContext";
import ArticleMeta from "./ArticleMeta";
import ArrowUpRightIcon from "./ArrowUpRightIcon";

interface SidebarProps {
  articles: Article[];
  activeSlug?: string;
}

export default function Sidebar({ articles, activeSlug }: SidebarProps) {
  const { openArticle } = useBlog();

  return (
    <aside className="w-full shrink-0 lg:w-64">
      <h2 className="mb-6 text-sm font-medium text-gray-500 dark:text-gray-400">
        Recent blog posts
      </h2>
      <div className="flex flex-col gap-6">
        {articles.map((article) => (
          <button
            key={article.id}
            type="button"
            onClick={() => openArticle(article.slug)}
            className={`flex gap-3 text-left ${
              article.slug === activeSlug ? "opacity-100" : "opacity-90 hover:opacity-100"
            }`}
          >
            <span className="block h-14 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-white/5">
              <img
                src={article.coverImage}
                alt={article.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </span>
            <span className="min-w-0">
              <ArticleMeta author={article.author} date={article.date} />
              <span className="mt-1 flex items-start gap-1 text-sm font-semibold text-gray-900 dark:text-white">
                <span className="line-clamp-2">{article.title}</span>
                <ArrowUpRightIcon className="mt-0.5 h-3 w-3 shrink-0" />
              </span>
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}
