import { BlocksIcon, Github } from 'lucide-react'
import type { Metadata } from "next"
import { SiShadcnui } from "react-icons/si"
import { CustomButton } from "@/components/CustomButton"

// export const metadata: Metadata = {
//   title: "Welcome Page",
//   description: "Welcome to shadcn-addons page",
// }

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-[30rem] bg-background text-foreground">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold">Welcome to ShadCN UI Addons</h1>
        <p className="text-lg">
          Enhance your UI with powerful addons for ShadCN-UI, designed to extend
          functionality and streamline your development workflow.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Copy-paste components with ease and leverage the power of open-source
          for your next big project.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-6">
          <CustomButton href="/docs" variant="primary" icon={<BlocksIcon />}>
            Get Started
          </CustomButton>
          <CustomButton href="https://ui.shadcn.com/" variant="secondary" icon={<SiShadcnui />} external>
            ShadCN
          </CustomButton>
          <CustomButton href="https://github.com/AmruthLP12/shadcnui-addon" variant="accent" icon={<Github />} external>
            GitHub
          </CustomButton>
        </div>
      </div>
    </main>
  )
}

