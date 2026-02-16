import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import add from '../../../public/images/add.png';
import { FaStar } from "react-icons/fa";
import { FaFacebookF, FaBehance, FaPinterestP, FaTwitter } from "react-icons/fa";
import Link from 'next/link';



const Add_to_cart = () => {
    return (
        <>
            <section className='py-30 bg-white'>
                <Container>
                    <div className=" flex justify-between items-center gap-12 ">
                        <div className="w-1/2">
                            <Image className='' src={add} alt="add" />

                        </div>
                        <div className="w-1/2">
                            <div className="flex justify-between items-center">
                                <h3 className='text-[36px] text-primary font-bold font-inter leading-[100%]'>Black River Fruits</h3>
                                <h3 className='text-[36px] text-secondary font-bold font-inter leading-[100%]'>$32.00</h3>
                            </div>
                            <div className="flex gap-1 items-center mt-4 ">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <h4>(24)</h4>
                            </div>
                            <p className='text-[16px] text-[#666E77] font-normal font-nunito mt-7.5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo</p>
                            <div className="flex gap-2 mt-4 items-center">
                                <h4 className='text-[15px] text-primary font-bold font-inter leading-[100%]'>Color:</h4>
                                <div className=" flex gap-1">
                                    <div className="w-2.5 h-2.5 bg-[#F99A29] rounded-full"></div>
                                    <div className="w-2.5 h-2.5 bg-[#05DEE6] rounded-full"></div>
                                    <div className="w-2.5 h-2.5 bg-[#C437FF] rounded-full"></div>
                                    <div className="w-2.5 h-2.5 bg-secondary rounded-full"></div>
                                    
                                </div>
                            </div>
                            <div className=" p-1 border border-secondary w-[20%] flex justify-between mt-6">
                                <button className='py-1 px-2.5 bg-secondary cursor-pointer '>-</button>
                                <button>01</button>
                                <button className='py-1 px-2 bg-secondary cursor-pointer '>+</button>
                            </div>
                            <h3 className='text-[15px] text-[#666E77] font-bold font-inter leading-[100%] mt-6'><span className='text-primary'>Categories:</span>All, Featured, Organic, Vegetable</h3>
                            <h3 className='text-[15px] text-[#666E77] font-bold font-inter leading-[100%] mt-6'> <span className='text-primary'>Tags:</span> Black, Brown, Red, Shoes, £0.00 - £150.00</h3>
                            <div className="flex gap-2 items-center mt-6">
                                <h4 className='text-[15px] text-primary font-bold font-inter leading-[100%]'>Share:</h4>
                                <div className="flex gap-3">
                                    <FaFacebookF/>
                                    <FaTwitter/>
                                    <FaBehance/>
                                </div>
                            </div>
                             <Link href="/addToCart" >
                            <button className=' w-full bg-secondary border border-secondary text-white font-nunito font-bold text-[14px] px-7.5 py-4 text-center uppercase cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary mt-8.5'>
                                Add to Cart

                            </button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Add_to_cart
