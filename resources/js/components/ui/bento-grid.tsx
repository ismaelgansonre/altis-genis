import type { ReactNode } from "react"
import { ArrowRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className={cn("grid w-full max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 gap-6", className)}>{children}</div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string
  className: string
  background: ReactNode
  Icon: any
  description: string
  href: string
  cta: string
}) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-2xl h-[380px]",
      "bg-white border-2 border-gray-200",
      "shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(124,179,66,0.25)]",
      "transition-all duration-500",
      // dark styles
      "dark:bg-black dark:border-gray-800 dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)]",
      className,
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-2 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu text-[#7CB342] transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:text-[#558B2F]" />
      <h3 className="text-xl font-bold text-[#003B5C] dark:text-neutral-300">{name}</h3>
      <p className="max-w-lg text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button
        variant="ghost"
        asChild
        size="sm"
        className="pointer-events-auto text-[#7CB342] hover:text-[#6BA030] hover:bg-[#7CB342]/10"
      >
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-[#7CB342]/5 group-hover:to-transparent" />
  </div>
)

export { BentoCard, BentoGrid }
