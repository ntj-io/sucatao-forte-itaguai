"use client"

import { useInView } from "@/hooks/use-in-view"
import { Recycle, DollarSign, Truck } from "lucide-react"

export function AboutSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="about" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-sucatao-black">
              Quem <span className="text-gradient">somos?</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              O Sucatão Forte Itaguaí é referência em reciclagem e compra de sucatas na região. Com anos de experiência
              no mercado, nosso compromisso é oferecer o melhor preço aliado à sustentabilidade e responsabilidade
              ambiental.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Trabalhamos com materiais ferrosos e não ferrosos, oferecendo coleta rápida, pagamento justo e toda a
              documentação necessária.
            </p>

            <div className="grid gap-4">
              {[
                { icon: Recycle, text: "Sustentabilidade", color: "#157EC2" },
                { icon: DollarSign, text: "Pagamento justo", color: "#FCBE1D" },
                { icon: Truck, text: "Logística rápida", color: "#F54337" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 bg-white rounded-lg shadow-md metallic-hover transition-all duration-500 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 rounded-full" style={{ backgroundColor: `${item.color}20` }}>
                    <item.icon style={{ color: item.color }} size={24} />
                  </div>
                  <span className="font-semibold text-lg text-sucatao-black">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                src="/garra.mp4"
                className="w-full h-[520px] object-cover"
                autoPlay
                loop
                muted
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#157EC2]/60 to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FCBE1D] rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#F54337] rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
