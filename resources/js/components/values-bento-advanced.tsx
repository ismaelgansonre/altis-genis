"use client"

import { Zap, Leaf, Shield, Users } from "lucide-react"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import {
  ExcellenceBackground,
  DurabilityBackground,
  IntegrityBackground,
  CollaborationBackground,
} from "@/components/value-backgrounds"

interface Value {
  title: string
  description: string
}

interface ValuesBentoAdvancedProps {
  values: {
    excellence: Value
    durabilite: Value
    integrite: Value
    collaboration: Value
  }
}

export function ValuesBentoAdvanced({ values }: ValuesBentoAdvancedProps) {
  const features = [
    {
      Icon: Zap,
      name: values.excellence.title,
      description: values.excellence.description,
      href: "#excellence",
      cta: "En savoir plus",
      className: "",
      background: <ExcellenceBackground />,
    },
    {
      Icon: Leaf,
      name: values.durabilite.title,
      description: values.durabilite.description,
      href: "#durabilite",
      cta: "Notre approche",
      className: "",
      background: <DurabilityBackground />,
    },
    {
      Icon: Shield,
      name: values.integrite.title,
      description: values.integrite.description,
      href: "#integrite",
      cta: "Nos engagements",
      className: "",
      background: <IntegrityBackground />,
    },
    {
      Icon: Users,
      name: values.collaboration.title,
      description: values.collaboration.description,
      href: "#collaboration",
      cta: "Travailler ensemble",
      className: "",
      background: <CollaborationBackground />,
    },
  ]

  return (
    <BentoGrid>
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  )
}
