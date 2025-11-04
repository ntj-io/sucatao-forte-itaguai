"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-foreground">
              Sucatão Forte <span className="text-[oklch(0.55_0.22_25)]">Itaguaí</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#servicos" className="text-foreground hover:text-[oklch(0.55_0.22_25)] transition-colors">
              Serviços
            </a>
            <a href="/#materiais" className="text-foreground hover:text-[oklch(0.45_0.18_250)] transition-colors">
              Materiais
            </a>
            <a href="/#sobre" className="text-foreground hover:text-[oklch(0.75_0.15_85)] transition-colors">
              Sobre
            </a>
            <Link href="/contato" className="text-foreground hover:text-[oklch(0.55_0.22_25)] transition-colors">
              Contato
            </Link>
            <ThemeToggle />
            <Link href="/contato">
              <Button className="bg-[oklch(0.55_0.22_25)] hover:bg-[oklch(0.45_0.18_25)] text-white active:text-white focus:text-white">
                Solicitar Coleta
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a
              href="/#servicos"
              className="text-foreground hover:text-[oklch(0.55_0.22_25)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="/#materiais"
              className="text-foreground hover:text-[oklch(0.45_0.18_250)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Materiais
            </a>
            <a
              href="/#sobre"
              className="text-foreground hover:text-[oklch(0.75_0.15_85)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <Link
              href="/contato"
              className="text-foreground hover:text-[oklch(0.55_0.22_25)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Link href="/contato">
              <Button className="bg-[oklch(0.55_0.22_25)] hover:bg-[oklch(0.45_0.18_25)] text-white active:text-white focus:text-white w-full">
                Solicitar Coleta
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
