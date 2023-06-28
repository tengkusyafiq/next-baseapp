import { Metadata } from "next"

import "../styles/tailwind.css"

export const metadata: Metadata = {
  // for SEO
  // TODO: make sure to change these values
  title: 'Home',
  description: 'Welcome to next-base-app!',
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
