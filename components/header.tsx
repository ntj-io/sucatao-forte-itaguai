"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = -80 // altura header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition + offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      setIsMobileMenuOpen(false)
    }
  }

  const menuItems = [
    { label: "Início", id: "hero" },
    { label: "Sobre", id: "about" },
    { label: "Serviços", id: "services" },
    { label: "Materiais", id: "materials" },
    { label: "Foto", id: "photo" },
    { label: "Como Funciona", id: "how-it-works" },
    { label: "Benefícios", id: "benefits" },
    { label: "Galeria", id: "gallery" },
    { label: "Localização", id: "location" },
  ]

  return (
    <header
      className={`fixed flex items-center w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-sucatao-white backdrop-blur-lg shadow-lg shadow-sucatao-yellow/30" : "bg-sucatao-white"
      }`}
    >
      <div className="container mx-auto px-4"> 
        <div className="flex items-center justify-between h-20">
          <div className="hidden 2xl:block text-2xl font-russo-one text-sucatao-black">Sucatão Forte Itaguaí</div>
          
          <div className={`2xl:hidden bg-sucatao-white px-2 ${isScrolled ? "shadow-lg shadow-sucatao-black/20 py-6 rounded-b-full" : ""}`}
            onClick={() => scrollToSection("hero")}
          >
            <Image
              src="/SFI.svg"
              alt="Sucatão Forte Itaguaí"
              width={40}
              height={40}
              className="inline-block mx-4"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium hover:text-sucatao-blue hover:cursor-pointer hover:scale-105 transition-all text-sucatao-black mr-6`}
              >
                {item.id === "photo" ? (
                  <div className={`hidden 2xl:block bg-sucatao-white px-2 ${isScrolled ? "shadow-lg shadow-sucatao-black/20 py-6 rounded-b-full" : ""}`}
                    onClick={() => scrollToSection("hero")}
                  >
                    <Image
                      src="/SFI.svg"
                      alt="Sucatão Forte Itaguaí"
                      width={40}
                      height={40}
                      className="inline-block mx-4"
                    />
                  </div>
                ) : item.id === "how-it-works" ? (
                  <div className="-ml-6 2xl:ml-0">{item.label}</div>
                ) : (
                  item.label
                )}

                
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-sucatao-blue hover:bg-sucatao-blue hover:scale-105 hover:cursor-pointer hover:shadow-lg hover:shadow-sucatao-black/50 transition-all font-semibold"
            >
              Fale com a gente
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 relative z-60"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-linear-to-br from-sucatao-blue to-sucatao-blue/90 backdrop-blur-lg shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 border-b border-white/20">
            <div className="w-full h-20 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <span className="text-white font-bold text-lg text-center px-4">Sucatão Forte Itaguaí</span>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="flex flex-col gap-2">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-3 px-4 text-white hover:bg-white/10 rounded-lg transition-all hover:translate-x-1 font-medium"
                  style={{
                    animation: isMobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : "none",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="p-6 border-t border-white/20">
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-linear-to-r from-sucatao-red to-sucatao-yellow hover:shadow-lg hover:shadow-sucatao-yellow/30 transition-all font-semibold"
            >
              Fale com a gente
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  )
}
