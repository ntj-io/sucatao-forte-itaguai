"use client"
import {
  Trash2,
  FileText,
  Wrench,
  Cpu,
  Package,
  Droplet,
  Box,
  Battery,
  Cable,
  Monitor,
  Smartphone,
  Printer,
  Zap,
  Layers,
} from "lucide-react"
import { useState } from "react"

const materials = [
  { icon: Trash2, name: "PET", category: "plastico" },
  { icon: Package, name: "PEAD", category: "plastico" },
  { icon: Droplet, name: "PVC", category: "plastico" },
  { icon: Box, name: "PP", category: "plastico" },
  { icon: Layers, name: "PS", category: "plastico" },
  { icon: FileText, name: "Ondulado", category: "papelao" },
  { icon: FileText, name: "Liso", category: "papelao" },
  { icon: FileText, name: "Caixas", category: "papelao" },
  { icon: FileText, name: "Kraft", category: "papelao" },
  { icon: Wrench, name: "Alumínio", category: "metal" },
  { icon: Wrench, name: "Cobre", category: "metal" },
  { icon: Wrench, name: "Ferro", category: "metal" },
  { icon: Wrench, name: "Aço Inox", category: "metal" },
  { icon: Zap, name: "Bronze", category: "metal" },
  { icon: Battery, name: "Baterias", category: "eletronico" },
  { icon: Cable, name: "Cabos", category: "eletronico" },
  { icon: Monitor, name: "Monitores", category: "eletronico" },
  { icon: Cpu, name: "Placas", category: "eletronico" },
  { icon: Smartphone, name: "Celulares", category: "eletronico" },
  { icon: Printer, name: "Impressoras", category: "eletronico" },
]

const categoryColors = {
  plastico: "oklch(0.55_0.22_25)",
  papelao: "oklch(0.65_0.18_240)",
  metal: "oklch(0.75_0.15_85)",
  eletronico: "oklch(0.60_0.20_140)",
}

const categoryLabels = {
  plastico: "Plástico",
  papelao: "Papelão",
  metal: "Metal",
  eletronico: "Eletrônicos",
}

export function MaterialsSection() {
  const [filter, setFilter] = useState<string>("todos")

  const filteredMaterials = filter === "todos" ? materials : materials.filter((m) => m.category === filter)

  return (
    <section
      id="materiais"
      className="py-24 px-4 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[oklch(0.55_0.22_25)] rounded-full blur-[150px] opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[oklch(0.65_0.18_240)] rounded-full blur-[150px] opacity-10" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Materiais Aceitos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">O Que Reciclamos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Processamos uma ampla variedade de materiais com tecnologia de ponta
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter("todos")}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
              filter === "todos"
                ? "bg-foreground text-background shadow-lg scale-105"
                : "bg-muted/50 text-foreground hover:bg-muted hover:scale-105 border border-border"
            }`}
          >
            Todos ({materials.length})
          </button>
          {Object.entries(categoryLabels).map(([key, label]) => {
            const count = materials.filter((m) => m.category === key).length
            return (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border-2 ${
                  filter === key ? "shadow-lg scale-105" : "hover:scale-105"
                }`}
                style={{
                  backgroundColor: filter === key ? categoryColors[key as keyof typeof categoryColors] : "transparent",
                  borderColor: categoryColors[key as keyof typeof categoryColors],
                  color: filter === key ? "white" : categoryColors[key as keyof typeof categoryColors],
                }}
              >
                {label} ({count})
              </button>
            )
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {filteredMaterials.map((material, index) => {
            const Icon = material.icon
            const color = categoryColors[material.category as keyof typeof categoryColors]
            return (
              <div
                key={index}
                className="group relative inline-flex items-center gap-2.5 px-5 py-3 bg-card border-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ borderColor: color }}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                  style={{ backgroundColor: color }}
                />

                <div
                  className="relative w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon size={16} style={{ color }} />
                </div>
                <span className="relative text-sm font-semibold text-foreground whitespace-nowrap">
                  {material.name}
                </span>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted/50 rounded-full border border-border">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              Processamento rápido e eficiente • Cotação em tempo real • Coleta agendada
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
