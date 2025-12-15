"use client"

import { useInView } from "@/hooks/use-in-view"
import { DollarSign, Leaf, TruckIcon, FileText } from "lucide-react"
import { Card } from "@/components/ui/card"

const benefits = [
  {
    icon: DollarSign,
    title: "Pagamento justo e rápido",
    description: "Oferecemos os melhores preços do mercado e pagamento imediato após a pesagem.",
    color: "#FCBE1D",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade garantida",
    description: "Todo material é destinado corretamente, preservando o meio ambiente.",
    color: "#4CAF50",
  },
  {
    icon: TruckIcon,
    title: "Coleta rápida",
    description: "Logística eficiente para buscar sua sucata da melhor forma possível.",
    color: "#F54337",
  },
  {
    icon: FileText,
    title: "Documentação",
    description: "Toda a documentação necessária para sua tranquilidade e conformidade.",
    color: "#157EC2",
  },
]

export function BenefitsSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="benefits" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#157EC2] via-[#1a5d8f] to-[#F54337]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-white transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span>Por que nos escolher?</span>
          </h2>
          <p
            className={`text-lg text-white/90 max-w-2xl mx-auto transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Confiança, experiência e compromisso com você e o meio ambiente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`p-6 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-500 metallic-hover cursor-pointer ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: benefit.color }}
              >
                <benefit.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
              <p className="text-white/80 leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
