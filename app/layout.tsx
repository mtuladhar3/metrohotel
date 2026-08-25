import { ThemeProvider } from "@teispace/next-themes"
import "./globals.css"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { ThemeHotkey } from "@/components/theme-hotkey"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Website Title",
  description: "A concise description of your website for SEO and search results.",
};

// Remove 'async' from RootLayout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="antialiased font-sans"
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeHotkey />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}