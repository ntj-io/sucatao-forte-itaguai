"use client"

import { useInView } from "@/hooks/use-in-view"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials = [
  {
    text: "Excelente atendimento! Pagamento rápido e preço justo. Recomendo muito o Sucatão Forte.",
    rating: 5,
  },
  {
    text: "Trabalho com eles há anos. Sempre pontuais na coleta e transparentes nos valores.",
    rating: 5,
  },
  {
    text: "Preço bom e um excelente atendimento!!!!!!",
    rating: 5,
  },
  {
    text: "Fazem um ótimo trabalho com responsabilidade e compromisso. Dá gosto ver o quanto crescem e cuidam do meio ambiente com esse serviço essencial! ♻️💪",
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
    <section className="py-20 bg-sucatao-white">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-sucatao-black transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            O que dizem nossos <span className="text-gradient">clientes?</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full shrink-0 px-4">
                  <Card className="p-8 bg-white shadow-xl">
                    <div className="flex gap-1 mb-2 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-sucatao-yellow text-sucatao-yellow" />
                      ))}
                    </div>
                    <p className="text-lg text-gray-700 text-center italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? "bg-sucatao-red w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
