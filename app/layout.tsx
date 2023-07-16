import { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-control/theme-provider"
import { Toaster } from "@/components/ui/toast/toaster"

// These styles apply to every route in the application
import "@/styles/globals.css"

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
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
