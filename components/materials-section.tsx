"use client"

import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { Box, Zap, CircleDot, Wrench, Battery, Cpu } from "lucide-react"

const materials = [
  { icon: Box, name: "Ferro", color: "#8B4513" },
  { icon: Zap, name: "Alumínio", color: "#C0C0C0" },
  { icon: CircleDot, name: "Cobre", color: "#B87333" },
  { icon: Wrench, name: "Latão", color: "#DAA520" },
  { icon: Battery, name: "Baterias", color: "#4CAF50" },
  { icon: Cpu, name: "Eletrônicos", color: "#2196F3" },
]

export function MaterialsSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="materials" className="py-20 relative overflow-hidden">
      {/* Metallic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-[#222222] transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Tipos de <span className="text-gradient">materiais</span> aceitos
          </h2>
          <p
            className={`text-lg text-gray-700 max-w-2xl mx-auto transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Trabalhamos com diversos tipos de sucata e materiais recicláveis
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {materials.map((material, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 text-center hover:scale-110 transition-all duration-500 metallic-hover cursor-pointer shadow-lg ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="w-16 h-16 mx-auto rounded-full mb-4 flex items-center justify-center"
                style={{ backgroundColor: `${material.color}20` }}
              >
                <material.icon size={32} style={{ color: material.color }} />
              </div>
              <h3 className="font-bold text-lg text-[#222222]">{material.name}</h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#FCBE1D] to-[#F54337] hover:shadow-2xl hover:shadow-[#FCBE1D]/50 transition-all font-bold text-lg px-8 py-6 animate-pulse-glow"
            onClick={() => window.open("https://wa.me/5521999999999", "_blank")}
          >
            Tenho esse material → Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
