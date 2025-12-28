"use client"
import { Facebook, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { getTranslations } from "@/lib/i18n"

export function Footer() {
  const { locale } = useLanguage()
  const t = getTranslations(locale)

  return (
    <footer className="bg-[#003B5C] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Visit Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact.visitUs}</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="font-medium">{t.contact.address}</p>
              <p>{t.contact.addressLine1}</p>
              <p>{t.contact.addressLine2}</p>
              <p>{t.contact.addressLine3}</p>
            </div>
          </div>

          {/* Call Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact.callUs}</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>+226 70 40 26 40</p>
              <p>+226 78 00 35 33</p>
            </div>
          </div>

          {/* Write Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact.writeUs}</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>INFO@ALTIGENIS.COM</p>
              <p>TECHNIQUE@ALTIGENIS.COM</p>
              <p>COMMERCIAL@ALTIGENIS.COM</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300">{t.contact.footer}</p>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#7CB342] flex items-center justify-center hover:bg-[#6BA030] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#7CB342] flex items-center justify-center hover:bg-[#6BA030] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@altigenis.com"
              className="w-10 h-10 rounded-full bg-[#7CB342] flex items-center justify-center hover:bg-[#6BA030] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
