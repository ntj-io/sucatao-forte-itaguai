import { Button } from "@/components/ui/button"
import { ArrowRight, Recycle, Leaf, TrendingUp } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-32 px-4 overflow-hidden bg-gradient-to-br from-[oklch(0.12_0_0)] via-[oklch(0.15_0.02_240)] to-[oklch(0.12_0_0)]">
      {/* Elementos decorativos de fundo com as cores da marca */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[oklch(0.55_0.22_25)] rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[oklch(0.65_0.18_240)] rounded-full blur-[100px] opacity-20" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[oklch(0.75_0.15_85)] rounded-full blur-[100px] opacity-15" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Conteúdo principal - 7 colunas */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-2xl bg-white/5 backdrop-blur-sm border-2 border-white/10 flex items-center justify-center p-2 hover:scale-105 transition-transform">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SFI-Dark%20%281%29-yvMp6yhAJCCWzGTsBXzbqd3r2QM9mj.png"
                  alt="Sucatão Forte Itaguaí Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Badge animado */}
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-[oklch(0.55_0.22_25)]/20 to-[oklch(0.75_0.15_85)]/20 border border-[oklch(0.75_0.15_85)]/30 rounded-full backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[oklch(0.75_0.15_85)] rounded-full animate-pulse" />
                  <Recycle size={18} className="text-[oklch(0.75_0.15_85)]" />
                </div>
                <span className="text-white/90 text-sm font-medium">Líderes em reciclagem desde 2020</span>
              </div>
            </div>

            {/* Título principal com destaque criativo */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-white text-balance">
                Recicle com
                <span className="block mt-2 bg-gradient-to-r from-[oklch(0.55_0.22_25)] via-[oklch(0.65_0.18_240)] to-[oklch(0.75_0.15_85)] bg-clip-text text-transparent">
                  Propósito
                </span>
              </h1>
              <div className="flex items-center gap-3 text-[oklch(0.75_0.15_85)] text-xl font-semibold">
                <div className="h-1 w-12 bg-gradient-to-r from-[oklch(0.75_0.15_85)] to-transparent rounded-full" />
                Lucro & Sustentabilidade
              </div>
            </div>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl text-pretty">
              Transformamos seus resíduos de <span className="text-[oklch(0.55_0.22_25)] font-semibold">plástico</span>,{" "}
              <span className="text-[oklch(0.65_0.18_240)] font-semibold">papelão</span> e{" "}
              <span className="text-[oklch(0.75_0.15_85)] font-semibold">metal</span> em valor real para sua empresa.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contato">
                <Button
                  size="lg"
                  className="bg-[oklch(0.55_0.22_25)] hover:bg-[oklch(0.50_0.20_25)] text-white text-lg px-10 py-7 rounded-xl shadow-lg shadow-[oklch(0.55_0.22_25)]/30 hover:shadow-xl hover:shadow-[oklch(0.55_0.22_25)]/40 transition-all"
                >
                  Solicitar Coleta Agora
                  <ArrowRight className="ml-2" size={22} />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-lg px-10 py-7 rounded-xl backdrop-blur-sm bg-white/5"
              >
                Ver Como Funciona
              </Button>
            </div>

            {/* Stats em linha */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-sm text-white/60">Toneladas recicladas</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-white/60">Empresas parceiras</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-white/60">Sustentável</div>
              </div>
            </div>
          </div>

          {/* Área visual - 5 colunas */}
          <div className="lg:col-span-5 relative">
            {/* Cards flutuantes com as categorias */}
            <div className="relative h-[600px]">
              {/* Card Plástico */}
              <div className="absolute top-0 right-0 w-48 bg-gradient-to-br from-[oklch(0.55_0.22_25)] to-[oklch(0.45_0.18_25)] p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Recycle className="text-white" size={24} />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">Plástico</h3>
                <p className="text-white/80 text-sm">Coleta especializada</p>
              </div>

              {/* Card Papelão */}
              <div className="absolute top-32 left-0 w-48 bg-gradient-to-br from-[oklch(0.65_0.18_240)] to-[oklch(0.55_0.15_240)] p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Leaf className="text-white" size={24} />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">Papelão</h3>
                <p className="text-white/80 text-sm">Processamento eficiente</p>
              </div>

              {/* Card Metal */}
              <div className="absolute bottom-20 right-8 w-48 bg-gradient-to-br from-[oklch(0.75_0.15_85)] to-[oklch(0.65_0.12_85)] p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">Metal</h3>
                <p className="text-white/80 text-sm">Melhor cotação</p>
              </div>

              {/* Imagem central */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72">
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10">
                  <img
                    src="/industrial-recycling-facility-with-metal-plastic-a.jpg"
                    alt="Reciclagem Industrial"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0_0)]/60 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
