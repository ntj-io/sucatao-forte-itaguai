"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trash2, FileText, Wrench } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Trash2,
    title: "Plástico",
    description: "Coleta e reciclagem de todos os tipos de plástico industrial e comercial",
    color: "oklch(0.55_0.22_25)",
    bgColor: "oklch(0.55_0.22_25_/_0.1)",
  },
  {
    icon: FileText,
    title: "Papelão",
    description: "Processamento de papelão e materiais celulósicos para reciclagem",
    color: "oklch(0.65_0.18_240)",
    bgColor: "oklch(0.65_0.18_240_/_0.1)",
  },
  {
    icon: Wrench,
    title: "Metal",
    description: "Compra e reciclagem de sucata metálica ferrosa e não-ferrosa",
    color: "oklch(0.75_0.15_85)",
    bgColor: "oklch(0.75_0.15_85_/_0.1)",
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicos" ref={sectionRef} className="py-24 px-4">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 space-y-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Soluções completas em reciclagem para empresas de todos os portes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`border-2 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  borderColor: service.color,
                  transitionDelay: `${index * 150}ms`,
                  background: `linear-gradient(135deg, ${service.bgColor} 0%, transparent 100%)`,
                }}
              >
                <CardContent className="p-8 space-y-4">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center transition-transform duration-300 hover:rotate-12 hover:scale-110 shadow-lg"
                    style={{ backgroundColor: service.color }}
                  >
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: service.color }}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div
            className={`space-y-2 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div
              className="text-4xl font-bold hover:scale-110 transition-transform duration-300"
              style={{ color: "oklch(0.55_0.22_25)" }}
            >
              1000+
            </div>
            <div className="text-muted-foreground">Toneladas Recicladas</div>
          </div>
          <div
            className={`space-y-2 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div
              className="text-4xl font-bold hover:scale-110 transition-transform duration-300"
              style={{ color: "oklch(0.45_0.18_250)" }}
            >
              200+
            </div>
            <div className="text-muted-foreground">Clientes Atendidos</div>
          </div>
          <div
            className={`space-y-2 transition-all duration-700 delay-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div
              className="text-4xl font-bold hover:scale-110 transition-transform duration-300"
              style={{ color: "oklch(0.75_0.15_85)" }}
            >
              24h
            </div>
            <div className="text-muted-foreground">Tempo de Resposta</div>
          </div>
        </div>
      </div>
    </section>
  )
}
