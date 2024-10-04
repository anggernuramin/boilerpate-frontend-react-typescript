import React from 'react'
import { useSidebarToogle } from '../stores/useSidebarToggle'
import { useShallow } from 'zustand/react/shallow'
import { cn } from '@/lib/utils'
import Sidebar from '@/components/admin-panel/Sidebar'
import Footer from '@/components/admin-panel/Footer'

type Props = {
  children: React.ReactNode
}
const AdminLayout = ({ children }: Props) => {
  const sidebar = useSidebarToogle(useShallow((state) => state))

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          'min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300',
          sidebar?.isOpen === false ? 'lg:ml-[90px]' : 'lg:ml-72'
        )}
      >
        {children}
      </main>
      <footer
        className={cn(
          'transition-[margin-left] ease-in-out duration-300',
          sidebar?.isOpen === false ? 'lg:ml-[90px]' : 'lg:ml-72'
        )}
      >
        <Footer />
      </footer>
    </>
  )
}

export default AdminLayout
