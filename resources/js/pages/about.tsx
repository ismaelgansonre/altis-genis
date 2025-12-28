"use client"

import { useLanguage } from "@/hooks/use-language"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const { locale } = useLanguage()

  const content = {
    fr: {
      title: "NOTRE",
      subtitle: "ENTREPRISE",
      description:
        "AltiGenis est une entreprise de génie-conseil détenue par ses employés, incarnant rigueur et innovation dans chaque projet. Notre mission est de fournir des solutions d'ingénierie durables qui répondent aux défis complexes du développement en Afrique.",
      visionTitle: "NOTRE",
      visionSubtitle: "VISION",
      visionQuote:
        '"AltiGenis se positionne en catalyseur de transformation durable en Afrique, en combinant expertise technique et connaissance approfondie des réalités locales."',
      visionText1:
        "Notre vision est de devenir le partenaire privilégié pour les projets d'ingénierie durable en Afrique, en apportant des solutions innovantes qui concilient développement économique, respect de l'environnement et amélioration des conditions de vie des populations.",
      visionText2:
        "Par une ingénierie d'excellence, responsable et résolument ancrée dans les réalités locales, nous visons à créer un impact positif et durable sur les territoires où nous intervenons.",
    },
    en: {
      title: "OUR",
      subtitle: "COMPANY",
      description:
        "AltiGenis is an employee-owned engineering consulting firm, embodying rigor and innovation in every project. Our mission is to provide sustainable engineering solutions that address the complex challenges of development in Africa.",
      visionTitle: "OUR",
      visionSubtitle: "VISION",
      visionQuote:
        '"AltiGenis positions itself as a catalyst for sustainable transformation in Africa, combining technical expertise and in-depth knowledge of local realities."',
      visionText1:
        "Our vision is to become the preferred partner for sustainable engineering projects in Africa, providing innovative solutions that balance economic development, environmental respect, and improvement of living conditions for populations.",
      visionText2:
        "Through engineering excellence, responsibility, and firm anchoring in local realities, we aim to create a positive and lasting impact on the territories where we operate.",
    },
  }

  const t = content[locale as keyof typeof content] || content.fr

  return (
    <div className="w-full">
      <Header />
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
            <span className="text-[#7CB342]">{t.title}</span> <span className="text-[#003B5C]">{t.subtitle}</span>
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed text-pretty">
            {t.description}
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#7CB342]">{t.visionTitle}</span>{" "}
                <span className="text-[#003B5C]">{t.visionSubtitle}</span>
              </h2>
              <blockquote className="text-lg text-[#003B5C] font-medium mb-6 border-l-4 border-[#7CB342] pl-6 italic">
                {t.visionQuote}
              </blockquote>
              <p className="text-gray-600 mb-4 leading-relaxed text-pretty">{t.visionText1}</p>
              <p className="text-gray-600 leading-relaxed text-pretty">{t.visionText2}</p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img src="/mining-site-overview-landscape.jpg" alt="Vision" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img src="/engineering-excellence.jpg" alt="Excellence" className="object-cover w-full h-full" />
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img src="/sustainable-development.png" alt="Sustainability" className="object-cover w-full h-full" />
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img src="/team-collaboration.png" alt="Collaboration" className="object-cover w-full h-full" />
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img src="/integrity-trust.jpg" alt="Integrity" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
