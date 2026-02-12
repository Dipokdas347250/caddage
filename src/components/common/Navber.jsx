import React from 'react'
import Container from './Container'
import Image from 'next/image'
import logo from '../../../public/images/logo.png';
import { FaRegHeart ,FaRegUser} from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import Navberdata from '@/data/navber';
import Link from 'next/link';




const Navber = () => {
  return (
    <>
    <nav className='py-8.5'>
        <Container>
            <div className="flex justify-between items-center">
                <div className="">
                     <Image src={logo} alt="logo"  /> 
                </div>
                <div className=" flex items-center gap-8">
                    <div className="">
                        <ul className='flex items-center gap-10'>
                           {Navberdata?.navlist?.map((item, index)=>(
                            <li className='text-[17px] text-primary font-nunito font-bold duration-300 ease-in-out  hover:text-secondary relative after:absolute after:content-[""] after:w-0 after:h-0.5 after:bg-secondary after:bottom-0 after:left-0 after:duration-300 after:ease-in-out hover:after:w-full' key={index}>
                                
                                <Link href={item?.url}>{item?.title}</Link>
                            </li>
                           ))}
                        </ul>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                            <FaRegHeart  />
                        </div>
                        <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                            <FaRegUser/>
                        </div>
                        <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
                            <PiShoppingCart/>
                        </div>
                    </div>
                    <div className="">
                        <button className='bg-secondary border border-secondary text-white font-nunito font-bold text-[14px] px-7.5 py-4 uppercase cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary'>Get A Quote</button>
                    </div>
                </div>
            </div>
        </Container>
    </nav>
    </>
  )
}

export default Navber