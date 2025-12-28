"use client"

import type React from "react"
import { useLanguage } from "@/hooks/use-language"
import { getTranslations } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Linkedin, Mail, User, MessageSquare } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const { locale } = useLanguage()
  const t = getTranslations(locale)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="w-full">
      <Header />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-[#003B5C] mb-6">{t.contact.title}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.firstName}</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input type="text" placeholder={t.contact.firstName} className="pl-10" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.lastName}</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input type="text" placeholder={t.contact.lastName} className="pl-10" required />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.email}</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input type="email" placeholder="votre@email.com" className="pl-10" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.subject}</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input type="text" placeholder={t.contact.subject} className="pl-10" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.message}</label>
                  <Textarea placeholder={t.contact.message} rows={5} required />
                </div>
                <Button type="submit" className="w-full bg-[#7CB342] hover:bg-[#6BA030] text-white">
                  {t.contact.send}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
                <h3 className="text-xl font-bold text-[#003B5C] mb-4">{t.contact.followUs}</h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#7CB342] flex items-center justify-center hover:bg-[#6BA030] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#7CB342] flex items-center justify-center hover:bg-[#6BA030] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="mailto:info@altigenis.com"
                    className="w-12 h-12 rounded-full bg-[#7CB342] flex items-center justify-center hover:bg-[#6BA030] transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#003B5C] text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">{t.contact.visitUs}</h3>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium">{t.contact.address}</p>
                    <p>{t.contact.addressLine1}</p>
                    <p>{t.contact.addressLine2}</p>
                    <p>{t.contact.addressLine3}</p>
                  </div>
                </div>

                <div className="bg-[#003B5C] text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">{t.contact.callUs}</h3>
                  <div className="space-y-2 text-sm">
                    <p>+226 70 40 26 40</p>
                    <p>+226 78 00 35 33</p>
                  </div>
                </div>

                <div className="bg-[#003B5C] text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">{t.contact.writeUs}</h3>
                  <div className="space-y-2 text-sm">
                    <p>INFO@ALTIGENIS.COM</p>
                    <p>TECHNIQUE@ALTIGENIS.COM</p>
                    <p>COMMERCIAL@ALTIGENIS.COM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#003B5C] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.contact.ctaTitle}</h2>
          <Button size="lg" className="bg-[#7CB342] hover:bg-[#6BA030] text-white">
            {t.contact.ctaButton}
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
