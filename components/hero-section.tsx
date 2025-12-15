"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, DollarSign } from "lucide-react"
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
    }, 3000)
    return () => clearInterval(interval)
  }, [slides.length])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = -80 // altura header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition + offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-sucatao-white"
    >
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] rounded-3xl overflow-hidden transition-opacity duration-1000 ease-in-out ${
            currentIndex === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`slide-${i}`}
            fill
            priority={i === 0}
            className="object-cover"
          />

          {/* Overlay escuro somente sobre a imagem */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* 🧠 Conteúdo central */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <HeroTitle />

          <p
            className="text-sm sm:text-2xl text-white/90 mb-10 animate-fade-in-up max-w-2xl mx-auto px-6"
            style={{ animationDelay: "0.2s" }}
          >
            Compramos e vendemos sucata com o melhor preço da região.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-linear-to-r from-sucatao-red to-sucatao-yellow hover:scale-105 hover:cursor-pointer transition-all text-sucatao-white font-bold text-lg px-8 py-6 animate-pulse-glow"
            >
              <DollarSign className="inline-block" /> 
              Vender minha sucata
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("about")}
              className="bg-sucatao-blue font-bold text-lg px-4 py-6 hover:scale-105 hover:cursor-pointer border-0 transition-all"
            >
              Saiba mais sobre o Sucatão
            </Button>
          </div>
        </div>
      </div>

      {/* ⬇️ Indicador de scroll */}
      <div className="absolute bottom-15 h-11 w-42 bg-sucatao-white rounded-t-2xl">

      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-black/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-black/50 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
