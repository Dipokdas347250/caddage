import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import blog from '../../../public/images/blog.png';
import { FaRegEye } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";



const Leatest_Blog = () => {
    return (
        <>
            <section className='py-26.25 bg-white'>
                <Container>
                    <div className="">
                        <h2 className='text-[48px] text-primary font-bold font-inter text-center leading-[100%]'>Leatest Blog</h2>
                        <p className='text-[16px] text-tertiary font-normal font-nunito mt-5 text-center'>
                            A highly efficient slip-ring scanner for today's diagnostic requirements.
                        </p>
                    </div>
                    <div className="flex justify-between items-center gap-7.5  mt-17.5">
                        <div className="w-1/3">
                        <div className="px-3.25 pt-3.5 pb-5 bg-white shadow-xl cursor-pointer group duration-300 ease-in-out border border-white hover:border hover:border-secondary">
                            <div className="">
                                <Image className=' ' src={blog} alt="blog" />

                            </div>
                            <div className="mt-6">
                                <div className="flex gap-4 items-center">
                                    <div className=" flex gap-1 items-center">
                                        <FaRegEye className='text-secondary' />
                                        <p className='text-[14px] text-[#647589] font-normal font-nunito'>238 Views</p>
                                    </div>
                                    <div className=" flex gap-1 items-center border-l-2 border-secondary pl-4">
                                        <MdOutlineCalendarMonth className='text-secondary' />
                                        <p className='text-[14px] text-[#647589] font-normal font-nunito'>July 27, 2020</p>
                                    </div>
                                </div>
                                <h3 className='text-[24px] text-primary font-inter font-bold leading-[100%] mt-3.25 duration-300 ease-in-out group-hover:text-secondary'>Pure is the most healthy and most nourishing food</h3>
                                <p className='text-[14px] text-[#647589] font-normal font-nunito mt-5 duration-300 ease-in-out group-hover:text-secondary '>Owt to do with me cracking goal arse over tit cup of tea brolly in my flat victoria sponge cup of</p>
                            
                                <h2 className='text-[16px] text-primary font-inter font-bold leading-[100%] mt-6 duration-300 ease-in-out group-hover:text-secondary'>Read More--</h2>
                            </div>
                        </div>
                        </div>
                       <div className="w-1/3">
                        <div className="px-3.25 pt-3.5 pb-5 bg-white shadow-xl cursor-pointer group duration-300 ease-in-out border border-white hover:border hover:border-secondary">
                            <div className="">
                                <Image className=' ' src={blog} alt="blog" />

                            </div>
                            <div className="mt-6">
                                <div className="flex gap-4 items-center">
                                    <div className=" flex gap-1 items-center">
                                        <FaRegEye className='text-secondary' />
                                        <p className='text-[14px] text-[#647589] font-normal font-nunito'>238 Views</p>
                                    </div>
                                    <div className=" flex gap-1 items-center border-l-2 border-secondary pl-4">
                                        <MdOutlineCalendarMonth className='text-secondary' />
                                        <p className='text-[14px] text-[#647589] font-normal font-nunito'>July 27, 2020</p>
                                    </div>
                                </div>
                                <h3 className='text-[24px] text-primary font-inter font-bold leading-[100%] mt-3.25 duration-300 ease-in-out group-hover:text-secondary'>Nature's Path Organic Food Blog is a place to find </h3>
                                <p className='text-[14px] text-[#647589] font-normal font-nunito mt-5 duration-300 ease-in-out group-hover:text-secondary '>Owt to do with me cracking goal arse over tit cup of tea brolly in my flat victoria sponge cup of</p>
                            
                                <h2 className='text-[16px] text-primary font-inter font-bold leading-[100%] mt-6 duration-300 ease-in-out group-hover:text-secondary'>Read More--</h2>
                            </div>
                        </div>
                       </div>
                      <div className="w-1/3">
                          <div className="px-3.25 pt-3.5 pb-5 bg-white shadow-xl cursor-pointer group duration-300 ease-in-out border border-white hover:border hover:border-secondary">
                            <div className="">
                                <Image className=' ' src={blog} alt="blog" />

                            </div>
                            <div className="mt-6">
                                <div className="flex gap-4 items-center">
                                    <div className=" flex gap-1 items-center">
                                        <FaRegEye className='text-secondary' />
                                        <p className='text-[14px] text-[#647589] font-normal font-nunito'>238 Views</p>
                                    </div>
                                    <div className=" flex gap-1 items-center border-l-2 border-secondary pl-4">
                                        <MdOutlineCalendarMonth className='text-secondary' />
                                        <p className='text-[14px] text-[#647589] font-normal font-nunito'>July 27, 2020</p>
                                    </div>
                                </div>
                                <h3 className='text-[24px] text-primary font-inter font-bold leading-[100%] mt-3.25 duration-300 ease-in-out group-hover:text-secondary'>Organics is a hair care brand known for its focus on inco </h3>
                                <p className='text-[14px] text-[#647589] font-normal font-nunito mt-5 duration-300 ease-in-out group-hover:text-secondary '>Owt to do with me cracking goal arse over tit cup of tea brolly in my flat victoria sponge cup of</p>
                            
                                <h2 className='text-[16px] text-primary font-inter font-bold leading-[100%] mt-6 duration-300 ease-in-out group-hover:text-secondary'>Read More--</h2>
                            </div>
                        </div>
                      </div>
                       
                       
                    </div>

                </Container>
            </section>
        </>
    )
}

export default Leatest_Blog
