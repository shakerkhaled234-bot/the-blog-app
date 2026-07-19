import { Category } from "../types";

const COLOR_CLASSES: Record<Category["color"], string> = {
  gray: "bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-200",
  purple:
    "bg-purple-50 text-purple-700 dark:bg-purple-500/15 dark:text-purple-300",
  pink: "bg-pink-50 text-pink-700 dark:bg-pink-500/15 dark:text-pink-300",
};

interface CategoryBadgeProps {
  category: Category;
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${COLOR_CLASSES[category.color]}`}
    >
      {category.name}
    </span>
  );
}
