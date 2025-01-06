'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Github, Moon, Sun, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  
} from '@/components/ui/dialog'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const searchItems = [
  { title: 'Home', url: '/' },
  { title: 'Getting Started', url: '/docs' },
  { title: 'Progress Bar', url: '/docs/animated-progress-bar' },
  { title: 'BackgroundOverlayCard', url: '/docs/card' },
]

export function Navbar() {
  const [mounted, setMounted] = React.useState(false)
  const { setTheme, theme } = useTheme()
  const [open, setOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState('')
  const router = useRouter()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const filteredItems = searchItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSearch = (item: { title: string; url: string }) => {
    setOpen(false)
    setSearchQuery('')
    router.push(item.url)
  }

  if (!mounted) {
    return null
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center lg:justify-between justify-center">
        <div className="items-center pl-6 space-x-4 lg:flex hidden">
          <Link href='/' className="text-lg font-bold">Shadcn-addons</Link>
          <nav className="flex items-center space-x-4 text-sm font-medium">
            <Link href="/docs" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Docs
            </Link>
            <Link href="/docs/animated-progress-bar" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Components
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4 lg:space-x-0">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <div className="relative">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-64 pl-8 pr-12"
                  readOnly
                />
                <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 transform rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 lg:block hidden">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Search documentation</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Input
                  placeholder="Type to search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="max-h-[300px] overflow-y-auto">
                  {filteredItems.map((item) => (
                    <Button
                      key={item.url}
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => handleSearch(item)}
                    >
                      {item.title}
                    </Button>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="ghost" size="icon" aria-label="GitHub" asChild>
            <Link href="https://github.com/AmruthLP12/shadcnui-addon" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

