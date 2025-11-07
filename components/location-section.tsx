"use client"

import { useInView } from "@/hooks/use-in-view"
import { MapPin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LocationSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="location" className="py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-[#222222] transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Onde <span className="text-gradient">estamos</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md metallic-hover">
                <div className="p-3 rounded-full bg-[#F54337]/20">
                  <MapPin className="text-[#F54337]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#222222]">Endereço</h3>
                  <p className="text-gray-600">Itaguaí, Rio de Janeiro</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md metallic-hover">
                <div className="p-3 rounded-full bg-[#FCBE1D]/20">
                  <Phone className="text-[#FCBE1D]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#222222]">Telefone</h3>
                  <p className="text-gray-600">(21) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md metallic-hover">
                <div className="p-3 rounded-full bg-[#157EC2]/20">
                  <Clock className="text-[#157EC2]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#222222]">Horário</h3>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-600">Sábado: 8h às 12h</p>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-[#157EC2] to-[#F54337] hover:shadow-xl font-bold"
                onClick={() => window.open("https://maps.google.com", "_blank")}
              >
                Traçar rota
              </Button>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] ring-4 ring-[#FCBE1D]/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58887.36469267252!2d-43.79!3d-22.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUxJzAwLjAiUyA0M8KwNDcnMjQuMCJX!5e0!3m2!1sen!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
