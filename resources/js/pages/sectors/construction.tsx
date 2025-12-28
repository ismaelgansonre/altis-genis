"use client"

import { useLanguage } from "@/hooks/use-language"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ConstructionSectorPage() {
  const { locale } = useLanguage()

  const content = {
    fr: {
      title: "GESTION DE CONSTRUCTION",
      intro:
        "AltiGenis offre des services de gestion de construction complets, adaptés aux projets d'infrastructures hydrauliques, minières et de développement urbain. Notre approche intègre planification rigoureuse, coordination des intervenants et contrôle qualité pour garantir le respect des délais, des budgets et des spécifications techniques.",
      subtitle1: "PLANIFICATION ET",
      subtitle1b: "EXECUTION DES TRAVAUX",
      desc1:
        "Une gestion efficace des travaux repose sur une planification rigoureuse, une coordination optimisée et un suivi méthodique. Nos services garantissent le respect des délais, des coûts et des exigences techniques tout au long du projet. Nous assurons la supervision des travaux, la gestion des contrats et des entrepreneurs, ainsi que la mise en service des infrastructures. L'estimation des coûts et de quantités des matériaux (BQM) permettent une maîtrise budgétaire et une optimisation des approvisionnements selon les normes de l'AACE.",
      services1: [
        "Estimation des coûts et quantités des matériaux (BDQE)",
        "Coordination des entrepreneurs et gestion des contrats de construction",
        "Planification et suivi des travaux selon les délais et contraintes techniques",
        "Supervision des travaux et gestion des avancements",
        "Administration des contrats et gestion des réclamations",
      ],
      subtitle2: "CONTRÔLE",
      subtitle2b: "QUALITÉ ET CONFORMITÉ",
      desc2:
        "La mise en place d'un système d'assurance qualité (QA/QC) garantit la conformité des travaux aux normes internationales et aux exigences du projet. Nous réalisons des essais de matériaux en laboratoire et in situ, des inspections techniques, ainsi que le suivi des non-conformités et des actions correctives. Nos services intègrent également la vérification de la conformité aux exigences de sécurité et d'environnement (HSE), assurant ainsi la durabilité et la fiabilité des ouvrages.",
      services2: [
        "Mise en place du programme QA/QC",
        "Contrôle et essais des matériaux de construction",
        "Inspections techniques et gestion des non-conformités",
        "Validation des documents techniques et propositions des entrepreneurs",
      ],
      subtitle3: "GESTION DES MATERIAUX",
      subtitle3b: "ET BANCS D'EMPRUNT",
      desc3:
        "Une gestion optimisée des matériaux est essentielle pour garantir la qualité des ouvrages et réduire les coûts. Nous assurons l'identification, l'exploitation et le suivi des bancs d'emprunt de matériaux (sols, granulats, remblais), en réalisant des contrôles de conformité avant leur intégration aux travaux. Nous planifions et optimisons l'extraction, le concassage, le transport et la gestion des stocks, tout en veillant à la réhabilitation des sites exploités selon les exigences réglementaires et environnementales.",
      services3: [
        "Étude, identification et exploitation des sites d'emprunt (sols, remblais...)",
        "Contrôle qualité des matériaux avant intégration aux travaux",
        "Planification et suivi de l'extraction, du transport et des stocks",
        "Optimisation des ressources et réduction des coûts",
        "Réhabilitation des sites d'emprunt selon la réglementation",
      ],
      subtitle4: "SANTE SECURITE",
      subtitle4b: "ET ENVIRONNEMENT (SSE)",
      desc4:
        "AltiGenis place la santé, la sécurité et l'environnement au cœur de la gestion de ses projets. Notre approche SSE repose sur la prévention des risques, le respect des normes internationales (ISO 45001, ISO 14001), et la mise en œuvre de dispositifs adaptés à chaque chantier. Nous assurons un suivi rigoureux des conditions de travail, la formation continue du personnel, la gestion des déchets, la maîtrise des nuisances et la préservation de l'environnement. L'objectif est de garantir des environnements de travail sûrs, conformes et durables.",
      services4: [
        "Vérification du respect des normes SSE sur les chantiers",
        "Mise en œuvre des mesures de sécurité collective et individuelle",
        "Gestion des risques HSE (analyse, prévention, signalisation)",
        "Sensibilisation et formation du personnel aux bonnes pratiques SSE",
        "Suivi environnemental (pollution, déchets, nuisances chantier)",
      ],
    },
    en: {
      title: "CONSTRUCTION MANAGEMENT",
      intro:
        "AltiGenis offers comprehensive construction management services, adapted to hydraulic infrastructure, mining, and urban development projects. Our approach integrates rigorous planning, stakeholder coordination, and quality control to ensure compliance with deadlines, budgets, and technical specifications.",
      subtitle1: "PLANNING AND",
      subtitle1b: "EXECUTION OF WORKS",
      desc1:
        "Effective work management relies on rigorous planning, optimized coordination, and methodical monitoring. Our services ensure compliance with deadlines, costs, and technical requirements throughout the project. We ensure work supervision, contract and contractor management, and infrastructure commissioning. Cost estimation and material quantities (BQM) enable budget control and supply optimization according to AACE standards.",
      services1: [
        "Material cost and quantity estimation (BDQE)",
        "Contractor coordination and construction contract management",
        "Work planning and monitoring according to deadlines and technical constraints",
        "Work supervision and progress management",
        "Contract administration and claims management",
      ],
      subtitle2: "QUALITY",
      subtitle2b: "AND COMPLIANCE CONTROL",
      desc2:
        "Implementation of a quality assurance system (QA/QC) ensures work compliance with international standards and project requirements. We perform laboratory and in-situ material testing, technical inspections, and monitoring of non-conformities and corrective actions. Our services also integrate verification of compliance with safety and environmental requirements (HSE), thus ensuring the sustainability and reliability of structures.",
      services2: [
        "QA/QC program implementation",
        "Construction material control and testing",
        "Technical inspections and non-conformity management",
        "Validation of technical documents and contractor proposals",
      ],
      subtitle3: "MATERIALS",
      subtitle3b: "AND BORROW PIT MANAGEMENT",
      desc3:
        "Optimized material management is essential to ensure structure quality and reduce costs. We ensure the identification, exploitation, and monitoring of material borrow pits (soils, aggregates, backfill), performing compliance checks before their integration into works. We plan and optimize extraction, crushing, transport, and stock management, while ensuring rehabilitation of exploited sites according to regulatory and environmental requirements.",
      services3: [
        "Study, identification and exploitation of borrow sites (soils, backfill...)",
        "Material quality control before integration into works",
        "Planning and monitoring of extraction, transport and stocks",
        "Resource optimization and cost reduction",
        "Rehabilitation of borrow sites according to regulations",
      ],
      subtitle4: "HEALTH SAFETY",
      subtitle4b: "AND ENVIRONMENT (HSE)",
      desc4:
        "AltiGenis places health, safety, and environment at the heart of its project management. Our HSE approach is based on risk prevention, compliance with international standards (ISO 45001, ISO 14001), and implementation of devices adapted to each site. We ensure rigorous monitoring of working conditions, continuous staff training, waste management, nuisance control, and environmental preservation. The objective is to ensure safe, compliant, and sustainable work environments.",
      services4: [
        "Verification of HSE standards compliance on sites",
        "Implementation of collective and individual safety measures",
        "HSE risk management (analysis, prevention, signage)",
        "Staff awareness and training in HSE best practices",
        "Environmental monitoring (pollution, waste, site nuisances)",
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
          <img src="/images/image.png" alt="Construction" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
            <p className="font-bold text-xl">
              {t.subtitle1} {t.subtitle1b}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: t.subtitle2 + " " + t.subtitle2b,
      description: t.desc2,
      content: (
        <div className="h-full w-full flex items-center justify-center text-white relative">
          <img src="/quality-control.jpg" alt="Quality" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
            <p className="font-bold text-xl">
              {t.subtitle2} {t.subtitle2b}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: t.subtitle3 + " " + t.subtitle3b,
      description: t.desc3,
      content: (
        <div className="h-full w-full flex items-center justify-center text-white relative">
          <img src="/diverse-art-materials.png" alt="Materials" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
            <p className="font-bold text-xl">
              {t.subtitle3} {t.subtitle3b}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: t.subtitle4 + " " + t.subtitle4b,
      description: t.desc4,
      content: (
        <div className="h-full w-full flex items-center justify-center text-white relative">
          <img src="/images/image.png" alt="HSE" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
            <p className="font-bold text-xl">
              {t.subtitle4} {t.subtitle4b}
            </p>
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
          <img src="/images/image.png" alt="Construction Management" className="object-cover w-full h-full brightness-50" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold">{t.title}</h1>
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

      {/* Animated Service Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: t.subtitle1 + " " + t.subtitle1b, services: t.services1 },
              { title: t.subtitle2 + " " + t.subtitle2b, services: t.services2 },
              { title: t.subtitle3 + " " + t.subtitle3b, services: t.services3 },
              { title: t.subtitle4 + " " + t.subtitle4b, services: t.services4 },
            ].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white p-8 rounded-2xl border border-border shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-6 text-secondary">{section.title}</h3>
                <div className="space-y-4">
                  {section.services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HSE Section - Animated */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">
            <span className="text-[#7CB342]">{t.subtitle4}</span> <span className="text-[#003B5C]">{t.subtitle4b}</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <img src="/images/image.png" alt="Safety and Environment" className="object-cover w-full h-full" />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-6 text-pretty text-justify">{t.desc4}</p>
              <div className="space-y-3">
                {t.services4.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#7CB342] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
