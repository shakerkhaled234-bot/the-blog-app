import { formatDate } from "../utils/formatDate";

interface ArticleMetaProps {
  author: string;
  date: string;
}

export default function ArticleMeta({ author, date }: ArticleMetaProps) {
  return (
    <p className="text-xs font-medium text-purple-600 dark:text-purple-400">
      {author} <span className="text-gray-400 dark:text-gray-500">&middot;</span>{" "}
      {formatDate(date)}
    </p>
  );
}
