import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import blog00 from '../../../public/images/blog00.png';
import { FaRegEye } from "react-icons/fa";
import { TbMessageDots } from "react-icons/tb";

import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const Blog_list = () => {
    return (
        <>
            <section className='py-30 bg-white'>
                <Container>
                    <div className="flex items-start gap-10">
                        <div className="w-[65%]">
                            <div className="relative">
                                <Image className='w-full ' src={blog00} alt="blog00" />

                                <div className="py-8.5 pl-8.5 pr-41.25 bg-white shadow-2xl w-[85%] absolute -bottom-30 left-[50%] translate-x-[-50%] group">
                                    <div className="flex gap-4 items-center">
                                        <div className=" flex gap-1 items-center ">
                                            <MdOutlineCalendarMonth className='text-secondary' />
                                            <p className='text-[14px] text-[#647589] font-normal font-nunito'>July 27, 2020</p>
                                        </div>
                                        <div className=" flex gap-1 items-center border-l-2 border-secondary pl-4">
                                            <TbMessageDots className='text-secondary' />
                                            <p className='text-[14px] text-[#647589] font-normal font-nunito'>1 Comments</p>
                                        </div>

                                    </div>
                                    <h3 className='text-[24px] text-primary font-inter font-bold leading-[120%] mt-3.25 duration-300 ease-in-out  group-hover:text-secondary '>Lorem Ipsum has been the industry's standard dummy text ever since</h3>
                                    <p className='text-[14px] text-[#647589] font-normal font-nunito mt-5 duration-300 ease-in-out group-hover:text-secondary  '>It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that </p>

                                    <div className="flex items-center gap-2 mt-6 duration-300 ease-in-out hover:text-secondary">
                                        <h2 className='text-[16px] text-primary font-inter font-bold leading-[100%]  duration-300 ease-in-out group-hover:text-secondary'>Read More</h2>
                                        <IoIosArrowDroprightCircle />
                                    </div>
                                </div>

                            </div>
                            <div className="relative mt-47.5">
                                <Image className='w-full ' src={blog00} alt="blog00" />

                                <div className="py-8.5 pl-8.5 pr-41.25 bg-white shadow-2xl w-[85%] absolute -bottom-30 left-[50%] translate-x-[-50%] group">
                                    <div className="flex gap-4 items-center">
                                        <div className=" flex gap-1 items-center ">
                                            <MdOutlineCalendarMonth className='text-secondary' />
                                            <p className='text-[14px] text-[#647589] font-normal font-nunito'>July 27, 2020</p>
                                        </div>
                                        <div className=" flex gap-1 items-center border-l-2 border-secondary pl-4">
                                            <TbMessageDots className='text-secondary' />
                                            <p className='text-[14px] text-[#647589] font-normal font-nunito'>1 Comments</p>
                                        </div>

                                    </div>
                                    <h3 className='text-[24px] text-primary font-inter font-bold leading-[120%] mt-3.25 underline duration-300 ease-in-out  group-hover:text-secondary '>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing</h3>
                                    <p className='text-[14px] text-[#647589] font-normal font-nunito mt-5 duration-300 ease-in-out group-hover:text-secondary  '>It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that </p>

                                    <div className="flex items-center gap-2 mt-6 duration-300 ease-in-out hover:text-secondary">
                                        <h2 className='text-[16px] text-primary font-inter font-bold leading-[100%]  duration-300 ease-in-out group-hover:text-secondary'>Read More</h2>
                                        <IoIosArrowDroprightCircle />
                                    </div>
                                </div>

                            </div>
                            <div className="relative mt-47.5">
                                <Image className='w-full ' src={blog00} alt="blog00" />

                                <div className="py-8.5 pl-8.5 pr-41.25 bg-white shadow-2xl w-[85%] absolute -bottom-30 left-[50%] translate-x-[-50%] group">
                                    <div className="flex gap-4 items-center">
                                        <div className=" flex gap-1 items-center ">
                                            <MdOutlineCalendarMonth className='text-secondary' />
                                            <p className='text-[14px] text-[#647589] font-normal font-nunito'>July 27, 2020</p>
                                        </div>
                                        <div className=" flex gap-1 items-center border-l-2 border-secondary pl-4">
                                            <TbMessageDots className='text-secondary' />
                                            <p className='text-[14px] text-[#647589] font-normal font-nunito'>1 Comments</p>
                                        </div>

                                    </div>
                                    <h3 className='text-[24px] text-primary font-inter font-bold leading-[120%] mt-3.25  duration-300 ease-in-out  group-hover:text-secondary '>Generate Lorem Ipsum placeholder text for use in your graphic</h3>
                                    <p className='text-[14px] text-[#647589] font-normal font-nunito mt-5 duration-300 ease-in-out group-hover:text-secondary  '>It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that </p>

                                    <div className="flex items-center gap-2 mt-6 duration-300 ease-in-out hover:text-secondary">
                                        <h2 className='text-[16px] text-primary font-inter font-bold leading-[100%]  duration-300 ease-in-out group-hover:text-secondary'>Read More</h2>
                                        <IoIosArrowDroprightCircle />
                                    </div>
                                </div>

                            </div>
                            <div className="relative mt-47.5">
                                <Image className='w-full ' src={blog00} alt="blog00" />

                                <div className="py-8.5 pl-8.5 pr-30  bg-white shadow-2xl w-[85%] absolute -bottom-30 left-[50%] translate-x-[-50%] group">
                                    <div className="flex gap-4 items-center">
                                        <div className=" flex gap-1 items-center ">
                                            <MdOutlineCalendarMonth className='text-secondary' />
                                            <p className='text-[14px] text-[#647589] font-normal font-nunito'>July 27, 2020</p>
                                        </div>
                                        <div className=" flex gap-1 items-center border-l-2 border-secondary pl-4">
                                            <TbMessageDots className='text-secondary' />
                                            <p className='text-[14px] text-[#647589] font-normal font-nunito'>1 Comments</p>
                                        </div>

                                    </div>
                                    <h3 className='text-[24px] text-primary font-inter font-bold leading-[120%] mt-3.25  duration-300 ease-in-out  group-hover:text-secondary '>Simply popular belief tradition Reference about Lorem Ipsum, giving informat</h3>
                                    <p className='text-[14px] text-[#647589] font-normal font-nunito mt-5 duration-300 ease-in-out group-hover:text-secondary  '>It is a long established fact that a reader will be distracted by the readable looking at its layout. The point of using Lorem Ipsum is that </p>

                                    <div className="flex items-center gap-2 mt-6 duration-300 ease-in-out hover:text-secondary">
                                        <h2 className='text-[16px] text-primary font-inter font-bold leading-[100%]  duration-300 ease-in-out group-hover:text-secondary'>Read More</h2>
                                        <IoIosArrowDroprightCircle />
                                    </div>
                                </div>

                            </div>

                            <div className="mt-50">
                                <div className="flex justify-center items-center gap-5 ">


                                    <div className="p-2.5 bg-white text-secondary shadow-xl border border-secondary cursor-pointer duration-300 ease-in-out hover:bg-secondary hover:text-white">
                                        <FaArrowLeft />
                                    </div>
                                    <div className="p-2.5 bg-secondary text-white shadow-xl border border-secondary cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                                        <h2>01</h2>
                                    </div>
                                    <div className="p-2.5 bg-secondary text-white shadow-xl border border-secondary cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                                        <h2>02</h2>
                                    </div>
                                    <div className="p-2.5 bg-secondary text-white shadow-xl border border-secondary cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                                        <h2>03</h2>
                                    </div>
                                    <div className="p-2.5 bg-secondary text-white shadow-xl border border-secondary cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                                        <h2>04</h2>
                                    </div>
                                    <div className="p-2.5 bg-secondary text-white shadow-xl border border-secondary cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                                        <h2>05</h2>
                                    </div>
                                    <div className="p-2.5 bg-white text-secondary shadow-xl border border-secondary cursor-pointer duration-300 ease-in-out hover:bg-secondary hover:text-white">
                                        <FaArrowRight />
                                    </div>





                                </div>
                            </div>

                        </div>
                        <div className="w-[35%]">
                            <div className="">
                                <h2 className='text-[20px] text-primary font-bold font-inter mb-5  '>Releated Tags</h2>
                                <div className=" ">
                                    <div className="flex items-center gap-3">
                                        <h3 className='py-1.5 px-5 bg-white border border-secondary rounded-full text-[12px] text-secondary font-nunito font-normal duration-300 ease-in-out hover:bg-secondary hover:text-white'>Breads</h3>
                                        <h3 className='py-1.5 px-5 bg-white border border-secondary rounded-full text-[12px] text-secondary font-nunito font-normal duration-300 ease-in-out hover:bg-secondary hover:text-white'>healthy</h3>
                                        <h3 className='py-1.5 px-5 bg-white border border-secondary rounded-full text-[12px] text-secondary font-nunito font-normal duration-300 ease-in-out hover:bg-secondary hover:text-white'>organic</h3>
                                    </div>
                                    <div className="flex items-center gap-3 mt-3">
                                        <h3 className='py-1.5 px-5 bg-white border border-secondary rounded-full text-[12px] text-secondary font-nunito font-normal duration-300 ease-in-out hover:bg-secondary hover:text-white'>tomato</h3>
                                        <h3 className='py-1.5 px-5 bg-white border border-secondary rounded-full text-[12px] text-secondary font-nunito font-normal duration-300 ease-in-out hover:bg-secondary hover:text-white'>juices</h3>
                                        <h3 className='py-1.5 px-5 bg-white border border-secondary rounded-full text-[12px] text-secondary font-nunito font-normal duration-300 ease-in-out hover:bg-secondary hover:text-white'>natural</h3>
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

export default Blog_list