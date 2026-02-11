"use client"
import React from 'react'
import Container from '../common/Container'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { MdKeyboardDoubleArrowLeft ,MdKeyboardDoubleArrowRight} from "react-icons/md";
import Drinks from '../product_list/Drinks';






const Products = () => {
  return (
   <>
   <section className='pt-26.25 pb-30 bg-white'>
    <Container>
        <div className="">
             <h2 className='text-[48px] text-primary font-bold font-inter text-center'>Our Products</h2>
                <p className='text-[16px] text-tertiary font-normal font-nunito mt-5 text-center'>
                    A highly efficient slip-ring scanner for today's diagnostic requirements.
                </p>
        </div>
        <div className="">
            <Tabs>
    <TabList className=" flex justify-around items-center   border-t border-b mt-13.75 ">
      <MdKeyboardDoubleArrowLeft/>

      <Tab 
       selectedClassName=" bg-secondary text-white"
      className="py-3  px-10 lg:px-14 text-center text-[18px] text-tertiary font-normal font-nunito   cursor-pointer outline-none rounded-full ">
        Food & Drinks
        </Tab>
      <Tab
      selectedClassName=" bg-secondary text-white"
      className="py-3  px-10 lg:px-14 text-center text-[18px] text-tertiary font-normal font-nunito   cursor-pointer outline-none rounded-full "
      >
        Vegetables</Tab>
      <Tab
      selectedClassName=" bg-secondary text-white"
      className="py-3  px-10 lg:px-14 text-center text-[18px] text-tertiary font-normal font-nunito   cursor-pointer outline-none rounded-full "
      >
        
        Dried Foods</Tab>
      <Tab
      selectedClassName=" bg-secondary text-white"
      className="py-3  px-10 lg:px-14 text-center text-[18px] text-tertiary font-normal font-nunito   cursor-pointer outline-none rounded-full "
      >
        Bread & Cake</Tab>
      <Tab
      selectedClassName=" bg-secondary text-white"
      className="py-3  px-10 lg:px-14 text-center text-[18px] text-tertiary font-normal font-nunito   cursor-pointer outline-none rounded-full "
      >
        
        TFish & meat</Tab>
        <MdKeyboardDoubleArrowRight/>
    </TabList>

    <TabPanel>
      <Drinks/>
    </TabPanel>

    <TabPanel>
      <Drinks/>
    </TabPanel>

    <TabPanel>
     <Drinks/>
    </TabPanel>

    <TabPanel>
      <Drinks/>
    </TabPanel>
    
    <TabPanel>
      <Drinks/>
    </TabPanel>
   
  </Tabs>
        </div>

    </Container>
   </section>
   </>
  )
}

export default Products
