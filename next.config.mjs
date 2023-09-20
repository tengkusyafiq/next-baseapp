import withBundleAnalyzer from "@next/bundle-analyzer"
import withPlugins from "next-compose-plugins"
import { env } from "./env.mjs"
import nextTranslate from "next-translate-plugin"
import withMDX from "@next/mdx"

const withMDXConfig = withMDX({
  extension: /\.(md|mdx)$/,
})

/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins(
  [[withBundleAnalyzer({ enabled: env.ANALYZE })]],
  withMDXConfig(
    nextTranslate({
      reactStrictMode: true,
      experimental: {
        instrumentationHook: true,
        mdxRs: true,
      },
      rewrites() {
        return []
      },
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "raw.githubusercontent.com",
          },
          {
            protocol: "https",
            hostname: "avatars.githubusercontent.com",
          },
          {
            protocol: "https",
            hostname: "static-00.iconduck.com",
          },
        ],
      },
    })
  )
)


export default config
