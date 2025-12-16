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
  metadataBase: new URL("https://www.sucataoforteitaguai.com.br"),

  title: {
    default: "Sucatão Forte Itaguaí",
    template: "%s | Sucatão Forte Itaguaí",
  },

  description:
    "Sucatão Forte em Itaguaí. Compra e venda de sucata com pagamento justo, sustentabilidade e melhor preço da região.",

  keywords: [
    "Sucatão Forte",
    "Sucata em Itaguaí",
    "Compra de sucata Itaguaí",
    "Venda de sucata",
    "Ferro velho Itaguaí",
    "Sucata RJ",
  ],

  openGraph: {
    title: "Sucatão Forte Itaguaí",
    description:
      "Compra e venda de sucata em Itaguaí com o melhor preço da região. Sustentabilidade e confiança.",
    url: "https://www.sucataoforte.com.br",
    siteName: "Sucatão Forte",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Sucatão Forte Itaguaí",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sucatão Forte Itaguaí",
    description:
      "Compra e venda de sucata com pagamento justo e melhor preço em Itaguaí.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/SFI-Dark.svg",
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
