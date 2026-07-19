import { ThemeProvider } from "./context/ThemeContext";
import { BlogProvider, useBlog } from "./context/BlogContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import NewsletterPage from "./pages/NewsletterPage";

function PageOutlet() {
  const { currentPage } = useBlog();

  switch (currentPage) {
    case "article":
      return <ArticleDetailPage />;
    case "newsletter":
      return <NewsletterPage />;
    case "home":
    default:
      return <HomePage />;
  }
}

function AppShell() {
  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-ink-950 dark:text-white">
      <Header />
      <main>
        <PageOutlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BlogProvider>
        <AppShell />
      </BlogProvider>
    </ThemeProvider>
  );
}
