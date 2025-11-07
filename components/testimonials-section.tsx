"use client"

import { useInView } from "@/hooks/use-in-view"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "João Silva",
    company: "Metalúrgica Silva",
    text: "Excelente atendimento! Pagamento rápido e preço justo. Recomendo muito o Sucatão Forte.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    company: "Indústria Santos",
    text: "Trabalho com eles há anos. Sempre pontuais na coleta e transparentes nos valores.",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    company: "Construções Oliveira",
    text: "Melhor empresa de reciclagem da região. Profissionalismo e compromisso ambiental.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const { ref, isInView } = useInView()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-[#222222] transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            O que dizem nossos <span className="text-gradient">clientes</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="p-8 bg-white shadow-xl">
                    <div className="flex gap-1 mb-4 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#FCBE1D] text-[#FCBE1D]" />
                      ))}
                    </div>
                    <p className="text-lg text-gray-700 mb-6 text-center italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="text-center">
                      <p className="font-bold text-[#222222]">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? "bg-[#F54337] w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
