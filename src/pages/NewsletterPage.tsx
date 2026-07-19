import { useBlog } from "../context/BlogContext";
import NewsletterForm from "../components/NewsletterForm";
import ArticleCard from "../components/ArticleCard";

export default function NewsletterPage() {
  const { articles } = useBlog();
  const preview = articles.slice(4, 7);

  return (
    <>
      <section className="border-b border-gray-200 px-4 py-16 text-center dark:border-white/10 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
          Newsletters
        </p>
        <h1 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white">
          Stories and interviews
        </h1>
        <p className="mx-auto mt-4 max-w-md text-gray-500 dark:text-gray-400">
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </p>
        <div className="mt-8">
          <NewsletterForm />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-sm font-medium text-gray-500 dark:text-gray-400">
          All blog posts
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
