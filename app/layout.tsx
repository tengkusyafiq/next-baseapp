import { Metadata } from "next"
import { Poppins } from "next/font/google"
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

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
})

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
  params: { lang },
  searchParams,
}: {
  children: React.ReactNode
  params: { lang: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  // set default language
  let currentLang = searchParams?.lang || lang || "en"
  // if current lang is a list of languages, use the first one
  if (Array.isArray(currentLang)) {
    currentLang = currentLang[0]
  }
  return (
    <html lang={currentLang} className={`${poppins.variable}`}>
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
