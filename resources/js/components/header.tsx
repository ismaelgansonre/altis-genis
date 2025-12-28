"use client"

import { useState, useEffect } from "react"
import { Link, usePage } from '@inertiajs/react';
import { LanguageToggle } from "./language-toggle"
import { useLanguage } from "@/hooks/use-language"
import { getTranslations } from "@/lib/i18n"


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { locale } = useLanguage()
  const t = getTranslations(locale)
  const { url } = usePage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => url === path

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`sticky top-0 z-50 w-full bg-white border-b border-gray-200 transition-all duration-300 hidden md:block ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="https://www.altigenis.com/images/logo-altigenis.png"
                alt="AltiGenis"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-8">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors hover:text-[#7CB342] ${
                  isActive("/") ? "text-[#7CB342]" : "text-[#003B5C]"
                }`}
              >
                {t.nav.accueil}
              </Link>
              <Link
                href="/about"
                className={`text-sm font-medium transition-colors hover:text-[#7CB342] ${
                  isActive("/about") ? "text-[#7CB342]" : "text-[#003B5C]"
                }`}
              >
                {t.nav.apropos}
              </Link>
              <Link
                href="/sectors"
                className={`text-sm font-medium transition-colors hover:text-[#7CB342] ${
                  isActive("/sectors") || url?.startsWith("/sectors/") ? "text-[#7CB342]" : "text-[#003B5C]"
                }`}
              >
                {t.nav.secteurs}
              </Link>
              <Link
                href="/contact"
                className={`text-sm font-medium transition-colors hover:text-[#7CB342] ${
                  isActive("/contact") ? "text-[#7CB342]" : "text-[#003B5C]"
                }`}
              >
                {t.nav.contact}
              </Link>
              <Link
                href="/careers"
                className={`text-sm font-medium transition-colors hover:text-[#7CB342] ${
                  isActive("/careers") ? "text-[#7CB342]" : "text-[#003B5C]"
                }`}
              >
                {t.nav.carriere}
              </Link>
              <LanguageToggle />
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 md:hidden">
        <div className="flex items-center justify-between px-4 h-16">
          <Link href="/" className="flex items-center">
            <img
              src="https://www.altigenis.com/images/logo-altigenis.png"
              alt="AltiGenis"
              width={150}
              height={50}
              className="h-10 w-auto"
            />
          </Link>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 transition-colors hover:bg-gray-200"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
                <span
                  className={`block w-5 h-0.5 bg-[#003B5C] transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-[#003B5C] transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-[#003B5C] transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="flex flex-col p-4 space-y-2">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive("/") ? "bg-[#7CB342]/10 text-[#7CB342]" : "text-[#003B5C] hover:bg-gray-100"
                }`}
              >
                {t.nav.accueil}
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive("/about") ? "bg-[#7CB342]/10 text-[#7CB342]" : "text-[#003B5C] hover:bg-gray-100"
                }`}
              >
                {t.nav.apropos}
              </Link>
              <Link
                href="/sectors"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive("/sectors") || url?.startsWith("/sectors/")
                    ? "bg-[#7CB342]/10 text-[#7CB342]"
                    : "text-[#003B5C] hover:bg-gray-100"
                }`}
              >
                {t.nav.secteurs}
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive("/contact") ? "bg-[#7CB342]/10 text-[#7CB342]" : "text-[#003B5C] hover:bg-gray-100"
                }`}
              >
                {t.nav.contact}
              </Link>
              <Link
                href="/careers"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive("/careers") ? "bg-[#7CB342]/10 text-[#7CB342]" : "text-[#003B5C] hover:bg-gray-100"
                }`}
              >
                {t.nav.carriere}
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
