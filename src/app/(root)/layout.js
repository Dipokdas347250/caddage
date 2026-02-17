import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Icon_part from '@/components/common/Icon_part'
import Navber from '@/components/common/Navber'
import React from 'react'

const layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <Navber />
      {children}
      <Icon_part />
      <Footer />
    </div>
  )
}

export default layout