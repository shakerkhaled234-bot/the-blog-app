import { Category, CategoryColor } from "../types";

const colorCycle: CategoryColor[] = ["gray", "purple", "pink"];

function makeCategory(id: string, name: string, index: number): Category {
  return { id, name, color: colorCycle[index % colorCycle.length] };
}

export const CATEGORIES: Category[] = [
  makeCategory("design", "Design", 0),
  makeCategory("research", "Research", 1),
  makeCategory("presentation", "Presentation", 2),
  makeCategory("leadership", "Leadership", 0),
  makeCategory("management", "Management", 1),
  makeCategory("product", "Product", 1),
  makeCategory("frameworks", "Frameworks", 2),
  makeCategory("interface", "Interface", 2),
  makeCategory("software-development", "Software Development", 0),
  makeCategory("tools", "Tools", 1),
  makeCategory("saas", "SaaS", 2),
  makeCategory("podcasts", "Podcasts", 0),
  makeCategory("customer-success", "Customer Success", 1),
];

export function getCategory(id: string): Category {
  const found = CATEGORIES.find((c) => c.id === id);
  if (!found) throw new Error(`Unknown category id: ${id}`);
  return found;
}

export function getCategories(ids: string[]): Category[] {
  return ids.map(getCategory);
}
