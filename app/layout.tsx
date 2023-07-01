import { Metadata } from "next"

// These styles apply to every route in the application
import "../styles/globals.css"

export const metadata: Metadata = {
  // for SEO
  // TODO: make sure to change these values
  title: "Base App",
  description: "Welcome to next-base-app!",
  icons: {
    icon: "/icon.png",
  },
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
