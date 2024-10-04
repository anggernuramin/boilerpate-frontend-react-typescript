import React from 'react'
import Navbar from '../components/moleculs/Navbar'

type MainLayoutProps = {
  children: React.ReactNode
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
