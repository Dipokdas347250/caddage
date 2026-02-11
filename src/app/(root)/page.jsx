import Banner from '@/components/home/Banner'
import ChooseUs from '@/components/home/ChooseUs'
import Hot_offer from '@/components/home/Hot_offer'
import Products from '@/components/home/Products'
import Trusted from '@/components/home/Trusted'
import React from 'react'

const page = () => {
  return (
    <>
    <Banner/>
    <Trusted/>
    <ChooseUs/>
    <Products/>
    <Hot_offer/>
    </>
    
  )
}

export default page