import { useBlog } from "../context/BlogContext";
import { getArticleBySlug } from "../data/articles";
import { formatDate } from "../utils/formatDate";
import Sidebar from "../components/Sidebar";
import ArticleParagraphs from "../components/ArticleParagraphs";

export default function ArticleDetailPage() {
  const { articles, selectedSlug, goToHome } = useBlog();

  const article = selectedSlug ? getArticleBySlug(selectedSlug) : undefined;

  if (!article) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-gray-500 dark:text-gray-400">Article not found.</p>
        <button
          type="button"
          onClick={goToHome}
          className="mt-4 text-sm font-semibold text-purple-600 dark:text-purple-400"
        >
          &larr; Back to blog
        </button>
      </section>
    );
  }

  const sidebarArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 5);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-12 lg:flex-row">
        <Sidebar articles={sidebarArticles} activeSlug={article.slug} />

        <article className="min-w-0 flex-1">
          <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
            {formatDate(article.date)}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {article.title}
          </h1>

          <div className="relative mt-8 overflow-hidden rounded-2xl bg-gray-900">
            <img
              src={article.coverImage}
              alt={article.title}
              className="h-64 w-full object-cover opacity-90 sm:h-96"
              loading="lazy"
            />
            {article.coverCaption && (
              <span className="absolute bottom-4 left-4 right-4 max-w-md text-lg font-semibold leading-snug text-white sm:text-xl">
                {article.coverCaption}
              </span>
            )}
          </div>

          <div className="mt-8 max-w-2xl">
            {article.sections.map((section) => (
              <div key={section.id} className="mt-8 first:mt-0">
                {section.heading && (
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {section.heading}
                  </h2>
                )}
                <div className={section.heading ? "mt-3" : ""}>
                  <ArticleParagraphs content={section.content} />
                </div>
                {section.image && (
                  <figure className="mt-6">
                    <img
                      src={section.image}
                      alt={section.imageCaption ?? section.heading ?? article.title}
                      className="w-full rounded-2xl object-cover"
                      loading="lazy"
                    />
                    {section.imageCaption && (
                      <figcaption className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
                        {section.imageCaption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
