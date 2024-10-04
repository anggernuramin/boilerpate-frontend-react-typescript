import { PanelsTopLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useSidebarToogle } from '@stores/useSidebarToggle'
import { useShallow } from 'zustand/react/shallow'
import SidebarToggle from '@/components/admin-panel/SidebarToggle'
import { Menu } from '@/components/admin-panel/Menu'

const Sidebar = () => {
  const sidebar = useSidebarToogle(useShallow((state) => state))

  if (!sidebar) return null

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300',
        sidebar?.isOpen === false ? 'w-[90px]' : 'w-72'
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className="relative flex flex-col h-full px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(
            'transition-transform ease-in-out duration-300 mb-1',
            sidebar?.isOpen === false ? 'translate-x-1' : 'translate-x-0'
          )}
          variant="link"
          asChild
        >
          <a href="/dashboard" className="flex items-center gap-2">
            <PanelsTopLeft className="w-6 h-6 mr-1" />
            <h1
              className={cn(
                'font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300',
                sidebar?.isOpen === false ? '-translate-x-96 opacity-0 hidden' : 'translate-x-0 opacity-100'
              )}
            >
              Brand
            </h1>
          </a>
        </Button>
        <Menu isOpen={sidebar?.isOpen} />
      </div>
    </aside>
  )
}

export default Sidebar
