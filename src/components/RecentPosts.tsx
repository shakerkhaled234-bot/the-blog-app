import { Article } from "../types";
import { useBlog } from "../context/BlogContext";
import ArticleMeta from "./ArticleMeta";
import ArrowUpRightIcon from "./ArrowUpRightIcon";
import CategoryBadge from "./CategoryBadge";

interface RecentPostsProps {
  articles: Article[];
}

function TitleLink({ article }: { article: Article }) {
  const { openArticle } = useBlog();
  return (
    <button
      type="button"
      onClick={() => openArticle(article.slug)}
      className="flex items-start gap-1 text-left font-semibold text-gray-900 dark:text-white"
    >
      <span>{article.title}</span>
      <ArrowUpRightIcon className="mt-1 h-3.5 w-3.5 shrink-0" />
    </button>
  );
}

function BigFeaturedCard({ article }: { article: Article }) {
  const { openArticle } = useBlog();
  return (
    <div className="flex h-full flex-col">
      <button
        type="button"
        onClick={() => openArticle(article.slug)}
        className="mb-4 block flex-1 overflow-hidden rounded-2xl bg-gray-100 dark:bg-white/5"
      >
        <img
          src={article.coverImage}
          alt={article.title}
          className="h-full min-h-[240px] w-full object-cover"
          loading="lazy"
        />
      </button>
      <ArticleMeta author={article.author} date={article.date} />
      <div className="mt-2">
        <TitleLink article={article} />
      </div>
      <p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
        {article.excerpt}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {article.categories.map((c) => (
          <CategoryBadge key={c.id} category={c} />
        ))}
      </div>
    </div>
  );
}

function SmallFeaturedCard({ article }: { article: Article }) {
  const { openArticle } = useBlog();
  return (
    <div className="flex gap-4">
      <button
        type="button"
        onClick={() => openArticle(article.slug)}
        className="block h-24 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-white/5 sm:h-28 sm:w-32"
      >
        <img
          src={article.coverImage}
          alt={article.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </button>
      <div className="min-w-0">
        <ArticleMeta author={article.author} date={article.date} />
        <div className="mt-1">
          <TitleLink article={article} />
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {article.categories.map((c) => (
            <CategoryBadge key={c.id} category={c} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BannerFeaturedCard({ article }: { article: Article }) {
  const { openArticle } = useBlog();
  return (
    <div>
      <button
        type="button"
        onClick={() => openArticle(article.slug)}
        className="relative block h-56 w-full overflow-hidden rounded-2xl bg-gray-900 sm:h-72"
      >
        <img
          src={article.coverImage}
          alt={article.title}
          className="h-full w-full object-cover opacity-90"
          loading="lazy"
        />
        {article.coverCaption && (
          <span className="absolute bottom-4 left-4 right-4 max-w-sm text-lg font-semibold leading-snug text-white sm:text-xl">
            {article.coverCaption}
          </span>
        )}
      </button>
      <div className="mt-4">
        <ArticleMeta author={article.author} date={article.date} />
        <div className="mt-2">
          <TitleLink article={article} />
        </div>
        <p className="mt-2 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
          {article.excerpt}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {article.categories.map((c) => (
            <CategoryBadge key={c.id} category={c} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function RecentPosts({ articles }: RecentPostsProps) {
  const [small1, big, small2, banner] = articles;
  if (!small1 || !big || !small2 || !banner) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-sm font-medium text-gray-500 dark:text-gray-400">
        Recent blog posts
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <BigFeaturedCard article={big} />
        </div>
        <div className="flex flex-col gap-8">
          <SmallFeaturedCard article={small1} />
          <SmallFeaturedCard article={small2} />
        </div>
      </div>

      <div className="mt-8">
        <BannerFeaturedCard article={banner} />
      </div>
    </section>
  );
}
