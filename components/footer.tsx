"use client"

import type React from "react"

import { Instagram, MessageCircle } from "lucide-react"

const redesSociais = [
  { link: "https://www.instagram.com/sucatao.forte.itaguai/", icon: Instagram, color: "#E4405F" },
  { link: "https://whatsapp.com", icon: MessageCircle, color: "#0A66C2" },
]

export function Footer() {
  return (
    <footer className="bg-sucatao-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Sucatão Forte Itaguaí</h3>
            <p className="text-gray-400">Transformando sucata em valor com sustentabilidade e compromisso.</p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              {[
                { icon: Instagram, color: "#E4405F" },
                { icon: MessageCircle, color: "#0A66C2" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={redesSociais[index].link}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:scale-110 hover:bg-white/20 transition-all metallic-hover"
                  style={{ "--hover-color": social.color } as React.CSSProperties}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4 text-center text-gray-400">
          <p>© 2025 Sucatão Forte Itaguaí — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
