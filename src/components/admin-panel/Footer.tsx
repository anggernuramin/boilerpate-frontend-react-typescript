const Footer = () => {
  return (
    <div className="z-20 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center mx-4 md:mx-8 h-14">
        <p className="text-xs leading-loose text-left md:text-sm text-muted-foreground">
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
            href="https://github.com/salimi-my/shadcn-ui-sidebar"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default Footer
