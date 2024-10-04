import React, { useState, useEffect } from 'react'
import { useSidebar } from '../../stores/useSidebarToggle'
import { useShallow } from 'zustand/react/shallow'

const HeaderSidebar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isSidebarOpen } = useSidebar(useShallow((state) => state))

  // Handle scroll event
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Memoizing user data to avoid unnecessary re-renders

  return (
    <nav
      className={`sticky top-0 z-40 flex items-center justify-between p-3 overflow-hidden transition-all rounded-md rounded-t-none margin-transition backdrop-blur faster ${
        isScrolled ? 'bg-transparent' : 'bg-white'
      }`}
      style={{
        marginLeft: isSidebarOpen ? '15rem' : '4.7rem',
        marginRight: '1.2rem'
      }}
    >
      <div className="flex flex-col gap-1 pl-2">
        <h1 className="text-2xl font-medium text-slate-800">Selamat Datang, Angger</h1>
        <p className="text-xs text-slate-400">Manage incoming and outgoing goods and track inventory levels.</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <h2>Angger</h2>
        <img src="/assets/images/user.png" className="w-10 h-10 rounded-full" alt="user avatar" />
      </div>
    </nav>
  )
}

export default HeaderSidebar
