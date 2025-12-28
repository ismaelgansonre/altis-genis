"use client"

import { useLanguage } from "@/hooks/use-language"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function EnvironmentSectorPage() {
  const { locale } = useLanguage()

  const content = {
    fr: {
      title: "ENVIRONNEMENT",
      intro:
        "AltiGenis propose des solutions environnementales innovantes pour minimiser l'impact des projets d'infrastructures et d'exploitation. Notre approche intègre la préservation des écosystèmes, la gestion durable des ressources et la restauration environnementale.",
      description:
        "Nos services environnementaux incluent les études d'impact, la surveillance environnementale, la gestion des déchets, et les stratégies de réhabilitation écologique. Nous accompagnons nos clients dans le respect des normes environnementales et le développement de pratiques durables.",
    },
    en: {
      title: "ENVIRONMENT",
      intro:
        "AltiGenis offers innovative environmental solutions to minimize the impact of infrastructure and exploitation projects. Our approach integrates ecosystem preservation, sustainable resource management, and environmental restoration.",
      description:
        "Our environmental services include impact studies, environmental monitoring, waste management, and ecological rehabilitation strategies. We support our clients in complying with environmental standards and developing sustainable practices.",
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
            alt="Environment"
            className="object-cover w-full h-full brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold">{t.title}</h1>
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
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Ecosystem restoration"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Environmental monitoring"
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
