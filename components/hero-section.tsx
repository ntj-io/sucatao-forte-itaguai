"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import HeroTitle from "./hero-title"

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    "/entrada.jpg",
    "/patio.jpg",
    "/balança.jpg",
    "/materiais.jpg",
    "/materiais2.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 3000) // Muda a cada 3 segundos
    return () => clearInterval(interval)
  }, [slides.length])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {slides.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`slide-${i}`}
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            currentIndex === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/65"></div>

      {/* 🧩 Padrão de grade sobreposto */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      {/* 🧠 Conteúdo central */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <HeroTitle />

          <p
            className="text-xl md:text-2xl text-white/90 mb-10 animate-fade-in-up max-w-2xl mx-auto"
            style={{ animationDelay: "0.2s" }}
          >
            Compramos e vendemos sucata com o melhor preço da região.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-linear-to-r from-sucatao-red to-sucatao-yellow hover:scale-105 hover:cursor-pointer transition-all text-sucatao-white font-bold text-lg px-8 py-6 animate-pulse-glow"
            >
              💰 Vender minha sucata
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="bg-sucatao-blue text-sucatao-white font-bold text-lg px-4 py-6 hover:scale-105 hover:cursor-pointer border-0 transition-all"
            >
              Saiba mais sobre o Sucatão
            </Button>
          </div>
        </div>
      </div>

      {/* ⬇️ Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
