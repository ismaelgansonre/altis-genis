"use client"

import { useLanguage } from "@/hooks/use-language"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function UrbanSectorPage() {
  const { locale } = useLanguage()

  const content = {
    fr: {
      title: "DÉVELOPPEMENT URBAIN ET RURAL",
      intro:
        "AltiGenis accompagne les projets d'aménagement urbain et rural en offrant des solutions d'ingénierie adaptées aux défis modernes. De la planification d'infrastructures à la gestion de projets complexes, nous contribuons au développement durable des territoires.",
      description:
        "Nos services incluent la conception d'infrastructures urbaines modernes, la planification d'espaces publics, et le développement de systèmes de transport durables. Nous intégrons les meilleures pratiques en matière d'urbanisme durable et de résilience climatique.",
    },
    en: {
      title: "URBAN AND RURAL DEVELOPMENT",
      intro:
        "AltiGenis supports urban and rural development projects by offering engineering solutions adapted to modern challenges. From infrastructure planning to complex project management, we contribute to the sustainable development of territories.",
      description:
        "Our services include the design of modern urban infrastructures, planning of public spaces, and development of sustainable transport systems. We integrate best practices in sustainable urbanism and climate resilience.",
    },
  }

  const t = content[locale as keyof typeof content] || content.fr

  return (
    <div className="w-full">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Urban Development"
            className="object-cover w-full h-full brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-balance">{t.title}</h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <p className="text-lg text-gray-700 leading-relaxed text-pretty max-w-5xl mx-auto text-center mb-8">
            {t.intro}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-pretty max-w-5xl mx-auto text-center">
            {t.description}
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img src="/placeholder.svg?height=600&width=800" alt="Urban planning" className="object-cover w-full h-full" />
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Sustainable infrastructure"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
