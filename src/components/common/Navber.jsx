import React from 'react'
import Container from './Container'
import Image from 'next/image'
import logo from '../../../public/images/logo.png';
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import Navberdata from '@/data/navber';
import Link from 'next/link';
import { FaBarsStaggered } from "react-icons/fa6";
import { GiTireIronCross } from "react-icons/gi";
import { GoSearch } from "react-icons/go";






const Navber = () => {
    return (
        <>
            <nav className='py-3 sticky top-0 z-50 bg-white shadow-sm'>
                <Container>
                    <div className="flex justify-between items-center">
                        <div className="">
                            <Link href={"/"}>
                                <Image src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div className=" flex items-center gap-20">
                            <div className="">
                                <ul className='flex items-center gap-10'>
                                    {Navberdata?.navlist?.map((item, index) => (

                                        <li
                                            className="text-[17px] text-primary font-nunito font-bold relative group"
                                            key={index}
                                        >
                                            <Link
                                                href={item?.url}
                                                className="duration-300 ease-in-out hover:text-secondary focus:text-secondary outline-none"
                                            >
                                                {item?.title}
                                            </Link>

                                            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-full group-focus-within:w-full"></span>
                                        </li>

                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center gap-5">
                                
                                <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                                    <FaRegUser />
                                </div>
                                <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                                    <PiShoppingCart />
                                </div>
                                <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                                    <GoSearch />
                                </div>
                            {/* <label className=' pl-3 py-1 pr-1 bg-[#F4F4F4] flex justify-between items-center rounded-[10px]' >
                                    <input className=' outline-none w-[50%]' type="email" placeholder=' Enter email address' />
                                    <button className='bg-secondary border border-secondary text-white font-nunito font-bold text-[14px] px-5.5 py-2.5 uppercase cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary rounded-[10px]'><GoSearch /></button>

                                </label> */}
                            </div>
                            <div className="">
                                <FaBarsStaggered/>
                                <GiTireIronCross/>
                            </div>
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    )
}

export default Navber
