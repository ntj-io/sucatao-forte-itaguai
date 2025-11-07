"use client"

import { useInView } from "@/hooks/use-in-view"
import { ShoppingCart, Truck, Factory, Leaf } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: ShoppingCart,
    title: "Compra de sucata ferrosa e não ferrosa",
    description: "Compramos todo tipo de material metálico com o melhor preço da região.",
    color: "#F54337",
  },
  {
    icon: Truck,
    title: "Recolhimento e transporte",
    description: "Nossa equipe busca sua sucata com logística eficiente e segura.",
    color: "#FCBE1D",
  },
  {
    icon: Factory,
    title: "Reciclagem industrial",
    description: "Processamos materiais com tecnologia avançada e responsabilidade.",
    color: "#157EC2",
  },
  {
    icon: Leaf,
    title: "Descarte consciente",
    description: "Destinação correta dos materiais, respeitando o meio ambiente.",
    color: "#4CAF50",
  },
]

export function ServicesSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-[#222222] transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            O que <span className="text-gradient">fazemos</span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Soluções completas para transformar sua sucata em valor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`p-6 hover:scale-105 transition-all duration-500 metallic-hover cursor-pointer border-2 hover:border-opacity-100 ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                borderColor: `${service.color}40`,
              }}
            >
              <div
                className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center"
                style={{ backgroundColor: `${service.color}20` }}
              >
                <service.icon size={32} style={{ color: service.color }} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#222222]">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
