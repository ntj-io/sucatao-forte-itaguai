"use client"

import { useInView } from "@/hooks/use-in-view"
import { MapPin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LocationSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="location" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-sucatao-black transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Onde <span className="text-gradient">estamos?</span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Visite nossa unidade em Itaguaí ou entre em contato conosco!
          </p>
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
                  <h3 className="font-bold text-lg mb-2 text-sucatao-black">Endereço</h3>
                  <p className="text-gray-600">R. Haroldo Rodrigues de Jesus, 435 - Monte Serrat, Itaguaí - RJ, 23810-840</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md metallic-hover">
                <div className="p-3 rounded-full bg-[#FCBE1D]/20">
                  <Phone className="text-[#FCBE1D]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-sucatao-black">Telefone/WhatsApp</h3>
                  <p className="text-gray-600">(21) 99845-3447</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md metallic-hover">
                <div className="p-3 rounded-full bg-[#157EC2]/20">
                  <Clock className="text-[#157EC2]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-sucatao-black">Horário</h3>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 17h</p>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-linear-to-r from-[#157EC2] to-[#F54337] hover:shadow-xl font-bold hover:scale-105 hover:cursor-pointer transition-all duration-200"
                onClick={() => window.open("https://www.google.com/maps/dir//Sucat%C3%A3o+Forte+Itagua%C3%AD+-+R.+Haroldo+Rodrigues+de+Jesus,+435+-+Monte+Serrat,+Itagua%C3%AD+-+RJ,+23810-840/@-22.8748687,-43.7683705,1001m/data=!3m1!1e3!4m16!1m7!3m6!1s0x9bf9bf9891ec6f:0xed97978d80048eb8!2sSucat%C3%A3o+Forte+Itagua%C3%AD!8m2!3d-22.8748687!4d-43.7683705!16s%2Fg%2F11xclr7fw2!4m7!1m0!1m5!1m1!1s0x9bf9bf9891ec6f:0xed97978d80048eb8!2m2!1d-43.7683705!2d-22.8748687?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D", "_blank")}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.043166838783!2d-43.77094542393432!3d-22.87486373673233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bf8f5b6a7201b%3A0x34603474809451bb!2sR.%20Haroldo%20Rodrigues%20de%20Jesus%2C%20435%20-%20Monte%20Serrat%2C%20Itagua%C3%AD%20-%20RJ%2C%2023810-840!5e0!3m2!1spt-BR!2sbr!4v1762580492965!5m2!1spt-BR!2sbr"
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
