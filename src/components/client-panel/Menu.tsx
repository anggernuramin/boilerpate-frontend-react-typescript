import { cn } from '@/lib/utils'
import { getMenuList } from '@/lib/menu-list-client'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import { Link, useLocation } from 'react-router-dom'
import CollapseMenuButton from './CollapseMenuButton'

interface MenuProps {
  isOpen: boolean | undefined
}

export function Menu({ isOpen }: MenuProps) {
  const location = useLocation()
  const menuList = getMenuList(location.pathname)

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="w-full h-full mt-8">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
          <li className="w-full pt-5">
            {menuList.map(({ href, label, active, submenus }, index) =>
              !submenus || submenus.length === 0 ? (
                <div className="w-full" key={index}>
                  <TooltipProvider disableHoverableContent>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger asChild>
                        <Button
                          variant={active ? 'secondary' : 'ghost'}
                          className="justify-start w-full h-10 mb-1"
                          asChild
                        >
                          <Link to={href}>
                            <p
                              className={cn(
                                'max-w-[200px] truncate',
                                isOpen === false ? '-translate-x-96 opacity-0' : 'translate-x-0 opacity-100'
                              )}
                            >
                              {label}
                            </p>
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      {isOpen === false && <TooltipContent side="right">{label}</TooltipContent>}
                    </Tooltip>
                  </TooltipProvider>
                </div>
              ) : (
                <div className="w-full" key={index}>
                  <CollapseMenuButton label={label} active={active} submenus={submenus} isOpen={isOpen} />
                </div>
              )
            )}
          </li>
        </ul>
      </nav>
    </ScrollArea>
  )
}
