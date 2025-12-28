"use client"

import { useLanguage } from "@/hooks/use-language"
import { getTranslations } from "@/lib/i18n"
import { Link } from '@inertiajs/react';
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SectorsPage() {
  const { locale } = useLanguage()
  const t = getTranslations(locale)

  const sectors = [
    {
      title: t.sectors.mine.title,
      description: t.sectors.mine.description,
      image: "/images/image.png",
      href: "/sectors/mine",
    },
    {
      title: t.sectors.hydraulique.title,
      description: t.sectors.hydraulique.description,
      image: "/images/image.png",
      href: "/sectors/hydraulic",
    },
    {
      title: t.sectors.urbain.title,
      description: t.sectors.urbain.description,
      image: "/modern-urban-development.png",
      href: "/sectors/urban",
    },
    {
      title: t.sectors.construction.title,
      description: t.sectors.construction.description,
      image: "/images/image.png",
      href: "/sectors/construction",
    },
    {
      title: t.sectors.environnement.title,
      description: t.sectors.environnement.description,
      image: "/environmental-conservation.jpg",
      href: "/sectors/environment",
    },
  ]

  return (
    <div className="w-full">
      <Header />
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
            <span className="text-[#7CB342]">{t.sectors.title}</span>{" "}
            <span className="text-[#003B5C]">{t.sectors.subtitle}</span>
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed text-pretty">
            {t.sectors.description}
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={sector.image || "/placeholder.svg"}
                    alt={sector.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#003B5C] mb-4">{sector.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{sector.description}</p>
                  <Link
                    href={sector.href}
                    className="inline-flex items-center text-[#7CB342] font-medium hover:text-[#6BA030] transition-colors"
                  >
                    {t.sectors.mine.link}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
