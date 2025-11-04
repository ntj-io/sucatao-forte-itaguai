import { Recycle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[oklch(0.12_0_0)] text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Recycle size={24} className="text-[oklch(0.75_0.15_85)]" />
              <span className="text-xl font-bold">Sucatão Forte</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Transformando resíduos em valor desde 2020. Compromisso com a sustentabilidade e o meio ambiente.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Coleta de Plástico</li>
              <li>Coleta de Papel</li>
              <li>Coleta de Metal</li>
              <li>Consultoria Ambiental</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Sobre Nós</li>
              <li>Certificações</li>
              <li>Política Ambiental</li>
              <li>Trabalhe Conosco</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Itaguaí, RJ</li>
              <li>(21) 9XXXX-XXXX</li>
              <li>contato@sucataoforte.com.br</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>© 2025 Sucatão Forte Itaguaí Ltda. Todos os direitos reservados.</p>
          <p>CNPJ: 37.813.267/0001-08</p>
        </div>
      </div>
    </footer>
  )
}
