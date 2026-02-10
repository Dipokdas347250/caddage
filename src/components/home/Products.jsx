"use client"
import React from 'react'
import Container from '../common/Container'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { MdKeyboardDoubleArrowLeft ,MdKeyboardDoubleArrowRight} from "react-icons/md";
import Image from 'next/image'
import img from '../../../public/images/img.png';
import { FaStar } from "react-icons/fa";






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
    <TabList className=" flex justify-around items-center   border-t border-b ">
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
      <div className=" flex justify-between gap-7.5 mt-12.5">
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
      
      </div>
      <div className=" flex justify-between gap-7.5 mt-7.5">
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
      
      </div>
    </TabPanel>

    <TabPanel>
      <div className=" flex justify-between gap-7.5 mt-12.5">
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
      
      </div>
      <div className=" flex justify-between gap-7.5 mt-7.5">
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
      
      </div>
    </TabPanel>

    <TabPanel>
      <div className=" flex justify-between gap-7.5 mt-12.5">
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
      
      </div>
      <div className=" flex justify-between gap-7.5 mt-7.5">
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
      
      </div>
    </TabPanel>

    <TabPanel>
      <div className=" flex justify-between gap-7.5 mt-12.5">
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
      
      </div>
      <div className=" flex justify-between gap-7.5 mt-7.5">
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
      
      </div>
    </TabPanel>
    
    <TabPanel>
      <div className=" flex justify-between gap-7.5 mt-12.5">
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
      
      </div>
      <div className=" flex justify-between gap-7.5 mt-7.5">
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
        <div className="bg-white pb-5 shadow-xl">
          <Image className=' ' src={img} alt="right"  /> 
          <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
          </div>
        </div>
      
      </div>
    </TabPanel>
   
  </Tabs>
        </div>

    </Container>
   </section>
   </>
  )
}

export default Products
