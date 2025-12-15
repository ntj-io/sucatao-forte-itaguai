"use client"

import { useInView } from "@/hooks/use-in-view"
import { Phone, Search, Truck, Banknote } from "lucide-react"

const steps = [
  {
    icon: Phone,
    title: "Você entra em contato",
    description: "Caso não consiga ir ao local, fale conosco pelo WhatsApp.",
    color: "#F54337",
  },
  {
    icon: Search,
    title: "Avaliamos sua sucata",
    description: "Nossa equipe faz a análise e oferece o melhor preço.",
    color: "#FCBE1D",
  },
  {
    icon: Truck,
    title: "Fazemos a coleta",
    description: "Se necessário, buscamos sua sucata no local combinado.",
    color: "#157EC2",
  },
  {
    icon: Banknote,
    title: "Você recebe na hora",
    description: "Pagamento rápido e seguro após pesagem.",
    color: "#4CAF50",
  },
]

export function HowItWorksSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="how-it-works" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-sucatao-black transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Como <span className="text-gradient">funciona</span> o processo?
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Simples, rápido e transparente!
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-[linear-gradient(to_right,#F54337,#FCBE1D,#157EC2,#4CAF50)] opacity-20"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-center">
                  <div
                    className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon size={36} className="text-white" />
                  </div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 text-6xl font-bold opacity-5">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-sucatao-black">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
