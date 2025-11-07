"use client"

import type React from "react"

import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#222222] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Sucatão Forte Itaguaí</h3>
            <p className="text-gray-400">Transformando sucata em valor com sustentabilidade e compromisso.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button className="hover:text-[#FCBE1D] transition-colors">Sobre</button>
              </li>
              <li>
                <button className="hover:text-[#FCBE1D] transition-colors">Serviços</button>
              </li>
              <li>
                <button className="hover:text-[#FCBE1D] transition-colors">Materiais</button>
              </li>
              <li>
                <button className="hover:text-[#FCBE1D] transition-colors">Contato</button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, color: "#1877F2" },
                { icon: Instagram, color: "#E4405F" },
                { icon: Linkedin, color: "#0A66C2" },
              ].map((social, index) => (
                <button
                  key={index}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:scale-110 hover:bg-white/20 transition-all metallic-hover"
                  style={{ "--hover-color": social.color } as React.CSSProperties}
                >
                  <social.icon size={20} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>© 2025 Sucatão Forte Itaguaí — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
