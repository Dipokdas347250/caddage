import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Navber from '@/components/common/Navber'
import React from 'react'

const layout = ({ children }) => {
  return (
    <div className="">
        <Header />
        <Navber /> 
      {children}
      <Footer/>
    </div>
  )
}

export default layout