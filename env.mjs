import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

/**
 * Please restrict each environment variable with validation rules, to govern development and production environments.
 */
export const env = createEnv({
  /** All server side env variables */
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    BASE_API_URL: z.string().url(),
    NEXT_PUBLIC_BASE_API_URL: z.string().url(),
  },
  /** All client side env variables */
  client: {},
  /** All runtime env variables as listed above*/
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    BASE_API_URL: process.env.BASE_API_URL,
    NEXT_PUBLIC_BASE_API_URL: process.env.NEXT_PUBLIC_BASE_API_URL,
  },
})
