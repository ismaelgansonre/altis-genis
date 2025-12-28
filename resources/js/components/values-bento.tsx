"use client"

import { useEffect, useState } from "react"
import { Target, Leaf, Shield, Users, TrendingUp, Sparkles, Lock, Handshake } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Value {
  title: string
  description: string
}

interface ValuesBentoProps {
  values: {
    excellence: Value
    durabilite: Value
    integrite: Value
    collaboration: Value
  }
}

export function ValuesBento({ values }: ValuesBentoProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[240px]">
      {/* Excellence - Large card with gradient and animated icon */}
      <Card
        className={cn(
          "md:col-span-2 lg:col-span-3 row-span-2 p-8 bg-gradient-to-br from-[#7CB342] to-[#558B2F] text-white overflow-hidden relative group transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        )}
      >
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
        <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Target className="w-8 h-8 animate-pulse" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-balance">{values.excellence.title}</h3>
            <p className="text-white/90 leading-relaxed text-pretty">{values.excellence.description}</p>
          </div>
          <div className="flex gap-2 mt-4">
            <div className="w-12 h-1 bg-white/40 rounded-full group-hover:w-20 transition-all duration-300" />
            <div className="w-8 h-1 bg-white/20 rounded-full" />
          </div>
        </div>
      </Card>

      {/* Durabilité - Medium card with leaf pattern */}
      <Card
        className={cn(
          "md:col-span-2 lg:col-span-3 p-6 bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-green-200 overflow-hidden relative group transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        )}
        style={{ transitionDelay: "100ms" }}
      >
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5" />
        <div className="absolute right-4 top-4 text-green-200 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
          <Leaf className="w-24 h-24" strokeWidth={1} />
        </div>
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#7CB342] to-[#558B2F] text-white mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            <Leaf className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-[#003B5C] mb-3 text-balance">{values.durabilite.title}</h3>
          <p className="text-gray-700 leading-relaxed text-sm text-pretty">{values.durabilite.description}</p>
        </div>
      </Card>

      {/* Intégrité - Tall card with shield animation */}
      <Card
        className={cn(
          "md:col-span-2 row-span-2 p-6 bg-[#003B5C] text-white overflow-hidden relative group transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        )}
        style={{ transitionDelay: "200ms" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#002847]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping" />
          <div
            className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="relative z-10 h-full flex flex-col">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6 group-hover:scale-110 transition-transform duration-300">
            <Shield className="w-8 h-8 group-hover:animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-balance">{values.integrite.title}</h3>
          <p className="text-white/90 leading-relaxed flex-grow text-pretty">{values.integrite.description}</p>
          <div className="mt-6 flex items-center gap-2 text-sm text-white/60">
            <Lock className="w-4 h-4" />
            <span>Confiance garantie</span>
          </div>
        </div>
      </Card>

      {/* Collaboration - Wide card with team icons */}
      <Card
        className={cn(
          "md:col-span-2 lg:col-span-4 p-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-200 overflow-hidden relative group transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        )}
        style={{ transitionDelay: "300ms" }}
      >
        <div className="absolute right-0 top-0 w-48 h-48 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
              <Users className="w-8 h-8" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-2xl font-bold text-[#003B5C] mb-3 text-balance">{values.collaboration.title}</h3>
            <p className="text-gray-700 leading-relaxed text-pretty">{values.collaboration.description}</p>
          </div>
          <div className="flex md:flex-col gap-3 items-center">
            <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Handshake className="w-5 h-5 text-[#7CB342]" />
            </div>
            <div
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              style={{ transitionDelay: "100ms" }}
            >
              <TrendingUp className="w-5 h-5 text-blue-500" />
            </div>
            <div
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              style={{ transitionDelay: "200ms" }}
            >
              <Sparkles className="w-5 h-5 text-purple-500" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
