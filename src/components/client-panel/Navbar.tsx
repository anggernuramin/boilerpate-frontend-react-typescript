import { PanelsTopLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import SheetMenu from './SheetMenu'
import { getMenuList } from '@/lib/menu-list-client'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import { DropdownMenuArrow } from '@radix-ui/react-dropdown-menu'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const menuList = getMenuList(location.pathname)

  return (
    <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
      <div className="container w-[90%]  flex items-center justify-between h-14">
        <Link to="/" className="flex items-center justify-start transition-opacity duration-300 hover:opacity-85">
          <PanelsTopLeft className="w-6 h-6 mr-3" />
          <span className="font-bold">shadcn/ui sidebar</span>
        </Link>
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
        </div>
        <nav className="items-center hidden gap-2 lg:flex ">
          <ul className="relative flex items-center justify-center gap-5 ">
            {menuList.map(({ href, label, active, submenus }, index) => (
              <>
                {submenus && submenus.length > 0 ? (
                  <DropdownMenu>
                    <TooltipProvider disableHoverableContent>
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                          <DropdownMenuTrigger asChild>
                            <Button variant={active ? 'secondary' : 'ghost'} className="justify-start w-full ">
                              <div className="flex items-center justify-between w-full ">
                                <div className="flex items-center">
                                  <p>{label}</p>
                                </div>
                              </div>
                            </Button>
                          </DropdownMenuTrigger>
                        </TooltipTrigger>
                        <TooltipContent side="right" align="start" alignOffset={2}>
                          {label}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <DropdownMenuContent side="bottom" sideOffset={0} align="start">
                      <DropdownMenuLabel className="truncate">{label}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {submenus.map(({ href, label, active }, index) => (
                        <DropdownMenuItem key={index} asChild>
                          <a
                            className={`cursor-pointer ${((active === undefined && location.pathname === href) || active) && 'bg-secondary'}`}
                            href={href}
                          >
                            <p className="truncate ">{label}</p>
                          </a>
                        </DropdownMenuItem>
                      ))}
                      <DropdownMenuArrow className="fill-border" />
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <li key={index} className="flex items-center gap-2">
                    <a
                      href={href}
                      className={`font-medium text-sm cursor-pointer text-slate-900 ${active ? 'underline' : ''} `}
                    >
                      {label}
                    </a>
                  </li>
                )}
              </>
            ))}
          </ul>
          <Button variant="outline" size="icon" className="w-8 h-8 rounded-full bg-background" asChild>
            <Link to="">
              <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
