"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"

const recyclingData = [
  { material: "Alumínio", taxa: 97.3 },
  { material: "Papelão", taxa: 66.7 },
  { material: "Plástico PET", taxa: 51.0 },
  { material: "Vidro", taxa: 47.0 },
  { material: "Aço", taxa: 47.0 },
  { material: "Plástico Geral", taxa: 23.1 },
]

export function StatsSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Curiosidades sobre Reciclagem</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Dados reais sobre as taxas de reciclagem no Brasil
          </p>
        </div>

        <Card className="border-2 hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Taxa de Reciclagem por Material no Brasil</CardTitle>
            <CardDescription>Percentual de materiais reciclados em relação ao total produzido</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                taxa: {
                  label: "Taxa de Reciclagem (%)",
                  color: "oklch(0.60_0.20_140)",
                },
              }}
              className="h-[400px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={recyclingData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="material" angle={-45} textAnchor="end" height={100} />
                  <YAxis label={{ value: "Taxa (%)", angle: -90, position: "insideLeft" }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="taxa" fill="var(--color-taxa)" radius={[8, 8, 0, 0]} name="Taxa de Reciclagem (%)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Fun Facts */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="border-2 border-[oklch(0.55_0.22_25)] bg-[oklch(0.55_0.22_25_/_0.05)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center space-y-2">
              <div className="text-5xl font-bold text-[oklch(0.55_0.22_25)]">450</div>
              <div className="text-sm text-muted-foreground">
                Anos para uma garrafa plástica se degradar na natureza
              </div>
            </CardContent>
          </Card>
          <Card className="border-2 border-[oklch(0.65_0.18_240)] bg-[oklch(0.65_0.18_240_/_0.05)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center space-y-2">
              <div className="text-5xl font-bold text-[oklch(0.65_0.18_240)]">70%</div>
              <div className="text-sm text-muted-foreground">
                De economia de energia ao reciclar papelão comparado à produção nova
              </div>
            </CardContent>
          </Card>
          <Card className="border-2 border-[oklch(0.75_0.15_85)] bg-[oklch(0.75_0.15_85_/_0.05)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center space-y-2">
              <div className="text-5xl font-bold text-[oklch(0.75_0.15_85)]">∞</div>
              <div className="text-sm text-muted-foreground">
                Vezes que o alumínio pode ser reciclado sem perder qualidade
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
