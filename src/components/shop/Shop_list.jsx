import React from 'react'
import Container from '../common/Container'
import Drinks from '../product_list/Drinks'
import { IoGridSharp } from "react-icons/io5";
import { MdFormatListNumbered } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";





const Shop_list = () => {
    return (
        <>
            <section className='pt-28.25 pb-30 bg-white'>
                <Container>
                    <div className="">
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
                                    {/* <label className=' py-2 pl-3 bg-[#F4F4F4] flex justify-between w-49 relative' >
                                        <input className=' outline-none  ' type="Search" placeholder=' Search' />
                                        <button className=' absolute top-0 right-0 bg-secondary border border-secondary text-white font-nunito font-bold text-[14px] px-2.5 py-2.5 uppercase cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary'><IoSearch /></button>

                                    </label> */}
                                    <label className='flex items-center' htmlFor="">
                                        < input type="Search" className='w-49 p-2 border border-secondary outline-none  mt-2' placeholder=' Search' />
                                        <button className='bg-secondary border border-secondary text-white font-normal font-nunito py-3 px-4  mt-2 cursor-pointer  duration-300 ease-in-out hover:bg-white hover:text-secondary '><IoSearch /></button>
                                    </label>
                                </div>

                            </div>
                        </div>
                        <div className="">
                            <Drinks />
                        </div>
                        <div className="">
                            <div className="flex justify-center items-center gap-5 mt-16.5">


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
                </Container>
            </section>
        </>
    )
}

export default Shop_list
