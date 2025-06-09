import React from 'react'
import Navbar from './Navbar'

import Footer from './Footer'
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen '>
      <Navbar />
      <div className='flex-1 bg-[#F4F4F4]'>{children}</div>
      <Footer />
    </div>
  )
}
