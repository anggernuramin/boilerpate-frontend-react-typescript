import React from 'react'

const Footer = () => {
  return (
    <footer className="py-6 border-t md:py-0 border-border/40">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-sm leading-loose text-center text-balance text-muted-foreground">
          Built on top of{' '}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            shadcn/ui
          </a>
          . The source code is available on{' '}
          <a
            href="https://github.com/anggernuramin/boilerpate-frontend-react-vite-typescript"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

export default Footer
