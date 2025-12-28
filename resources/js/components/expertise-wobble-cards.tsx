"use client"
import { WobbleCard } from "@/components/ui/wobble-card"
import { Link } from '@inertiajs/react';

import { ArrowRight } from "lucide-react"

interface ExpertiseWobbleCardsProps {
  sectors: Array<{
    title: string
    description: string
    image: string
    href: string
    link: string
  }>
}

export function ExpertiseWobbleCards({ sectors }: ExpertiseWobbleCardsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      {/* Mine - Large card spanning 2 columns */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-[#003B5C] min-h-[500px] lg:min-h-[300px] overflow-hidden group"
        className=""
      >
        <div className="max-w-xs relative z-10">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {sectors[0]?.title}
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">{sectors[0]?.description}</p>
          <Link
            href={sectors[0]?.href || "#"}
            className="inline-flex items-center mt-6 text-[#7CB342] font-medium hover:text-[#6BA030] transition-colors"
          >
            {sectors[0]?.link}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <img
          src={sectors[0]?.image || "/placeholder.svg"}
          width={800}
          height={600}
          alt={sectors[0]?.title || "Mining"}
          className="absolute -right-4 lg:-right-[15%] filter -bottom-10 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2 opacity-80"
        />
      </WobbleCard>

      {/* Hydraulic Infrastructure - Small card */}
      <WobbleCard containerClassName="col-span-1 min-h-[400px] bg-[#7CB342] overflow-hidden group">
        <div className="relative z-10">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {sectors[1]?.title}
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">{sectors[1]?.description}</p>
          <Link
            href={sectors[1]?.href || "#"}
            className="inline-flex items-center mt-6 text-white font-medium hover:text-gray-200 transition-colors"
          >
            {sectors[1]?.link}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <img
          src={sectors[1]?.image || "/placeholder.svg"}
          width={400}
          height={400}
          alt={sectors[1]?.title || "Hydraulic"}
          className="absolute -right-10 -bottom-10 object-cover rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"
        />
      </WobbleCard>

      {/* Urban Development - Wide card spanning 3 columns */}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-r from-[#003B5C] to-[#004C75] min-h-[500px] lg:min-h-[400px] overflow-hidden group">
        <div className="max-w-sm relative z-10">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {sectors[2]?.title}
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">{sectors[2]?.description}</p>
          <Link
            href={sectors[2]?.href || "#"}
            className="inline-flex items-center mt-6 text-[#7CB342] font-medium hover:text-[#6BA030] transition-colors"
          >
            {sectors[2]?.link}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <img
          src={sectors[2]?.image || "/placeholder.svg"}
          width={1000}
          height={600}
          alt={sectors[2]?.title || "Urban Development"}
          className="absolute -right-10 md:-right-[20%] lg:-right-[5%] -bottom-20 object-cover rounded-2xl opacity-60 group-hover:scale-105 transition-transform duration-500"
        />
      </WobbleCard>

      {/* Construction Management - Small card */}
      <WobbleCard containerClassName="col-span-1 min-h-[400px] bg-[#6BA030] overflow-hidden group">
        <div className="relative z-10">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {sectors[3]?.title}
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">{sectors[3]?.description}</p>
          <Link
            href={sectors[3]?.href || "#"}
            className="inline-flex items-center mt-6 text-white font-medium hover:text-gray-200 transition-colors"
          >
            {sectors[3]?.link}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <img
          src={sectors[3]?.image || "/placeholder.svg"}
          width={400}
          height={400}
          alt={sectors[3]?.title || "Construction"}
          className="absolute -right-10 -bottom-10 object-cover rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"
        />
      </WobbleCard>

      {/* Environment - Large card spanning 2 columns */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-[#7CB342] to-[#8BC34A] min-h-[500px] lg:min-h-[300px] overflow-hidden group"
        className=""
      >
        <div className="max-w-sm relative z-10">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {sectors[4]?.title}
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">{sectors[4]?.description}</p>
          <Link
            href={sectors[4]?.href || "#"}
            className="inline-flex items-center mt-6 text-white font-medium hover:text-gray-200 transition-colors"
          >
            {sectors[4]?.link}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <img
          src={sectors[4]?.image || "/placeholder.svg"}
          width={600}
          height={600}
          alt={sectors[4]?.title || "Environment"}
          className="absolute -right-4 lg:-right-[10%] -bottom-10 object-cover rounded-2xl opacity-70 group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-500"
        />
      </WobbleCard>
    </div>
  )
}
