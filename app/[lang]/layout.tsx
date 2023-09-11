import { Metadata } from "next"
import { TopBar } from "@/components/layouts/top-bar"
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
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {

  // set default language
  if (!lang) lang = "default"
  return (
    <html lang={lang}>
      <body className="p-4">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* top bar */}
          <TopBar />
          {/* left panel */}
          {/* right panel */}
          {children}
          {/* bottom bar */}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
