"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Entre em Contato</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Solicite uma cotação ou tire suas dúvidas com nossa equipe
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.55_0.22_25_/_0.1)" }}
                >
                  <MapPin size={24} style={{ color: "oklch(0.55_0.22_25)" }} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground">Itaguaí, Rio de Janeiro</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.45_0.18_250_/_0.1)" }}
                >
                  <Phone size={24} style={{ color: "oklch(0.45_0.18_250)" }} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Telefone</h3>
                  <p className="text-muted-foreground">(21) 9XXXX-XXXX</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.75_0.15_85_/_0.1)" }}
                >
                  <Mail size={24} style={{ color: "oklch(0.75_0.15_85)" }} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">E-mail</h3>
                  <p className="text-muted-foreground">contato@sucataoforte.com.br</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.55_0.22_25_/_0.1)" }}
                >
                  <Clock size={24} style={{ color: "oklch(0.55_0.22_25)" }} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Horário</h3>
                  <p className="text-muted-foreground">Seg - Sex: 8h às 18h</p>
                  <p className="text-muted-foreground">Sáb: 8h às 12h</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nome Completo
                  </label>
                  <Input id="name" placeholder="Seu nome" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    E-mail
                  </label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Telefone
                  </label>
                  <Input id="phone" type="tel" placeholder="(21) 9XXXX-XXXX" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Conte-nos sobre o material que deseja vender ou coletar"
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[oklch(0.55_0.22_25)] hover:bg-[oklch(0.45_0.18_25)] text-white"
                  size="lg"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
