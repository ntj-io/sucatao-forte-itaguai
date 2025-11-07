"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. ${formData.message}`
    window.open(`https://wa.me/5521999999999?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#157EC2] hover:text-[#F54337] transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Voltar para o site</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#222222]">
              Entre em <span className="text-gradient">contato</span> com o Sucatão Forte Itaguaí
            </h1>
            <p className="text-lg text-gray-600">Estamos prontos para atender você e transformar sua sucata em valor</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#222222]">Envie sua mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#222222]">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="focus:ring-2 focus:ring-[#157EC2]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#222222]">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="focus:ring-2 focus:ring-[#157EC2]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[#222222]">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="focus:ring-2 focus:ring-[#157EC2]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#222222]">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="focus:ring-2 focus:ring-[#157EC2] min-h-[150px]"
                    placeholder="Conte-nos sobre sua sucata..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#F54337] to-[#FCBE1D] hover:shadow-xl font-bold text-lg py-6"
                >
                  Enviar mensagem
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                <h2 className="text-2xl font-bold mb-6 text-[#222222]">Informações de contato</h2>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#F54337]/20">
                    <MapPin className="text-[#F54337]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-[#222222]">Endereço</h3>
                    <p className="text-gray-600">Itaguaí, Rio de Janeiro</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#FCBE1D]/20">
                    <Phone className="text-[#FCBE1D]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-[#222222]">Telefone</h3>
                    <p className="text-gray-600">(21) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#157EC2]/20">
                    <Mail className="text-[#157EC2]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-[#222222]">E-mail</h3>
                    <p className="text-gray-600">contato@sucataoforte.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#4CAF50]/20">
                    <Clock className="text-[#4CAF50]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-[#222222]">Horário de funcionamento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-600">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-xl h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58887.36469267252!2d-43.79!3d-22.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUxJzAwLjAiUyA0M8KwNDcnMjQuMCJX!5e0!3m2!1sen!2sbr!4v1234567890"
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
      </div>
    </div>
  )
}
