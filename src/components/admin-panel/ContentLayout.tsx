import React from 'react'
import { Navbar } from './navbar'

interface IChildren {
  title: string
  children: React.ReactNode
}

const ContentLayout = ({ children, title }: IChildren) => {
  return (
    <div>
      <Navbar title={title} />
      <div className="container px-4 pt-8 pb-8 sm:px-8">{children}</div>
    </div>
  )
}

export default ContentLayout
