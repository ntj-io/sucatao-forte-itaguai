"use client"

import { useInView } from "@/hooks/use-in-view"

const images = [
  { src: "/patio.jpg", alt: "Pátios" },
  { src: "/materiais.jpg", alt: "Área de prensa" },
  { src: "/balança2.jpg", alt: "Balança" },
]

export function GallerySection() {
  const { ref, isInView } = useInView()

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-10">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-sucatao-black transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Nossa <span className="text-gradient">galeria</span>
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Conheça nossas instalações e operações.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl aspect-square group cursor-pointer transition-all duration-700 ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#157EC2]/40 to-transparent md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">{image.alt}</p>
              </div>
              <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-[#FCBE1D] transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
