"use client"
import React from 'react'
import Container from '../common/Container'
import { IoGridSharp } from "react-icons/io5";
import { MdFormatListNumbered } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import Image from 'next/image'
import pro from '../../../public/images/pro.png';
import { FaStar } from "react-icons/fa";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";



const Product_Catagoris = () => {

  const categories = [
    { name: "Allium", count: 5 },
    { name: "Beverages", count: 5 },
    { name: "Dairy Bread & Eggs", count: 6 },
    { name: "Fruits & Vegetables", count: 7 },
    { name: "Grocery & Staples", count: 7 },
    { name: "Health & Wellness", count: 3 },
    { name: "Leafy Green", count: 4 },
    { name: "Package Foods", count: 5 },
    { name: "Uncategorized", count: 36 },
  ];

  const [activeCategory, setActiveCategory] = useState(null);


  return (
    <>
      <section className='pt-28.25 pb-30 bg-white'>
        <Container>
          <div className="flex justify-between items-center ">
            <div className="">
              <h2 className='text-[25px] text-primary font-bold font-inter leading-[100%]'>Organic Fresh Food Fresh Juices</h2>
              <p className='text-[15px] text-[#666E77] font-normal font-nunito mt-4'>About 9,620 results (0.62 seconds) </p>
            </div>
            <div className=" flex justify-end gap-6.5 items-center">
              <div className="flex items-center gap-2">
                <h3>Per Page:</h3>
                <select className='py-1 px-2 border outline-none' name="" id="">
                  <option value="06">08</option>
                  <option value="12">12</option>
                  <option value="20">20</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <h3>Sort By:</h3>
                <select className='py-1 px-2 border outline-none' name="" id="">
                  <option value="Best Match">Best Match</option>
                  <option value="Good Match">Good Match</option>
                  <option value="Match">Match</option>
                </select>
              </div>

              <div className=" flex gap-2">

                <div className="p-2.5 bg-white cursor-pointer shadow-xl duration-300 ease-in-out hover:text-secondary">
                  <IoGridSharp />
                </div>
                <div className="p-2.5 bg-white cursor-pointer shadow-xl duration-300 ease-in-out hover:text-secondary">
                  <MdFormatListNumbered />
                </div>


              </div>
              <div className="">
                <label className=' py-2 pl-3 bg-[#F4F4F4] flex justify-between w-49 relative' >
                  <input className=' outline-none  ' type="Search" placeholder=' Search' />
                  <button className=' absolute top-0 right-0 bg-secondary border border-secondary text-white font-nunito font-bold text-[14px] px-2.5 py-2.5 uppercase cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary'><IoSearch /></button>

                </label>
              </div>

            </div>
          </div>

          <div className=" flex justify-between gap-9 mt-13.5 ">
            <div className="w-[30%]"> 
              <div className="py-12.5 px-12 bg-white shadow-xl ">
                <h2 className='text-[20px] text-primary font-bold font-inter '>Product Catagoris</h2>
                {/* <ul>
                  {categories.map((item, index) => (
                    <li key={index}>
                      <label style={{ cursor: "pointer" }}>
                        <input
                          type="checkbox"
                          
                          checked={activeCategory === item.name}
                          onChange={() => setActiveCategory(item.name)}
                        />
                        {item.name} ({item.count})
                      </label>
                    </li>
                  ))}
                </ul> */}
                <ul className="space-y-3 mt-5">
                  {categories.map((item, index) => (
                    <li key={index}>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={activeCategory === item.name}
                          onChange={() => setActiveCategory(item.name)}
                          className="accent-[#80B500] w-4 h-4"
                        />
                        <span className='text-[14x] text=[#272D61] font-nunito font-normal'>
                          {item.name} ({item.count})
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-[70%]">
              <div className="">
                <div className="flex items-center gap-8 bg-white shadow-xl p-3.5 border border-white duration-300 ease-in-out hover:border hover:border-secondary">
                  <div className="">
                    <Image className='' src={pro} alt="pro" />

                  </div>
                  <div className="">
                    <h2 className=' text-[22px] text-primary font-bold font-inter leading-[100%]'>Dragon Fruit Vietnam</h2>
                    <div className=" flex items-center gap-2 mt-3.5">
                      <h4 className=' text-[14px] text-primary font-normal font-nunito mt-2  duration-300 ease-in-out group-hover:text-secondary'>$43.00 <span className='text-[14px] text-[#FE1717] line-through ml-2.5 '>$58.00</span></h4>
                      <div className="flex gap-1 items-center ">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <h4>(24)</h4>
                      </div>
                    </div>
                    <p className='text-[16px] text-[#666E77] font-normal font-nunito mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa enim. Nullam id varius nunc id varius nunc.</p>
                    <div className="flex items-center gap-5 mt-3.5">
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
                </div>
              </div>
              <div className="mt-7.5">
                <div className="flex items-center gap-8 bg-white shadow-xl p-3.5 border border-white duration-300 ease-in-out hover:border hover:border-secondary">
                  <div className="">
                    <Image className='' src={pro} alt="pro" />

                  </div>
                  <div className="">
                    <h2 className=' text-[22px] text-primary font-bold font-inter leading-[100%]'>Fresh Package Juice</h2>
                    <div className=" flex items-center gap-2 mt-3.5">
                      <h4 className=' text-[14px] text-primary font-normal font-nunito mt-2  duration-300 ease-in-out group-hover:text-secondary'>$43.00 <span className='text-[14px] text-[#FE1717] line-through ml-2.5 '>$58.00</span></h4>
                      <div className="flex gap-1 items-center ">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <h4>(24)</h4>
                      </div>
                    </div>
                    <p className='text-[16px] text-[#666E77] font-normal font-nunito mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa enim. Nullam id varius nunc id varius nunc.</p>
                    <div className="flex items-center gap-5 mt-3.5">
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
                </div>
              </div>
              <div className="mt-7.5">
                <div className="flex items-center gap-8 bg-white shadow-xl p-3.5 border border-white duration-300 ease-in-out hover:border hover:border-secondary">
                  <div className="">
                    <Image className='' src={pro} alt="pro" />

                  </div>
                  <div className="">
                    <h2 className=' text-[22px] text-primary font-bold font-inter leading-[100%]'>Fresh Vegetables</h2>
                    <div className=" flex items-center gap-2 mt-3.5">
                      <h4 className=' text-[14px] text-primary font-normal font-nunito mt-2  duration-300 ease-in-out group-hover:text-secondary'>$43.00 <span className='text-[14px] text-[#FE1717] line-through ml-2.5 '>$58.00</span></h4>
                      <div className="flex gap-1 items-center ">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <h4>(24)</h4>
                      </div>
                    </div>
                    <p className='text-[16px] text-[#666E77] font-normal font-nunito mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa enim. Nullam id varius nunc id varius nunc.</p>
                    <div className="flex items-center gap-5 mt-3.5">
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
                </div>
              </div>
              <div className="mt-7.5">
                <div className="flex items-center gap-8 bg-white shadow-xl p-3.5 border border-white duration-300 ease-in-out hover:border hover:border-secondary">
                  <div className="">
                    <Image className='' src={pro} alt="pro" />

                  </div>
                  <div className="">
                    <h2 className=' text-[22px] text-primary font-bold font-inter leading-[100%]'>Yellow Appels Juice</h2>
                    <div className=" flex items-center gap-2 mt-3.5">
                      <h4 className=' text-[14px] text-primary font-normal font-nunito mt-2  duration-300 ease-in-out group-hover:text-secondary'>$43.00 <span className='text-[14px] text-[#FE1717] line-through ml-2.5 '>$58.00</span></h4>
                      <div className="flex gap-1 items-center ">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <h4>(24)</h4>
                      </div>
                    </div>
                    <p className='text-[16px] text-[#666E77] font-normal font-nunito mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa enim. Nullam id varius nunc id varius nunc.</p>
                    <div className="flex items-center gap-5 mt-3.5">
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
                </div>
              </div>
              <div className="mt-7.5">
                <div className="flex items-center gap-8 bg-white shadow-xl p-3.5 border border-white duration-300 ease-in-out hover:border hover:border-secondary">
                  <div className="">
                    <Image className='' src={pro} alt="pro" />

                  </div>
                  <div className="">
                    <h2 className=' text-[22px] text-primary font-bold font-inter leading-[100%]'>Desi Bedana Group</h2>
                    <div className=" flex items-center gap-2 mt-3.5">
                      <h4 className=' text-[14px] text-primary font-normal font-nunito mt-2  duration-300 ease-in-out group-hover:text-secondary'>$43.00 <span className='text-[14px] text-[#FE1717] line-through ml-2.5 '>$58.00</span></h4>
                      <div className="flex gap-1 items-center ">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <h4>(24)</h4>
                      </div>
                    </div>
                    <p className='text-[16px] text-[#666E77] font-normal font-nunito mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa enim. Nullam id varius nunc id varius nunc.</p>
                    <div className="flex items-center gap-5 mt-3.5">
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
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Product_Catagoris
