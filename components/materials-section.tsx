"use client"

import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { Box, Zap, CircleDot, Wrench, Cpu, Factory, X, ChevronRight } from "lucide-react"
import { useState } from "react"

const materials = [
  {
    icon: Box,
    name: "Metais Ferrosos",
    color: "#8B4513",
    items: ["Ferro", "Aço", "Chapas", "Vigas", "Sucata Pesada", "Estruturas Metálicas"],
  },
  {
    icon: Zap,
    name: "Não-Ferrosos",
    color: "#C0C0C0",
    items: ["Alumínio", "Chapas de Alumínio", "Perfis", "Esquadrias", "Panelas"],
  },
  {
    icon: CircleDot,
    name: "Cobre e Derivados",
    color: "#B87333",
    items: ["Cobre", "Fios de Cobre", "Tubos", "Radiadores", "Cabos Elétricos"],
  },
  {
    icon: Wrench,
    name: "Latão e Ligas",
    color: "#DAA520",
    items: ["Latão", "Bronze", "Torneiras", "Conexões", "Peças Industriais"],
  },
  {
    icon: Cpu,
    name: "Eletrônicos",
    color: "#2196F3",
    items: ["Computadores", "Placas", "Cabos", "Monitores", "Celulares", "Impressoras"],
  },
  {
    icon: Factory,
    name: "Sucata Industrial",
    color: "#607D8B",
    items: ["Máquinas", "Equipamentos", "Motores", "Peças Industriais", "Transformadores"],
  },
]

export function MaterialsSection() {
  const { ref, isInView } = useInView()
  const [selectedMaterial, setSelectedMaterial] = useState<number | null>(null)

  return (
    <section id="materials" className="py-20 bg-sucatao-white overflow-hidden">
      {/* Metallic Background */}
      <div className="container mx-auto px-4 z-10">
        <div ref={ref} className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-sucatao-black transition-all duration-1000 ${
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
            Trabalhamos com diversos tipos de sucata e materiais recicláveis.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {materials.map((material, index) => (
            <div
              key={index}
              onClick={() => setSelectedMaterial(index)}
              className={`group bg-white rounded-xl p-6 text-center hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 metallic-hover cursor-pointer shadow-lg relative ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Click indicator icon */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight size={20} className="text-[#157EC2] animate-pulse" />
              </div>

              <div
                className="w-16 h-16 mx-auto rounded-full mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${material.color}20` }}
              >
                <material.icon size={32} style={{ color: material.color }} />
              </div>
              <h3 className="font-bold text-lg text-sucatao-black group-hover:text-[#157EC2] transition-colors">
                {material.name}
              </h3>
              <p className="text-xs text-gray-500 mt-2 transition-opacity">
                Clique para ver detalhes
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-linear-to-r from-[#FCBE1D] to-[#F54337] hover:shadow-2xl hover:shadow-[#FCBE1D]/50 transition-all font-bold text-lg px-8 py-6 animate-pulse-glow hover:cursor-pointer hover:scale-105"
            onClick={() => window.open("https://wa.me/5521999999999", "_blank")}
          >
            Tenho esse material → Falar no WhatsApp
          </Button>
        </div>
      </div>

      {selectedMaterial !== null && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 animate-fade-in"
            onClick={() => setSelectedMaterial(null)}
          />

          {/* Modal */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl max-h-[85vh] bg-linear-to-br from-[#157EC2] via-[#1565C0] to-[#0D47A1] z-50 shadow-2xl rounded-2xl animate-scale-in overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-linear-to-r from-[#0D47A1] to-[#157EC2] p-6 border-b-2 border-white/20 shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-sm"
                    style={{ backgroundColor: `${materials[selectedMaterial].color}40` }}
                  >
                    {(() => {
                      const Icon = materials[selectedMaterial].icon
                      return <Icon size={28} className="text-white" />
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{materials[selectedMaterial].name}</h3>
                    <p className="text-white/70 text-sm">Confira os materiais aceitos</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMaterial(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:rotate-90"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <h4 className="text-white/80 text-sm font-semibold mb-4 uppercase tracking-wider">Materiais Aceitos</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {materials[selectedMaterial].items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all hover:scale-[1.02] animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#FCBE1D] animate-pulse"></div>
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20">
                <h4 className="text-white font-bold text-lg mb-2">Tem esse material?</h4>
                <p className="text-white/70 text-sm mb-4">
                  Entre em contato conosco e receba uma cotação personalizada!
                </p>
                <Button
                  size="lg"
                  className="w-full bg-linear-to-r from-[#FCBE1D] to-[#F54337] hover:shadow-xl hover:scale-105 transition-all font-bold"
                  onClick={() => window.open("https://wa.me/5521999999999", "_blank")}
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}
