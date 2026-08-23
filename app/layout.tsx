import { ThemeProvider } from "@teispace/next-themes"
import { getTheme } from "@teispace/next-themes/server"

import "./globals.css"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { ThemeHotkey } from "@/components/theme-hotkey"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialTheme = await getTheme()

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
          initialTheme={initialTheme ?? undefined}
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
