"use client"

import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTASection() {
  const { ref, isInView } = useInView()

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/caminhao sucatao.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* OVERLAY (escurece + dá identidade visual) */}
      <div className="absolute inset-0 bg-black/70"/>

      {/* LIGHT BLOBS (opcional, mantém seu efeito atual) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-96 h-96 bg-sucatao-yellow rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 left-10 w-80 h-80 bg-sucatao-red rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 text-white leading-tight transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Não deixe sua sucata parada —{" "}
            <span className="text-sucatao-yellow">transforme em lucro</span> hoje mesmo!
          </h2>

          <p
            className={`text-xl text-white/90 mb-10 transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Entre em contato agora e receba uma avaliação gratuita.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-linear-to-r from-[#FCBE1D] to-[#F54337] hover:shadow-2xl hover:shadow-[#FCBE1D]/50 transition-all font-bold text-lg px-10 py-7 animate-pulse-glow hover:cursor-pointer hover:scale-105"
              onClick={() => window.open("https://wa.me/5521998453447", "_blank")}
            >
              Fale com o Sucatão agora
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
