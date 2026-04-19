import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sensedia Challenge",
  description: "A user table application"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-surface text-text-primary min-h-full flex flex-col">
        {children}
      </body>
    </html>
  )
}
