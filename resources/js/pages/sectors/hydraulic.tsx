"use client"

import { useLanguage } from "@/hooks/use-language"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HydraulicSectorPage() {
  const { locale } = useLanguage()

  const content = {
    fr: {
      title: "INFRASTRUCTURES HYDRAULIQUES ET HYDRO-AGRICOLES",
      intro:
        "AltiGenis offre une expertise complète dans la conception, l'évaluation et la gestion des ouvrages hydrauliques et des aménagements hydro-agricoles. Nos interventions s'alignent sur les normes internationales et nationales, notamment celles de la Commission Internationale des Grands Barrages (CIGB/ICOLD), l'Organisation des Nations Unies pour l'Alimentation et l'Agriculture (FAO), ainsi que les réglementations locales sur la gestion de l'eau et l'irrigation. En intégrant les meilleures pratiques en matière d'ingénierie et de durabilité, nous accompagnons nos clients dans le développement de solutions efficaces, sécuritaires et résilientes face aux enjeux climatiques et environnementaux.",
      subtitle1: "BARRAGES ET",
      subtitle1b: "OUVRAGES DE RETENUE",
      desc1:
        "Les infrastructures hydrauliques englobent les barrages, les ouvrages de rétention, les systèmes de drainage et les dispositifs de contrôle des crues. Nos services couvrent la conception, la surveillance et l'optimisation des infrastructures hydrauliques essentielles à la régulation de l'eau et à la gestion des ressources en eau. Nous concevons et dimensionnons les réseaux d'irrigation, les bassins de retenue et les infrastructures de drainage agricole, en développant des solutions durables pour une gestion efficace des ressources en eau. Nos services incluent la planification hydrologique, la modélisation des systèmes d'irrigation et l'évaluation de leur performance, afin d'optimiser l'approvisionnement en eau et d'améliorer la productivité agricole. Nous accompagnons également nos clients dans la gestion des impacts hydrologiques et environnementaux des projets agricoles, en intégrant les meilleures pratiques pour préserver les ressources naturelles et assurer la résilience des systèmes hydro-agricoles face aux changements climatiques.",
      services1: [
        "Conception de barrages et d'ouvrage de retenue",
        "Modélisation hydraulique et hydrologique",
        "Investigations et études géotechniques",
        "Conception et gestion des ouvrages hydrauliques",
        "Gestion et préparation des dossiers d'appel d'offres",
        "Aménagement Hydro-Agricole",
        "Conception et optimisation des réseaux d'irrigation et de drainage",
      ],
    },
    en: {
      title: "HYDRAULIC AND HYDRO-AGRICULTURAL INFRASTRUCTURES",
      intro:
        "AltiGenis offers comprehensive expertise in the design, evaluation, and management of hydraulic structures and hydro-agricultural developments. Our interventions align with international and national standards, notably those of the International Commission on Large Dams (ICGB/ICOLD), the Food and Agriculture Organization (FAO), and local regulations on water management and irrigation. By integrating best practices in engineering and sustainability, we support our clients in developing efficient, safe, and resilient solutions to climate and environmental challenges.",
      subtitle1: "DAMS AND",
      subtitle1b: "RETENTION STRUCTURES",
      desc1:
        "Hydraulic infrastructure encompasses dams, retention structures, drainage systems, and flood control devices. Our services cover the design, monitoring, and optimization of hydraulic infrastructure essential for water regulation and water resource management. We design and size irrigation networks, retention basins, and agricultural drainage infrastructure, developing sustainable solutions for efficient water resource management. Our services include hydrological planning, modeling of irrigation systems, and performance evaluation, to optimize water supply and improve agricultural productivity. We also support our clients in managing the hydrological and environmental impacts of agricultural projects, integrating best practices to preserve natural resources and ensure the resilience of hydro-agricultural systems to climate change.",
      services1: [
        "Dam and retention structure design",
        "Hydraulic and hydrological modeling",
        "Geotechnical investigations and studies",
        "Design and management of hydraulic structures",
        "Tender documentation management and preparation",
        "Hydro-Agricultural Development",
        "Design and optimization of irrigation and drainage networks",
      ],
    },
  }

  const t = content[locale as keyof typeof content] || content.fr

  const stickyContent = [
    {
      title: t.subtitle1 + " " + t.subtitle1b,
      description: t.desc1,
      content: (
        <div className="h-full w-full flex items-center justify-center text-white relative">
          <img src="/images/image.png" alt="Dam" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
            <p className="font-bold text-xl">
              {t.subtitle1} {t.subtitle1b}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: locale === "fr" ? "AMÉNAGEMENT" : "DEVELOPMENT",
      description:
        locale === "fr"
          ? "Solutions durables pour l'irrigation et le drainage agricole."
          : "Sustainable solutions for irrigation and agricultural drainage.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white relative">
          <img src="/agricultural-irrigation.png" alt="Irrigation" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
            <p className="font-bold text-xl">{locale === "fr" ? "Irrigation Moderne" : "Modern Irrigation"}</p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="w-full">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/image.png" alt="Hydraulic Infrastructure" className="object-cover w-full h-full brightness-50" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-balance">{t.title}</h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 leading-relaxed text-pretty max-w-5xl mx-auto text-justify"
          >
            {t.intro}
          </motion.p>
        </div>
      </section>

      {/* Sticky Scroll Reveal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <StickyScroll content={stickyContent} />
        </div>
      </section>

      {/* Animated Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl border border-border shadow-xl"
            >
              <h3 className="text-3xl font-bold mb-10 text-secondary text-center">
                {locale === "fr" ? "Nos Services Spécialisés" : "Our Specialized Services"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.services1.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-80">
              <img
                src="/placeholder.svg?height=500&width=700"
                alt="Irrigation system"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="relative h-80">
              <img
                src="/placeholder.svg?height=500&width=700"
                alt="Water reservoir"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
