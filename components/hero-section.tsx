"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"

export function HeroSection() {
   const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // 🔧 Diminui a velocidade de reprodução
    video.playbackRate = 0.4

    // 🎯 Função para pausar ou reproduzir dependendo da visibilidade
    const handleVisibility = () => {
      const rect = video.getBoundingClientRect()
      const isVisible =
        rect.top < window.innerHeight && rect.bottom > 0 // parte visível na tela

      if (isVisible) {
        if (video.paused) video.play()
      } else {
        if (!video.paused) video.pause()
      }
    }

    // Adiciona o listener de scroll e visibilidade
    window.addEventListener("scroll", handleVisibility)
    window.addEventListener("resize", handleVisibility)

    // Executa a primeira checagem
    handleVisibility()

    // Limpeza do event listener
    return () => {
      window.removeEventListener("scroll", handleVisibility)
      window.removeEventListener("resize", handleVisibility)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        src="/apresentacao2.mp4" // coloque seu vídeo em /public
        ref={videoRef}
        
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-linear-to-br from-[#157EC2]/40 via-[#1a5d8f]/40 to-sucatao-black/70"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in">
            <Sparkles className="w-4 h-4 text-[#FCBE1D]" />
            <span className="text-white text-sm font-medium">Sustentabilidade e Lucro</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
            Transforme sua <span className="text-[#FCBE1D]">sucata</span> em{" "}
            <span className="text-[#F54337]">oportunidade!</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-white/90 mb-10 animate-fade-in-up max-w-2xl mx-auto"
            style={{ animationDelay: "0.2s" }}
          >
            Compramos e reciclamos sua sucata com o melhor preço da região.
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
