interface ArticleParagraphsProps {
  content: string;
}

export default function ArticleParagraphs({ content }: ArticleParagraphsProps) {
  const paragraphs = content.split(/\n\n+/);

  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="mt-4 text-base leading-relaxed text-gray-600 first:mt-0 dark:text-gray-300"
        >
          {paragraph}
        </p>
      ))}
    </>
  );
}
