import type React from "react"
import type { Metadata } from "next"
import { Poppins, Russo_One } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-russo-one",
})

export const metadata: Metadata = {
  title: "Sucatão Forte Itaguaí - Compra e venda de Sucatas",
  description: "Compramos e vendemos sucata com o melhor preço da região. Sustentabilidade e pagamento justo.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/SFI-Dark.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/SFI.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/SFI-Dark.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${russoOne.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
