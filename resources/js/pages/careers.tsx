"use client"

import { useLanguage } from "@/hooks/use-language"
import { getTranslations } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CareersPage() {
  const { locale } = useLanguage()
  const t = getTranslations(locale)

  return (
    <div className="w-full">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/image.png" alt="Careers" className="object-cover w-full h-full brightness-50" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-[#7CB342]">{t.careers.title}</span> <span>{t.careers.subtitle}</span>
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-pretty">{t.careers.description}</p>
            <p className="text-lg text-gray-700 leading-relaxed text-pretty">{t.careers.opportunity}</p>
          </div>

          {/* Positions Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#003B5C]">{t.careers.positions}</h2>
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#003B5C] mb-4">{t.careers.spontaneous}</h3>
                <p className="text-gray-600 mb-6">{t.careers.spontaneousDesc}</p>
                <Button className="bg-[#7CB342] hover:bg-[#6BA030] text-white">{t.careers.apply}</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
