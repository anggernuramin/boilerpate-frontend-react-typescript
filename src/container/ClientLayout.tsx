import React from 'react'
import Navbar from '../components/moleculs/Navbar'
import Footer from '../components/moleculs/Footer'

type ClientLayoutProps = {
  children: React.ReactNode
}
const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default ClientLayout
