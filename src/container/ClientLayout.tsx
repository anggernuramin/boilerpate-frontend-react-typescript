import Footer from '@/components/client-panel/Footer'
import Navbar from '@/components/client-panel/Navbar'
import React from 'react'

type ClientLayoutProps = {
  children: React.ReactNode
}
const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-300">
        <main className="container w-[90%] relative pb-10 ">{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default ClientLayout
