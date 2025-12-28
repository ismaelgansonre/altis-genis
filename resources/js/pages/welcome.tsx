"use client"

import { useLanguage } from "@/hooks/use-language"
import { getTranslations } from "@/lib/i18n"

import { Button } from "@/components/ui/button"
import { ValuesBentoAdvanced } from "@/components/values-bento-advanced"
import { ExpertiseWobbleCards } from "../components/expertise-wobble-cards"
import { Link } from '@inertiajs/react';

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  const { locale } = useLanguage()
  const t = getTranslations(locale)

  const sectors = [
    {
      title: t.sectors.mine.title,
      description: t.sectors.mine.description,
      image: "/open-pit-mining-operation-geological-engineering.jpg",
      href: "/sectors/mine",
      link: t.sectors.mine.link,
    },
    {
      title: t.sectors.hydraulique.title,
      description: t.sectors.hydraulique.description,
      image: "/large-dam-and-hydraulic-infrastructure-geological-.jpg",
      href: "/sectors/hydraulic",
      link: t.sectors.hydraulique.link,
    },
    {
      title: t.sectors.urbain.title,
      description: t.sectors.urbain.description,
      image: "/modern-urban-development-planning-infrastructure.jpg",
      href: "/sectors/urban",
      link: t.sectors.urbain.link,
    },
    {
      title: t.sectors.construction.title,
      description: t.sectors.construction.description,
      image: "/construction-site-management-geological-survey.jpg",
      href: "/sectors/construction",
      link: t.sectors.construction.link,
    },
    {
      title: t.sectors.environnement.title,
      description: t.sectors.environnement.description,
      image: "/environmental-reclamation-mining-site-nature.jpg",
      href: "/sectors/environment",
      link: t.sectors.environnement.link,
    },
  ]



  return (
    <div className="w-full">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img  src="/images/image.png" alt="Mining equipment" className="object-cover brightness-50" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-fade-in-up">{t.hero.title}</h1>
          <p
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-pretty animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t.hero.subtitle}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button asChild size="lg" className="bg-[#7CB342] hover:bg-[#6BA030] text-white">
              <Link href="/sectors">{t.hero.cta}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white"
            >
              <Link href="/contact">{t.hero.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#7CB342]">{t.sectors.title}</span>{" "}
              <span className="text-[#003B5C]">{t.sectors.subtitle}</span>
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg text-pretty leading-relaxed">
              {t.sectors.description}
            </p>
          </div>

          <ExpertiseWobbleCards sectors={sectors} />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#7CB342]">{t.values.title}</span>{" "}
              <span className="text-[#003B5C]">{t.values.subtitle}</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              {t.values.description}
            </p>
          </div>

          <ValuesBentoAdvanced
            values={{
              excellence: {
                title: t.values.excellence.title,
                description: t.values.excellence.description,
              },
              durabilite: {
                title: t.values.durabilite.title,
                description: t.values.durabilite.description,
              },
              integrite: {
                title: t.values.integrite.title,
                description: t.values.integrite.description,
              },
              collaboration: {
                title: t.values.collaboration.title,
                description: t.values.collaboration.description,
              },
            }}
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img  src="/engineering-team-collaboration.png" alt="Team"    className="object-cover" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#7CB342]">{t.team.title}</span>{" "}
                <span className="text-[#003B5C]">{t.team.subtitle}</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-pretty">{t.team.description}</p>
              <Button asChild className="bg-[#7CB342] hover:bg-[#6BA030] text-white">
                <Link href="/about">{t.team.cta}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#003B5C] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.contact.ctaTitle}</h2>
          <Button asChild size="lg" className="bg-[#7CB342] hover:bg-[#6BA030] text-white">
            <Link href="/contact">{t.contact.ctaButton}</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
