import { ArrowRight, Zap, Shield, Palette, Code2 } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

export default function Introduction() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">
          Built on shadcn/ui
        </Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Extended UI Components
        </h1>
        <p className="text-xl text-muted-foreground">
          Enhance your projects with our extended shadcn/ui component library. 
          Free, customizable, and ready for your next application.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <FeatureCard 
          icon={<Zap className="w-5 h-5" />}
          title="Advanced Components"
          description="Multiple selector, loading button, infinite scroll, and more to boost your UI."
        />
        <FeatureCard 
          icon={<Shield className="w-5 h-5" />}
          title="Production Ready"
          description="Built with accessibility and performance in mind. Ideal for all projects."
        />
        <FeatureCard 
          icon={<Palette className="w-5 h-5" />}
          title="Fully Customizable"
          description="Easily adapt each component to match your brand. The code is yours."
        />
        <FeatureCard 
          icon={<Code2 className="w-5 h-5" />}
          title="Easy Integration"
          description="Simple copy and paste into your project. Works with React and Next.js."
        />
      </div>

      <div className="mt-10">
        <a 
          href="#components" 
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Explore Components
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

