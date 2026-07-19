import { Article } from "../types";
import { useBlog } from "../context/BlogContext";
import ArticleMeta from "./ArticleMeta";
import ArrowUpRightIcon from "./ArrowUpRightIcon";
import CategoryBadge from "./CategoryBadge";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const { openArticle } = useBlog();

  return (
    <article className="flex flex-col">
      <button
        type="button"
        onClick={() => openArticle(article.slug)}
        className="mb-4 block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-white/5"
      >
        <img
          src={article.coverImage}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </button>

      <ArticleMeta author={article.author} date={article.date} />

      <button
        type="button"
        onClick={() => openArticle(article.slug)}
        className="mt-2 flex items-start gap-1 text-left text-lg font-semibold text-gray-900 dark:text-white"
      >
        <span>{article.title}</span>
        <ArrowUpRightIcon className="mt-1.5 h-4 w-4 shrink-0" />
      </button>

      <p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
        {article.excerpt}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {article.categories.map((category) => (
          <CategoryBadge key={category.id} category={category} />
        ))}
      </div>
    </article>
  );
}
