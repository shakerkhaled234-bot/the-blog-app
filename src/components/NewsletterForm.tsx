import { FormEvent, useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <div className="mx-auto max-w-md">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:gap-3"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500"
        />
        <button
          type="submit"
          className="shrink-0 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
        >
          Subscribe
        </button>
      </form>

      <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        We care about your data in our{" "}
        <a href="#" className="underline underline-offset-2">
          privacy policy
        </a>
        .
      </p>

      {submitted && (
        <p className="mt-2 text-xs font-medium text-purple-600 dark:text-purple-400">
          Thanks for subscribing!
        </p>
      )}
    </div>
  );
}
