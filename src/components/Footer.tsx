const LINKS = ["Twitter", "LinkedIn", "Email", "RSS feed", "Add to Feedly"];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-gray-500 dark:text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <span>&copy; 2023</span>
        <div className="flex flex-wrap gap-4">
          {LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="underline-offset-2 hover:text-gray-900 hover:underline dark:hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
