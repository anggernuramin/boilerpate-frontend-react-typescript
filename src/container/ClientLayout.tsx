import React from 'react'
import Navbar from '../components/moleculs/Navbar'

type ClientLayoutProps = {
  children: React.ReactNode
}
const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default ClientLayout
