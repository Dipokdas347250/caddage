import Banner from '@/components/home/Banner'
import ChooseUs from '@/components/home/ChooseUs'
import Client_Testimonial from '@/components/home/Client_Testimonial'
import Hot_offer from '@/components/home/Hot_offer'
import Product_Facilities from '@/components/home/Product_Facilities'
import Products from '@/components/home/Products'
import Team_Member from '@/components/home/Team_Member'
import Trending_Products from '@/components/home/Trending_Products'
import Trusted from '@/components/home/Trusted'
import Visit_our_Shop from '@/components/home/Visit_our_Shop'
import React from 'react'

const page = () => {
  return (
    <>
    <Banner/>
    <Trusted/>
    <ChooseUs/>
    <Products/>
    <Hot_offer/>
    <Product_Facilities/>
    <Visit_our_Shop/>
    <Team_Member/>
    <Trending_Products/>
    <Client_Testimonial/>
    </>
    
  )
}

export default page