import { useBlog } from "../context/BlogContext";
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";

export default function AllPosts() {
  const { paginatedArticles } = useBlog();

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-sm font-medium text-gray-500 dark:text-gray-400">
        All blog posts
      </h2>

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      <Pagination />
    </section>
  );
}
