"use client"

import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Image from 'next/image'
import logo from '../../../public/images/logo.png';
import { FaRegUser } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import Navberdata from '@/data/navber';
import Link from 'next/link';
import { FaBarsStaggered } from "react-icons/fa6";
import { GiTireIronCross } from "react-icons/gi";
import { GoSearch } from "react-icons/go";

const Navber = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);



    useEffect(() => {
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);

    return (
        <nav  ref={menuRef} className='py-3 px-2 sticky top-0 z-50 bg-white shadow-sm'>
            <Container>
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <Link href={"/"}>
                        <Image
                            src={logo}
                            alt="logo"
                            className='w-[120px] md:w-auto'
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-16">

                        <ul className='flex items-center gap-8'>
                            {Navberdata?.navlist?.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-[17px] text-primary font-nunito font-bold relative group"
                                >
                                    <Link
                                        href={item?.url}
                                        className="duration-300 ease-in-out hover:text-secondary"
                                    >
                                        {item?.title}
                                    </Link>

                                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                </li>
                            ))}
                        </ul>

                        {/* Icons */}
                        <div className="flex items-center gap-4">
                            <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 hover:bg-white hover:text-secondary">
                                <FaRegUser />
                            </div>

                            <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 hover:bg-white hover:text-secondary">
                                <PiShoppingCart />
                            </div>

                            <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 hover:bg-white hover:text-secondary">
                                <GoSearch />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div
                        className="lg:hidden text-2xl cursor-pointer"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        {showMenu ? (
                            <GiTireIronCross />
                        ) : (
                            <FaBarsStaggered />
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`
                    lg:hidden overflow-hidden transition-all duration-300
                    ${showMenu ? 'max-h-[500px] pt-5' : 'max-h-0'}
                `}
                >
                    <ul className='flex flex-col gap-5 text-center'>
                        {Navberdata?.navlist?.map((item, index) => (
                            <li
                                key={index}
                                className="text-[17px] text-primary font-nunito font-bold"
                            >
                                <Link
                                    href={item?.url}
                                    onClick={() => setShowMenu(false)}
                                >
                                    {item?.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Icons */}
                    <div className="flex justify-center gap-4 mt-6 pb-4">
                        <div className="p-2.5 bg-secondary text-white rounded-full cursor-pointer">
                            <FaRegUser />
                        </div>

                        <div className="p-2.5 bg-secondary text-white rounded-full cursor-pointer">
                            <PiShoppingCart />
                        </div>

                        <div className="p-2.5 bg-secondary text-white rounded-full cursor-pointer">
                            <GoSearch />
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navber