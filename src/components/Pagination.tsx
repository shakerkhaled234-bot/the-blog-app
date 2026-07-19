import { useBlog } from "../context/BlogContext";

function getPageNumbers(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages = new Set<number>([1, total, current]);
  if (current - 1 > 1) pages.add(current - 1);
  if (current + 1 < total) pages.add(current + 1);

  const sorted = Array.from(pages).sort((a, b) => a - b);
  const result: (number | "ellipsis")[] = [];

  sorted.forEach((page, index) => {
    if (index > 0) {
      const prev = sorted[index - 1];
      if (page - prev === 2) {
        result.push(prev + 1);
      } else if (page - prev > 2) {
        result.push("ellipsis");
      }
    }
    result.push(page);
  });

  return result;
}

export default function Pagination() {
  const { currentPageNumber, totalPages, setPageNumber } = useBlog();

  if (totalPages <= 1) return null;

  const pageNumbers = getPageNumbers(currentPageNumber, totalPages);

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex items-center justify-between border-t border-gray-200 pt-6 dark:border-white/10"
    >
      <button
        type="button"
        onClick={() => setPageNumber(currentPageNumber - 1)}
        disabled={currentPageNumber === 1}
        className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900 disabled:opacity-40 disabled:hover:text-gray-500 dark:text-gray-400 dark:hover:text-white dark:disabled:hover:text-gray-400"
      >
        <span aria-hidden="true">&larr;</span>
        <span className="hidden sm:inline">Previous</span>
      </button>

      <div className="flex items-center gap-1">
        {pageNumbers.map((page, index) =>
          page === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              className="px-2 text-sm text-gray-400 dark:text-gray-500"
            >
              &hellip;
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => setPageNumber(page)}
              aria-current={page === currentPageNumber ? "page" : undefined}
              className={`h-9 min-w-[2.25rem] rounded-lg px-1 text-sm font-medium transition-colors ${
                page === currentPageNumber
                  ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                  : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        type="button"
        onClick={() => setPageNumber(currentPageNumber + 1)}
        disabled={currentPageNumber === totalPages}
        className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900 disabled:opacity-40 disabled:hover:text-gray-500 dark:text-gray-400 dark:hover:text-white dark:disabled:hover:text-gray-400"
      >
        <span className="hidden sm:inline">Next</span>
        <span aria-hidden="true">&rarr;</span>
      </button>
    </nav>
  );
}
