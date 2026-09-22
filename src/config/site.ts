import { env } from "./env";

export const siteConfig = {
  name: "Next Template",
  description: "A production-ready Next.js starter with an enforced feature-based architecture.",
  url: env.siteUrl,
} as const;
