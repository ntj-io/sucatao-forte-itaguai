"use client"

import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { Box, Zap, CircleDot, Wrench, Cpu, Factory, X, ChevronRight, Recycle } from "lucide-react"
import { useState } from "react"

const materials = [
  {
    icon: Recycle, // Ícone sugerido para esta nova categoria
    name: "Papel e Plásticos",
    color: "#4CAF50",
    items: [
      "Papelão", 
      "Plástico Duro", 
      "PET"
    ],
  },
  {
    icon: Cpu,
    name: "Eletrônicos",
    color: "#2196F3",
    items: [
      "Lixo Eletrônico (Geral)", // Item da lista
      "Computadores e Notebooks", 
      "Placas de Circuito", 
      "Celulares e Tablets", 
      "Fios e Cabos", 
      "Impressoras e Periféricos"
    ],
  },
  {
    icon: Box,
    name: "Metais Ferrosos",
    color: "#8B4513",
    items: [
      "Metal", 
      "Estamparia/Chaparia", 
      "Sucata Pesada", 
      "Sucata Mista"
    ],
  },
  {
    icon: Zap,
    name: "Alumínio e Não-Ferrosos",
    color: "#C0C0C0",
    items: [
      "Alumínio", 
      "Alumínio Duro", 
      "Latinha", 
      "Limalha de Alumínio", 
      "Panela Limpa", 
      "Panela Suja", 
      "Perfil Limpo", 
      "Perfil Estrutural",
      "Radiador Alumínio",
      "Spray (alumínio)"
    ],
  },
  {
    icon: CircleDot,
    name: "Cobre e Derivados",
    color: "#B87333",
    items: [
      "Cobre 1ª", 
      "Cobre 2ª", 
      "Radiador Cob/Al"
    ],
  },
  {
    icon: Wrench,
    name: "Ligas e Especiais",
    color: "#DAA520",
    items: [
      "Antimônio" ,
    ],
  },
  {
    icon: Factory,
    name: "Motores",
    color: "#607D8B",
    items: [
      "Motor Geladeira P", 
      "Motor Geladeira G"
    ],
  }
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
            className="bg-linear-to-r from-sucatao-yellow to-sucatao-red hover:shadow-2xl hover:shadow-sucatao-yellow/50 transition-all font-bold sm:text-lg px-8 py-6 animate-pulse-glow hover:cursor-pointer hover:scale-105"
            onClick={() => window.open("https://wa.me/5521998453447", "_blank")}
          >
            Falar no WhatsApp
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
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl max-h-[85vh] bg-neutral-100 z-50 shadow-2xl rounded-2xl animate-scale-in overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-sucatao-white p-6 border-b-2 shrink-0" style={{ borderColor: materials[selectedMaterial].color }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-sm"
                    style={{ backgroundColor: `${materials[selectedMaterial].color}40` }}
                  >
                    {(() => {
                      const Icon = materials[selectedMaterial].icon
                      return <Icon style={{ color: materials[selectedMaterial].color }} size={28}/>
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{materials[selectedMaterial].name}</h3>
                    <p className="text-black/70 text-sm">Confira os materiais aceitos</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMaterial(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-black/5 flex items-center justify-center transition-all hover:rotate-90 hover:cursor-pointer"
                >
                  <X size={24} className="text-black" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <h4 className="text-black/80 text-sm font-semibold mb-4 uppercase tracking-wider">Materiais Aceitos</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {materials[selectedMaterial].items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-black/20 hover:bg-black/20 transition-all hover:scale-[1.02] animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full animate-pulse`} style={{ backgroundColor: materials[selectedMaterial].color }}></div>
                      <span className="font-medium">{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border-2 border-black/20">
                <h4 className="font-bold text-lg mb-2">Tem esse material?</h4>
                <p className="text-black/70 text-sm mb-4">
                  Entre em contato conosco e receba uma cotação personalizada!
                </p>
                <Button
                  size="lg"
                  className="w-full bg-linear-to-r from-sucatao-yellow to-sucatao-red hover:shadow-xl hover:scale-105 transition-all font-bold hover:cursor-pointer"
                  onClick={() => window.open("https://wa.me/5521998453447", "_blank")}
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
