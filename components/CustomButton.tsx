import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ReactNode } from "react"

interface CustomButtonProps {
  href: string
  variant: "primary" | "secondary" | "accent"
  icon: ReactNode
  children: ReactNode
  external?: boolean
}

export function CustomButton({ href, variant, icon, children, external = false }: CustomButtonProps) {
  const baseClasses = "flex items-center px-6 py-3 font-medium text-lg rounded-lg transition"
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    accent: "bg-accent text-accent-foreground hover:bg-accent/80"
  }

  const buttonContent = (
    <>
      {icon && <span className="mr-2 text-2xl">{icon}</span>}
      {children}
    </>
  )

  return (
    <Button asChild className={`${baseClasses} ${variantClasses[variant]}`}>
      {external ? (
        <Link href={href} target="_blank" rel="noopener noreferrer">
          {buttonContent}
        </Link>
      ) : (
        <Link href={href}>{buttonContent}</Link>
      )}
    </Button>
  )
}

