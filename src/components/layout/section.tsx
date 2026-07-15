import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const sectionVariants = cva("relative py-16 md:py-24", {
  variants: {
    divider: {
      true: "before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:h-px before:w-2/3 md:before:w-1/2 before:bg-gradient-to-r before:from-transparent before:via-border/40 before:to-transparent",
      false: "",
    },
  },
  defaultVariants: { divider: true },
})

type SectionProps = {
  children: React.ReactNode
  className?: string
} & VariantProps<typeof sectionVariants>

export function Section({ children, className, divider }: SectionProps) {
  return (
    <section className={cn(sectionVariants({ divider }), className)}>
      <div className="relative z-30">{children}</div>
    </section>
  )
}