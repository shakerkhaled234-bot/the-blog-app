export type CategoryColor = "gray" | "purple" | "pink";

export interface Category {
  id: string;
  name: string;
  color: CategoryColor;
}

export interface ArticleSection {
  id: string;
  heading?: string;
  content: string;
  image?: string;
  imageCaption?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  coverImage: string;
  coverCaption?: string;
  categories: Category[];
  sections: ArticleSection[];
}

export type ThemeMode = "light" | "dark";

export type Page = "home" | "article" | "newsletter";
