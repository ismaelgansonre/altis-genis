"use client"

import { useLanguage } from "@/hooks/use-language"

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center gap-2 rounded-full bg-muted p-1">
      <button
        onClick={() => setLocale("fr")}
        className={`flex items-center justify-center w-9 h-9 rounded-full transition-all ${
          locale === "fr" ? "bg-[#7CB342] text-white" : "bg-transparent text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Français"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-6 h-4">
          <rect width="1" height="2" fill="#002395" />
          <rect x="1" width="1" height="2" fill="#FFFFFF" />
          <rect x="2" width="1" height="2" fill="#ED2939" />
        </svg>
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`flex items-center justify-center w-9 h-9 rounded-full transition-all ${
          locale === "en" ? "bg-[#7CB342] text-white" : "bg-transparent text-muted-foreground hover:text-foreground"
        }`}
        aria-label="English"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-6 h-4">
          <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z" />
          </clipPath>
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v-30 h-30 z h-30 v15 z v-30 h30 z" />
          </clipPath>
          <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
          </g>
        </svg>
      </button>
    </div>
  )
}
