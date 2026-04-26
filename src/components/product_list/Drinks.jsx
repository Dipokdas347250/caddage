"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Our_Product from './Our_Product';
import Navberdata from '@/data/navber';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const Drinks = () => {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState("All products")
  const [filterProducts, setfilterProducts] = useState([])
  const [limit, setLimit] = useState([])

  const ourproducts = () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`)
      .then((res) => {
        setProducts(res.data.products);
        setLimit(res.data.products.slice(0,8))
      }).catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    ourproducts()
  }, [])
 const handleActivecategory = (name) => {
  setCategory(name)
  let filtercategory = products.filter((item)=> item.category === name)
  setfilterProducts(filtercategory);
 }

 const handleShowMore = () => {
  setLimit(products)
 
 }


  return (
    <>
      <div className="">
       <div className=" flex justify-around items-center   border-t border-b mt-13.75 ">
                <MdKeyboardDoubleArrowLeft />
                {Navberdata?.categoyrList?.map((item) => (
                  <button
                    onClick={()=>handleActivecategory(item.name)}
                    key={item.id}
                    className={`py-3  px-10 lg:px-10 text-center text-[18px] text-tertiary font-normal font-nunito   cursor-pointer outline-none rounded-full duration-300 ease-in-out ${category === item.name ? 'bg-secondary text-white' : 'bg-white text-tertiary'}`}>
                    {item.name}
                  </button>
                ))}
                <MdKeyboardDoubleArrowRight />
              </div>

        <div className=" grid grid-cols-4 gap-4 mt-12.5">
          {category === "All products"          
          ? 
          limit?.map((item) => (
            <Our_Product key={item.id} product={item} />
          ))
            :
          filterProducts?.map((item) => (
            <Our_Product key={item.id} product={item} />
          ))
          }
        </div>
        <div className=" text-center mt-10">
        {limit.length > 8 ? 
        (<button
          onClick={()=>setLimit(products.slice(0,8))}
          className='btn-primary'>See Less Product</button>)
      :
       ( <button
          onClick={handleShowMore}
          className='btn-primary'>See all Product</button>)
      }
        </div>
        {/* <div className=" flex justify-between gap-7.5 mt-7.5">
          <div className="bg-white pb-5 shadow-xl relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-white after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer">
            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
              <h3 className=' absolute text-[14px] text-white font-normal font-nunito top-2 right-2 py-1 px-2.5 bg-secondary rounded-br-xl rounded-tl-xl '>-29%</h3>
              <div className="flex items-center gap-5">
                <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                  <FaRegHeart />
                </div>
                <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                  <PiShoppingCart />
                </div>
                <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                  <IoMdSearch />
                </div>

              </div>
            </div>
            <Image className=' ' src={img} alt="right" />
            <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
            </div>
          </div>
          <div className="bg-white pb-5 shadow-xl relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-white after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer">
            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
              <h3 className=' absolute text-[14px] text-white font-normal font-nunito top-2 right-2 py-1 px-2.5 bg-secondary rounded-br-xl rounded-tl-xl '>-29%</h3>
              <div className="flex items-center gap-5">
                <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                  <FaRegHeart />
                </div>
                <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                  <PiShoppingCart />
                </div>
                <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                  <IoMdSearch />
                </div>

              </div>
            </div>
            <Image className=' ' src={img} alt="right" />
            <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
            </div>
          </div>
          <div className="bg-white pb-5 shadow-xl relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-white after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer">
            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
              <h3 className=' absolute text-[14px] text-white font-normal font-nunito top-2 right-2 py-1 px-2.5 bg-secondary rounded-br-xl rounded-tl-xl '>-29%</h3>
              <div className="flex items-center gap-5">
                <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                  <FaRegHeart />
                </div>
                <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                  <PiShoppingCart />
                </div>
                <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                  <IoMdSearch />
                </div>

              </div>
            </div>
            <Image className=' ' src={img} alt="right" />
            <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
            </div>
          </div>
          <div className="bg-white pb-5 shadow-xl relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-white after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer">
            <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
              <h3 className=' absolute text-[14px] text-white font-normal font-nunito top-2 right-2 py-1 px-2.5 bg-secondary rounded-br-xl rounded-tl-xl '>-29%</h3>
              <div className="flex items-center gap-5">
                <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                  <FaRegHeart />
                </div>
                <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                  <PiShoppingCart />
                </div>
                <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                  <IoMdSearch />
                </div>

              </div>
            </div>
            <Image className=' ' src={img} alt="right" />
            <div className="  ">
              <div className="flex gap-1 items-center mx-auto mt-5 ml-[50%] translate-x-[-50%]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <h4>(24)</h4>
              </div>
              <h3 className='text-[16px] text-primary font-bold font-inter text-center mt-2 mb-3'>Juicy Orange Pack</h3>
              <h4 className='text-[14px] text-[#223645] font-normal font-nunito text-center '>$19.00</h4>
            </div>
          </div>
         

        </div> */}
      </div>
    </>
  )
}

export default Drinks
