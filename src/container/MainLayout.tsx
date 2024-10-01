import React from 'react'
import Navbar from '../components/moleculs/Navbar'
import Footer from '../components/moleculs/Footer'

type MainLayoutProps = {
  children: React.ReactNode
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
