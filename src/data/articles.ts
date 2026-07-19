import { Article } from "../types";
import { getCategories } from "./categories";

function img(seed: string, w = 800, h = 600): string {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

const RAW: Array<Omit<Article, "categories"> & { categoryIds: string[] }> = [
  {
    id: "1",
    slug: "migrating-to-linear-101",
    title: "Migrating to Linear 101",
    excerpt:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    author: "Phoenix Baker",
    date: "2023-01-01",
    coverImage: "/assets/image/migrating.png",
    categoryIds: ["design", "research"],
    sections: [
      {
        id: "s1",
        content:
          "Switching project trackers always feels risky, but a clean migration plan turns it into a routine afternoon rather than a week-long headache. Start by auditing every open issue and deciding what actually still matters before you move a single ticket.",
        image: "/assets/image/mapping.jpg",
        imageCaption: "Setting up a fresh Linear workspace",
      },
      {
        id: "s2",
        heading: "Mapping your workflow",
        content:
          "Linear's states map closely to most agile boards, so the fastest path is to recreate your existing columns first and refine the automation rules afterward. Keep the initial migration boring; save the clever workflow tweaks for week two.",
      },
    ],
  },
  {
    id: "2",
    slug: "ux-review-presentations",
    title: "UX review presentations",
    excerpt:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    date: "2023-01-01",
    coverImage: "/assets/image/ux.png",
    categoryIds: ["design", "research", "presentation"],
    sections: [
      {
        id: "s1",
        content:
          "A strong UX review presentation is less about polish and more about sequence: show the problem before the solution, and let real user quotes do the persuading. Stakeholders remember stories, not slide counts.",
        image: "/assets/image/breaking.jpg",
      },
      {
        id: "s2",
        heading: "Structuring the narrative",
        content:
          "Open with the research question, walk through what you observed, and close with a recommendation stated in a single sentence. Anything that doesn't serve that arc belongs in the appendix, not the main deck.",
      },
    ],
  },
  {
    id: "3",
    slug: "building-your-api-stack",
    title: "Building your API Stack",
    excerpt:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manging them.",
    author: "Lana Steiner",
    date: "2023-01-01",
    coverImage: "/assets/image/building.png",
    categoryIds: ["design"],
    sections: [
      {
        id: "s1",
        content:
          "A modern API stack usually settles into three layers: a schema-first design tool, a mocking layer for early frontend work, and a monitoring layer once traffic actually arrives. Picking all three on day one is rarely necessary.",
        image: "/assets/image/demo.jpg",
      },
    ],
  },
  {
    id: "4",
    slug: "grid-system-for-better-design-user-interface",
    title: "Grid system for better Design User Interface",
    excerpt:
      "A grid is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements.",
    author: "Olivia Rhye",
    date: "2023-01-01",
    coverImage: "/assets/image/grid.png",
    coverCaption:
      "Climate Endgame: Exploring catastrophic climate change scenarios",
    categoryIds: ["design", "interface"],
    sections: [
      {
        id: "s1",
        content:
          "Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.\n\nDefinition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        heading: undefined,
      },
      {
        id: "s2",
        heading: "Common Grid Structures in Websites and Interfaces",
        content:
          "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.\n\nColumn grid involves dividing a page into vertical columns. UI elements and content are aligned to these columns.\n\nModular grid extends the column grid further by adding rows to it. The intersection of rows and columns make up modules, which are great for e-commerce and listing pages, as rows are repeatable to accommodate scrolling.\n\nHierarchical grid: Content is organized by importance using rows, columns, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        image:"/assets/image/breaking.jpg",
        imageCaption:
          "Column, modular, and hierarchical grid structures compared",
      },
      {
        id: "s3",
        heading: "Breaking Down the Grid",
        content:
          "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.\n\nColumns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentage-based values and not fixed values, so the grid can adjust to fit the width of the screen.\n\nGutters: The gutter is the space between columns that separates elements and content from different breakpoints. Gutter widths are fixed values that can change based on different breakpoints, whereas smaller gutters are appropriate for smaller screens like mobile.",
        image: "/assets/image/beaking.jpg",
        imageCaption: "Anatomy of a grid: column, gutter, and margin",
      },
    ],
  },
  {
    id: "5",
    slug: "bill-walsh-leadership-lessons",
    title: "Bill Walsh leadership lessons",
    excerpt:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    author: "Alec Whitten",
    date: "2023-01-01",
    coverImage: "/assets/image/bill.png",
    categoryIds: ["leadership", "management", "presentation"],
    sections: [
      {
        id: "s1",
        content:
          "Bill Walsh's turnaround of the 49ers is often reduced to a single scheme, but the real lesson was cultural: he wrote a detailed standard of performance before he had the roster to meet it, and he held the team to it anyway.",
        image: "/assets/image/sea.jpg",
      },
      {
        id: "s2",
        heading: "Process over outcome",
        content:
          "Walsh famously refused to talk about winning a championship in year one. Instead he obsessed over the execution of individual plays, trusting that results would follow the standard rather than the other way around.",
      },
    ],
  },
  {
    id: "6",
    slug: "pm-mental-models",
    title: "PM mental models",
    excerpt:
      "Mental models are simple expressions of complex processes or relationships.",
    author: "Demi Wilkinson",
    date: "2023-01-01",
    coverImage: "/assets/image/pm.png",
    categoryIds: ["product", "research", "frameworks"],
    sections: [
      {
        id: "s1",
        content:
          "The best product managers borrow their reasoning tools from other fields entirely: opportunity cost from economics, second-order effects from systems thinking, and reversible-versus-irreversible decisions from Bezos's old memos.",
        image: "/assets/image/fly.jpg",
      },
      {
        id: "s2",
        heading: "A short working list",
        content:
          "Keep a handful of models close: the 80/20 rule for prioritization, inversion for spotting risk, and the map-is-not-the-territory reminder for whenever a dashboard starts to feel more real than the customer it describes.",
      },
    ],
  },
  {
    id: "7",
    slug: "what-is-wireframing",
    title: "What is Wireframing?",
    excerpt:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    author: "Candice Wu",
    date: "2023-01-01",
    coverImage: "/assets/image/wireframing.jpg",
    categoryIds: ["design", "research", "presentation"],
    sections: [
      {
        id: "s1",
        content:
          "A wireframe strips a screen down to structure: what's on it, how it's grouped, and where the eye should land first. No color, no type treatment, just boxes and labels doing the honest work of layout.",
        image: "/assets/image/product.jpg",
      },
      {
        id: "s2",
        heading: "Low vs high fidelity",
        content:
          "Low-fidelity wireframes are disposable by design, meant to be argued over and redrawn in minutes. High-fidelity wireframes come later, once the structure has already survived a few rounds of scrutiny.",
      },
    ],
  },
  {
    id: "8",
    slug: "how-collaboration-makes-us-better-designers",
    title: "How collaboration makes us better designers",
    excerpt:
      "Collaboration can make our teams stronger, and our individual designs better.",
    author: "Natali Craig",
    date: "2023-01-01",
    coverImage: "/assets/image/collaboration.jpg",
    categoryIds: ["design", "research"],
    sections: [
      {
        id: "s1",
        content:
          "Working alone produces fast drafts and slow blind spots. A second set of eyes, even a skeptical one, tends to catch the assumption you stopped noticing three revisions ago.",
        image: "/assets/image/narrative.jpg",
      },
    ],
  },
  {
    id: "9",
    slug: "our-top-10-javascript-frameworks-to-use",
    title: "Our top 10 Javascript frameworks to use",
    excerpt:
      "JavaScript frameworks make development easier with extensive features and functionalities.",
    author: "Drew Cano",
    date: "2023-01-01",
    coverImage: "/assets/image/top-10.jpg",
    categoryIds: ["software-development", "tools", "saas"],
    sections: [
      {
        id: "s1",
        content:
          "Framework fatigue is real, but most teams only ever need to seriously evaluate three or four options before the decision comes down to team familiarity and ecosystem maturity rather than raw benchmarks.",
        image: "/assets/image/fidelity.jpg",
      },
      {
        id: "s2",
        heading: "Picking for the team, not the demo",
        content:
          "A framework that wins a synthetic benchmark can still lose in production if your team spends the first quarter fighting its conventions. Weigh hiring pool and documentation quality as heavily as raw speed.",
      },
    ],
  },
  {
    id: "10",
    slug: "podcast-creating-a-better-cx-community",
    title: "Podcast: Creating a better CX Community",
    excerpt:
      "Starting a community doesn't need to be complicated, but you do get what you pay for.",
    author: "Orlando Diggs",
    date: "2023-01-01",
    coverImage: "/assets/image/podcast.jpg",
    categoryIds: ["podcasts", "customer-success", "presentation"],
    sections: [
      {
        id: "s1",
        content:
          "Every thriving support community starts with a handful of overly generous early members. Identify them, thank them publicly, and give them tools before you worry about growth tactics.",
        image: "/assets/image/breaking.jpg",
      },
    ],
  },
  {
    id: "11",
    slug: "design-systems-that-actually-scale",
    title: "Design systems that actually scale",
    excerpt:
      "A design system is only as useful as the discipline behind maintaining it across dozens of teams.",
    author: "Olivia Rhye",
    date: "2023-01-02",
    coverImage: "/assets/image/design.jpg",
    categoryIds: ["design", "interface", "software-development"],
    sections: [
      {
        id: "s1",
        content:
          "The gap between a design system that scales and one that quietly rots is almost always ownership: someone has to say no to one-off components, or the library becomes a graveyard of near-duplicates.",
        image: "/assets/image/demo.jpg",
      },
      {
        id: "s2",
        heading: "Versioning like a product",
        content:
          "Treat breaking changes to your component library the same way you'd treat a public API: changelogs, deprecation windows, and a migration guide, not a silent Slack message.",
      },
    ],
  },
  {
    id: "12",
    slug: "the-case-for-slower-onboarding",
    title: "The case for slower onboarding",
    excerpt:
      "Rushing new users to value can backfire when it skips the context they need to stay.",
    author: "Lana Steiner",
    date: "2023-01-02",
    coverImage: "/assets/image/onboarding.jpg",
    categoryIds: ["product", "research"],
    sections: [
      {
        id: "s1",
        content:
          "Time-to-value dashboards reward speed, but a user who reaches the aha moment without understanding why it happened churns just as easily as one who never got there at all.",
        image: "/assets/image/process.jpg",
      },
    ],
  },
  {
    id: "13",
    slug: "writing-tickets-engineers-actually-want-to-read",
    title: "Writing tickets engineers actually want to read",
    excerpt:
      "A well-written ticket saves more time than any status meeting ever will.",
    author: "Demi Wilkinson",
    date: "2023-01-02",
    coverImage: "/assets/image/tickets.jpg",
    categoryIds: ["management", "software-development"],
    sections: [
      {
        id: "s1",
        content:
          "The best tickets read like a short brief, not a transcript: context, the actual ask, and an explicit definition of done, in that order.",
        image: "/assets/image/list.jpg",
      },
      {
        id: "s2",
        heading: "Skip the essay",
        content:
          "If a ticket needs three paragraphs of background, the background probably belongs in a linked doc, not repeated in every related ticket that touches the same system.",
      },
    ],
  },
  {
    id: "14",
    slug: "a-short-history-of-the-hamburger-menu",
    title: "A short history of the hamburger menu",
    excerpt:
      "Three lines stacked on top of each other have survived four decades of interface trends.",
    author: "Candice Wu",
    date: "2023-01-02",
    coverImage: "/assets/image/hamburger.jpg",
    categoryIds: ["design", "interface"],
    sections: [
      {
        id: "s1",
        content:
          "The icon predates the smartphone by decades, first appearing on the Xerox Star in 1981 as a way to hide options the screen simply had no room to show.",
        image: "/assets/image/hamburger.jpg",
      },
    ],
  },
  {
    id: "15",
    slug: "remote-standups-that-dont-waste-anyones-morning",
    title: "Remote standups that don't waste anyone's morning",
    excerpt:
      "A daily meeting is supposed to remove blockers, not become one itself.",
    author: "Alec Whitten",
    date: "2023-01-02",
    coverImage: "/assets/image/morning.jpg",
    categoryIds: ["management", "leadership"],
    sections: [
      {
        id: "s1",
        content:
          "Async written standups solve the timezone problem, but they only work if someone actually reads them. A five-minute synchronous huddle for blockers only tends to survive longer than a fully async format.",
        image: "/assets/image/sky.jpg",
      },
    ],
  },
  {
    id: "16",
    slug: "choosing-a-color-palette-that-holds-up",
    title: "Choosing a color palette that holds up",
    excerpt:
      "A palette that looks great on a hero image can fall apart the moment real content arrives.",
    author: "Natali Craig",
    date: "2023-01-02",
    coverImage: "/assets/image/palette.jpg",
    categoryIds: ["design", "presentation"],
    sections: [
      {
        id: "s1",
        content:
          "Test a palette against your worst content, not your best: a long error message, a five-line table row, a form with a validation state. Marketing pages rarely reveal a palette's real limits.",
        image: "/assets/image/sea.jpg",
      },
    ],
  },
  {
    id: "17",
    slug: "what-changes-when-your-api-hits-v2",
    title: "What changes when your API hits v2",
    excerpt:
      "Versioning an API is easy. Communicating the change to every consumer is the hard part.",
    author: "Drew Cano",
    date: "2023-01-02",
    coverImage: "/assets/image/api.jpg",
    categoryIds: ["software-development", "tools"],
    sections: [
      {
        id: "s1",
        content:
          "Most v2 migrations fail not on the server but in the changelog: consumers need a diff they can act on, not a paragraph of prose buried in a release note.",
        image: "/assets/image/fly.jpg",
      },
      {
        id: "s2",
        heading: "Deprecate loudly",
        content:
          "A deprecation warning that only shows up in server logs might as well not exist. Surface it in the response headers and in any dashboard your consumers actually look at.",
      },
    ],
  },
  {
    id: "18",
    slug: "the-quiet-cost-of-context-switching",
    title: "The quiet cost of context switching",
    excerpt:
      "Every notification carries a hidden tax that doesn't show up until the afternoon.",
    author: "Orlando Diggs",
    date: "2023-01-02",
    coverImage: "/assets/image/cost.jpg",
    categoryIds: ["management", "product"],
    sections: [
      {
        id: "s1",
        content:
          "Studies on task switching consistently find the interruption itself is cheap; it's the re-orientation afterward, remembering where you were, that eats the real time.",
        image: "/assets/image/mapping.jpg",
      },
    ],
  },
  {
    id: "19",
    slug: "interviewing-users-without-leading-them",
    title: "Interviewing users without leading them",
    excerpt:
      "The way you phrase a question can quietly hand the user the answer you wanted to hear.",
    author: "Phoenix Baker",
    date: "2023-01-02",
    coverImage: "/assets/image/leading.jpg",
    categoryIds: ["research", "product"],
    sections: [
      {
        id: "s1",
        content:
          "Swap 'would you use a feature like this' for 'tell me about the last time you needed this.' The first invites politeness; the second invites a real story.",
        image: "/assets/image/bridge.jpg",
      },
    ],
  },
  {
    id: "20",
    slug: "building-a-newsletter-people-actually-open",
    title: "Building a newsletter people actually open",
    excerpt:
      "Subject lines get the click, but consistency is what earns the open six months later.",
    author: "Lana Steiner",
    date: "2023-01-02",
    coverImage: "/assets/image/newsletter.jpg",
    categoryIds: ["saas", "customer-success"],
    sections: [
      {
        id: "s1",
        content:
          "A newsletter that ships on a predictable schedule, even a modest one, tends to outperform a more polished one that arrives whenever inspiration strikes.",
        image: "/assets/image/beaking.jpg",
      },
    ],
  },
];

export const ARTICLES: Article[] = RAW.map(({ categoryIds, ...rest }) => ({
  ...rest,
  categories: getCategories(categoryIds),
}));

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticleById(id: string): Article | undefined {
  return ARTICLES.find((a) => a.id === id);
}
