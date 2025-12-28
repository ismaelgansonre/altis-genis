"use client"

import { useLanguage } from "@/hooks/use-language"
import { CheckCircle2 } from "lucide-react"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function MineSectorPage() {
  const { locale } = useLanguage()

  const content = {
    fr: {
      title: "MINE",
      intro:
        "AltiGenis offre une expertise complète en ingénierie minière, gestion des infrastructures, hydrogéologie et restauration des sites miniers, couvrant l'ensemble du cycle de vie d'un projet, de l'exploitation à la fermeture. Nos services sont structurés autour de trois axes majeurs : la gestion des infrastructures minières, incluant la conception et la surveillance des installations de stockage des résidus miniers (TSF) et des ouvrages critiques ; la gestion des eaux, qui assure le contrôle, le suivi et le traitement des eaux minières pour minimiser les impacts environnementaux ; et la fermeture et la restauration des sites miniers, avec des stratégies de réhabilitation progressive, de gestion des résidus et de valorisation des matériaux. En s'appuyant sur les meilleurs standards internationaux et des solutions d'ingénierie adaptées aux défis de chaque site, AltiGenis accompagne ses clients dans une approche durable, sécuritaire et conforme aux exigences réglementaires.",
      subtitle1: "RÉSIDUS",
      subtitle1b: "MINIERS",
      desc1:
        "AltiGenis offre une expertise complète en conception, gestion et surveillance des installations de stockage des résidus miniers (TSF) et des infrastructures associées. Nos services sont alignés sur les standards internationaux, notamment le GISTM et les recommandations de la CIGB (ICOLD), garantissant une gestion sécurisée et durable des ouvrages. En intégrant les meilleures pratiques géotechniques, hydrauliques et environnementales, AltiGenis accompagne ses clients à chaque étape du cycle de vie des infrastructures minières.",
      services1: [
        "Conception de barrages et d'ouvrage de retenue",
        "Modélisation hydraulique et hydrologique",
        "Investigations et études géotechniques",
        "Conception et gestion des ouvrages hydrauliques",
        "Gestion et préparation des dossiers d'appel d'offres",
        "Aménagement Hydro-Agricole",
        "Conception et optimisation des réseaux d'irrigation et de drainage",
      ],
      subtitle2: "GESTION DES",
      subtitle2b: "EAUX",
      desc2:
        "Une gestion optimisée des eaux est essentielle pour garantir la performance et la durabilité des opérations minières. AltiGenis assure l'analyse, la modélisation et le suivi des systèmes hydrologiques et hydrauliques, tout en respectant les exigences environnementales et réglementaires. Nos services incluent la planification hydrologique, la conception de systèmes de gestion des eaux minières, l'évaluation de l'impact sur les ressources en eau, ainsi que la mise en place de solutions de traitement adaptées pour minimiser les impacts environnementaux.",
      services2: [
        "Gestion des eaux souterraines et superficielles",
        "Modélisation hydrologique et hydraulique",
        "Hydrologie pour dimensionnement des ouvrages critiques",
        "Suivi et gestion des systèmes de gestion des eaux",
        "Système de traitement des eaux (passive et active)",
        "Stratégie de traitement des eaux à long terme",
      ],
      subtitle3: "RESTAURATION",
      subtitle3b: "MINIÈRE",
      desc3:
        "AltiGenis propose une expertise complète dans la planification et la mise en œuvre de la restauration des sites miniers. La transformation et la réutilisation responsable des sites exploités constituent un enjeu majeur de l'industrie minière moderne. Nos services couvrent la conception et l'exécution de plans de réaménagement, la gestion et la valorisation des matériaux extraits, ainsi que la surveillance et le contrôle des impacts environnementaux. Nous développons des stratégies de réhabilitation progressive, intégrant des solutions durables pour restaurer les sites selon des normes strictes et assurer une fermeture réussie.",
      services3: [
        "Planification et ingénierie de la fermeture",
        "Reconstitution physique et chimique de l'environnement",
        "Plan de réhabilitation et de restauration progressif",
        "Bilan géochimique et ingénierie de couverture mise en végétation",
        "Suivi post-fermeture and surveillance environnementale à long terme",
      ],
      subtitle4: "OPÉRATIONS",
      subtitle4b: "MINIÈRES",
      desc4:
        "AltiGenis accompagne les exploitants miniers dans la gestion et l'optimisation des opérations minières, en apportant une expertise en planification, supervision et amélioration continue des processus. Nos services incluent la planification et la gestion des travaux de sautage pour optimiser l'extraction tout en garantissant la sécurité, la supervision des opérations d'excavation et de manutention pour assurer une exploitation efficace, la gestion des stocks de minerais et stériles, ainsi que l'optimisation de la récupération des ressources. Nous accompagnons également nos clients dans la gestion des défaillances minières, en intégrant les meilleures pratiques pour prévenir et gérer les instabilités géotechniques.",
      services4: [
        "Conception et gestion budgétaire du drainage de l'empreinte de la fosse",
        "Suivi géotechnique pour optimisation des pentes et stabilité",
        "Conception du processus d'exploitation",
        "Gestion des défaillances minières",
      ],
    },
    en: {
      title: "MINING",
      intro:
        "AltiGenis offers comprehensive expertise in mining engineering, infrastructure management, hydrogeology, and mine site rehabilitation, covering the entire life cycle of a project, from exploitation to closure. Our services are structured around three major axes: mining infrastructure management, including the design and monitoring of tailings storage facilities (TSF) and critical structures; water management, which ensures control, monitoring, and treatment of mining waters to minimize environmental impacts; and mine site closure and rehabilitation, with progressive rehabilitation strategies, tailings management, and material valorization. By relying on the best international standards and engineering solutions adapted to each site's challenges, AltiGenis supports its clients in a sustainable, safe, and regulatory-compliant approach.",
      subtitle1: "MINING",
      subtitle1b: "TAILINGS",
      desc1:
        "AltiGenis offers comprehensive expertise in the design, management, and monitoring of tailings storage facilities (TSF) and associated infrastructures. Our services align with international standards, notably the GISTM and ICGB (ICOLD) recommendations, ensuring safe and sustainable management of structures. By integrating best geotechnical, hydraulic, and environmental practices, AltiGenis supports its clients at every stage of the mining infrastructure life cycle.",
      services1: [
        "Dam and retention structure design",
        "Hydraulic and hydrological modeling",
        "Geotechnical investigations and studies",
        "Design and management of hydraulic structures",
        "Tender documentation management and preparation",
        "Hydro-Agricultural Development",
        "Design and optimization of irrigation and drainage networks",
      ],
      subtitle2: "WATER",
      subtitle2b: "MANAGEMENT",
      desc2:
        "Optimized water management is essential to ensure the performance and sustainability of mining operations. AltiGenis provides analysis, modeling, and monitoring of hydrological and hydraulic systems, while respecting environmental and regulatory requirements. Our services include hydrological planning, design of mining water management systems, assessment of impact on water resources, and implementation of adapted treatment solutions to minimize environmental impacts.",
      services2: [
        "Groundwater and surface water management",
        "Hydrological and hydraulic modeling",
        "Hydrology for critical structure sizing",
        "Monitoring and management of water management systems",
        "Water treatment systems (passive and active)",
        "Long-term water treatment strategy",
      ],
      subtitle3: "MINE",
      subtitle3b: "REHABILITATION",
      desc3:
        "AltiGenis offers comprehensive expertise in planning and implementing mine site rehabilitation. The transformation and responsible reuse of exploited sites constitute a major challenge for the modern mining industry. Our services cover the design and execution of reclamation plans, management and valorization of extracted materials, and monitoring and control of environmental impacts. We develop progressive rehabilitation strategies, integrating sustainable solutions to restore sites according to strict standards and ensure successful closure.",
      services3: [
        "Closure planning and engineering",
        "Physical and chemical environment restoration",
        "Progressive rehabilitation and restoration plan",
        "Geochemical balance and revegetation cover engineering",
        "Post-closure monitoring and long-term environmental surveillance",
      ],
      subtitle4: "MINING",
      subtitle4b: "OPERATIONS",
      desc4:
        "AltiGenis supports mining operators in managing and optimizing mining operations, providing expertise in planning, supervision, and continuous process improvement. Our services include planning and management of blasting operations to optimize extraction while ensuring safety, supervision of excavation and handling operations for efficient exploitation, management of ore and waste stockpiles, and optimization of resource recovery. We also support our clients in managing mining failures, integrating best practices to prevent and manage geotechnical instabilities.",
      services4: [
        "Design and budget management of pit footprint drainage",
        "Geotechnical monitoring for slope optimization and stability",
        "Mining process design",
        "Mining failure management",
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
          <img src="/images/image.png" alt="Tailings" className="object-cover w-full h-full" />
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
          <img src="/water-management.jpg" alt="Water" className="object-cover w-full h-full" />
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
          <img src="/mine-site-restoration.jpg" alt="Restoration" className="object-cover w-full h-full" />
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
          <img src="/mining-equipment-excavation.jpg" alt="Operations" className="object-cover w-full h-full" />
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
          <img src="/images/image.png" alt="Mining" className="object-cover w-full h-full brightness-50" />
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

      {/* Sticky Scroll Content */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <StickyScroll content={stickyContent} />
        </div>
      </section>

      {/* Services Animated List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: t.subtitle1 + " " + t.subtitle1b, services: t.services1 },
              { title: t.subtitle2 + " " + t.subtitle2b, services: t.services2 },
              { title: t.subtitle3 + " " + t.subtitle3b, services: t.services3 },
              { title: t.subtitle4 + " " + t.subtitle4b, services: t.services4 },
            ].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl border border-border shadow-sm"
              >
                <h3 className="text-xl font-bold mb-6 text-secondary border-l-4 border-primary pl-3">
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + index * 0.05 }}
                      className="flex items-start gap-3 group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1 transition-transform group-hover:scale-110" />
                      <span className="text-sm text-gray-600 leading-tight">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64">
              <img src="/images/image.png" alt="Mining operations 1" className="object-cover w-full h-full rounded-lg" />
            </div>
            <div className="relative h-64">
              <img
                src="/mining-equipment-excavation.jpg"
                alt="Mining operations 2"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <img
                src="/mine-site-restoration.jpg"
                alt="Mining operations 3"
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
