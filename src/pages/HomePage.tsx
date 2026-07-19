import { useBlog } from "../context/BlogContext";
import Hero from "../components/Hero";
import RecentPosts from "../components/RecentPosts";
import AllPosts from "../components/AllPosts";

export default function HomePage() {
  const { articles } = useBlog();
  const recent = articles.slice(0, 4);

  return (
    <>
      <Hero />
      <RecentPosts articles={recent} />
      <AllPosts />
    </>
  );
}
