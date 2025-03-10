export const categories = [
  "programming-languages",
  "networking",
  "operating-systems",
  "system-design",
  "algorithms",
  "devops"
] as const;

export type Category = typeof categories[number];