import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import img from '../../../public/images/img.png';
import { FaStar } from "react-icons/fa";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";

const Single_Trending_Products = () => {
    return (
        <>
            <section className='py-25 bg-white'>
                <Container>
                    <div className="">
                        <h2 className='text-[48px] text-primary font-bold font-inter text-center leading-[100%]'>Trending Products</h2>
                        <p className='text-[16px] text-tertiary font-normal font-nunito mt-5 text-center'>
                            A highly efficient slip-ring scanner for today's diagnostic requirements.
                        </p>
                    </div>
                    <div className="">
                        <div className=" flex justify-between gap-7.5 mt-12.5">
                                  <div className="bg-white pb-5 shadow-xl relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-white after:opacity-70  after:duration-300 after:ease-in-out hover:after:h-full cursor-pointer">
                                    <div className="absolute top-0 left-0 flex justify-center items-center    h-full w-full  opacity-0 hover:opacity-100 duration-300 ease-in-out z-50 text-black font-serif">
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
                                 
                        
                                </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Single_Trending_Products
