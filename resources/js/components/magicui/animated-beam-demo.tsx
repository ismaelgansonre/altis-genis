"use client"

import type React from "react"
import { forwardRef, useRef } from "react"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/magicui/animated-beam"
import { HardHat, Pickaxe, Map, Waves, Users, Building2 } from "lucide-react"

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        {children}
      </div>
    )
  },
)

Circle.displayName = "Circle"

export function AnimatedBeamMultipleOutputDemo({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <div
      className={cn("relative flex w-full items-center justify-center overflow-hidden p-10", className)}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <HardHat className="text-[#7CB342]" />
          </Circle>
          <Circle ref={div2Ref}>
            <Pickaxe className="text-[#003B5C]" />
          </Circle>
          <Circle ref={div3Ref}>
            <Map className="text-[#7CB342]" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div4Ref} className="size-16">
            <Users className="size-8 text-[#003B5C]" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div5Ref}>
            <Waves className="text-[#7CB342]" />
          </Circle>
          <Circle ref={div6Ref}>
            <Building2 className="text-[#003B5C]" />
          </Circle>
          <Circle ref={div7Ref}>
            <Users className="text-[#7CB342]" size={16} />
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-70} endYOffset={-10} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={70} endYOffset={10} />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-70}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} reverse />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={70}
        endYOffset={10}
        reverse
      />
    </div>
  )
}
