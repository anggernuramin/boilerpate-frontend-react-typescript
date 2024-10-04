import { MenuIcon, PanelsTopLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetHeader, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Menu } from './Menu'

const SheetMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col h-full px-3 sm:w-72" side="left">
        <SheetHeader>
          <Button className="flex items-center justify-center pt-1 pb-2" variant="link" asChild>
            <a href="/dashboard" className="flex items-center gap-2">
              <PanelsTopLeft className="w-6 h-6 mr-1" />
              <SheetTitle className="text-lg font-bold">Brand</SheetTitle>
            </a>
          </Button>
        </SheetHeader>
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  )
}

export default SheetMenu
