"use client"

import { CheckCircle2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const benefits = [
  "Coleta programada e emergencial",
  "Certificado de destinação final",
  "Melhor preço da região",
  "Equipe especializada",
  "Pagamento rápido e seguro",
  "Consultoria ambiental gratuita",
]

export function AboutSection() {
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
    <section id="sobre" ref={sectionRef} className="py-24 px-4 bg-secondary">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`relative order-2 lg:order-1 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 hover:shadow-2xl">
              <img
                src="/recycling-workers-sorting-materials-in-modern-faci.jpg"
                alt="Equipe Sucatão Forte"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div
            className={`space-y-8 order-1 lg:order-2 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                Compromisso com a sustentabilidade
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Desde 2020, a Sucatão Forte Itaguaí atua no mercado de reciclagem oferecendo soluções completas para
                empresas que buscam destinar corretamente seus resíduos.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Por que escolher a gente?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 transition-all duration-500 hover:translate-x-2 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <CheckCircle2
                      size={24}
                      className="flex-shrink-0 mt-0.5 transition-transform duration-300 hover:scale-125"
                      style={{ color: "oklch(0.55_0.22_25)" }}
                    />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                <strong>CNPJ:</strong> 37.813.267/0001-08
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
