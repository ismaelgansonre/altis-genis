"use client"

import { motion } from "framer-motion"
import { Leaf, CheckCircle2, FileCheck, Award, Lock } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedList } from "@/components/magicui/animated-list"
import { AnimatedBeamMultipleOutputDemo } from "@/components/magicui/animated-beam-demo"

// Excellence: Animation with glowing orbs and grid
export const ExcellenceBackground = () => (
  <div className="absolute inset-0 overflow-hidden opacity-30">
    <div className="absolute inset-0 bg-gradient-to-tr from-[#7CB342]/40 to-transparent" />
    <motion.div
      animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[#7CB342] blur-3xl"
    />
    <motion.div
      animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.15, 1] }}
      transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      className="absolute -left-10 -bottom-10 h-56 w-56 rounded-full bg-[#558B2F] blur-3xl"
    />
    <div className="grid h-full w-full grid-cols-6 gap-2 p-4 opacity-20">
      {[...Array(24)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.1, 0.6, 0.1] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.1 }}
          className="h-full w-full bg-[#7CB342] rounded-sm"
        />
      ))}
    </div>
  </div>
)

// Durabilité: Floating leaves animation - Made more prominent
export const DurabilityBackground = () => (
  <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-[#7CB342]/10 to-transparent">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: 300, x: Math.random() * 500 - 100, opacity: 0, rotate: 0 }}
        animate={{
          y: -100,
          opacity: [0, 1, 1, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Number.POSITIVE_INFINITY,
          delay: Math.random() * 5,
          ease: "linear",
        }}
        className="absolute bottom-0"
      >
        <Leaf className="text-[#7CB342]" size={32 + Math.random() * 20} strokeWidth={1.5} />
      </motion.div>
    ))}
  </div>
)

// Intégrité: Using Animated List for a more "alive" feel
export const IntegrityBackground = () => {
  const principles = [
    { icon: CheckCircle2, text: "Normes ISO 45001", color: "text-[#7CB342]" },
    { icon: FileCheck, text: "Conformité HSE", color: "text-[#558B2F]" },
    { icon: Award, text: "Éthique Professionnelle", color: "text-[#7CB342]" },
    { icon: Lock, text: "Sécurité Garantie", color: "text-[#558B2F]" },
  ]

  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 overflow-hidden bg-slate-50/50">
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(to_bottom,white,transparent,white)]" />
      <div className="relative z-10 w-full max-w-[280px]">
        <AnimatedList delay={2500}>
          {principles.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-lg border border-slate-100 mb-2"
            >
              <div className={cn("p-2 rounded-lg bg-slate-50", item.color)}>
                <item.icon size={20} />
              </div>
              <span className="text-sm font-semibold text-slate-700">{item.text}</span>
            </div>
          ))}
        </AnimatedList>
      </div>
    </div>
  )
}

// Collaboration: Using Animated Beam as requested
export const CollaborationBackground = () => (
  <div className="absolute inset-0 overflow-hidden bg-[#003B5C]/5">
    {/* Integrated AnimatedBeamMultipleOutputDemo for a more dynamic and contextual visualization of collaboration and integration */}
    <AnimatedBeamMultipleOutputDemo className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105" />
  </div>
)
