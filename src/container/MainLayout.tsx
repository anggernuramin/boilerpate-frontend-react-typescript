import React from 'react'

type MainLayoutProps = {
  children: React.ReactNode
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main>
      {children}
      <h1>Main Layout</h1>
    </main>
  )
}

export default MainLayout
