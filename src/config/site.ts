import { env } from "./env";

export const siteConfig = {
  name: "Divika",
  description: "Shop quality products online at Divika — fast delivery, secure checkout.",
  url: env.siteUrl,
} as const;
