import Header from '@/components/common/Header'
import Navber from '@/components/common/Navber'
import React from 'react'

const layout = ({ children }) => {
  return (
    <div className="">
        <Header />
        <Navber /> 
      {children}
    </div>
  )
}

export default layout