// import React from 'react'
// import Container from './Container'
// import Image from 'next/image'
// import logo from '../../../public/images/logo.png';
// import { FaRegHeart, FaRegUser } from "react-icons/fa";
// import { PiShoppingCart } from "react-icons/pi";
// import Navberdata from '@/data/navber';
// import Link from 'next/link';
// import { FaBarsStaggered } from "react-icons/fa6";
// import { GiTireIronCross } from "react-icons/gi";





// const Navber = () => {
//     return (
//         <>
//             <nav className='py-3 sticky top-0 z-50 bg-white shadow-sm'>
//                 <Container>
//                     <div className="flex justify-between items-center">
//                         <div className="">
//                             <Link href={"/"}>
//                                 <Image src={logo} alt="logo" />
//                             </Link>
//                         </div>
//                         <div className=" flex items-center gap-8">
//                             <div className="">
//                                 <ul className='flex items-center gap-10'>
//                                     {Navberdata?.navlist?.map((item, index) => (
                                        
//                                         <li
//                                             className="text-[17px] text-primary font-nunito font-bold relative group"
//                                             key={index}
//                                         >
//                                             <Link
//                                                 href={item?.url}
//                                                 className="duration-300 ease-in-out hover:text-secondary focus:text-secondary outline-none"
//                                             >
//                                                 {item?.title}
//                                             </Link>

//                                             <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-full group-focus-within:w-full"></span>
//                                         </li>

//                                     ))}
//                                 </ul>
//                             </div>
//                             <div className="flex items-center gap-5">
//                                 <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
//                                     <FaRegHeart />
//                                 </div>
//                                 <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
//                                     <FaRegUser />
//                                 </div>
//                                 <div className="p-2.5 bg-secondary text-white border border-secondary rounded-full cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary">
//                                     <PiShoppingCart />
//                                 </div>
//                             </div>
//                             <div className="">
//                                 <button className='bg-secondary border border-secondary text-white font-nunito font-bold text-[14px] px-7.5 py-4 uppercase cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary'>Get A Quote</button>
//                             </div>
//                         </div>
//                     </div>
//                 </Container>
//             </nav>
//         </>
//     )
// }

// export default Navber







"use client"

import React, { useState, useRef, useEffect } from 'react'
import Container from './Container'
import Image from 'next/image'
import logo from '../../../public/images/logo.png';
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import Navberdata from '@/data/navber';
import Link from 'next/link';
import { FaBarsStaggered } from "react-icons/fa6";
import { GiTireIronCross } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

const Navber = () => {

    const [open, setOpen] = useState(false)
    const menuRef = useRef()

    // 👉 outside click
    useEffect(() => {
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown", handler)
    }, [])

    return (
        <nav className='py-3 sticky top-0 z-50 bg-white shadow-sm'>
            <Container>
                <div className="flex justify-between items-center">

                    <Link href={"/"}>
                        <Image src={logo} alt="logo" />
                    </Link>

                    <div className="lg:hidden">
                        <button className=' cursor-pointer' onClick={() => setOpen(true)}>
                            <FaBarsStaggered size={22} />
                        </button>
                    </div>
                </div>
            </Container>

            <AnimatePresence>

                {open && (
                    <>
                        {/* 🔥 Overlay Animation */}
                        <motion.div
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* 🔥 Sidebar Animation */}
                        <motion.div
                            ref={menuRef}
                            className="fixed top-0 left-0 h-full w-[280px] bg-white z-50 shadow-lg"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 80 }}
                        >

                            {/* Header */}
                            <div className="flex justify-between items-center p-5 border-b">
                                <Image src={logo} alt="logo" className="w-28" />
                                <button className=' cursor-pointer' onClick={() => setOpen(false)}>
                                    <GiTireIronCross size={22} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-5 space-y-6">

                                {/* 🔥 Stagger Menu */}
                                <motion.ul
                                    
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        hidden: {},
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.1
                                            }
                                        }
                                    }}
                                    className="space-y-4 mx-auto text-center"
                                >
                                    {Navberdata?.navlist?.map((item, index) => (
                                        <motion.li
                                         
                                            key={index}
                                            variants={{
                                                hidden: { opacity: 0, x: -20 },
                                                visible: { opacity: 1, x: 0 }
                                            }}
                                        >
                                            <Link
                                                href={item?.url}
                                                onClick={() => setOpen(false)}
                                                className="block text-primary font-bold hover:text-secondary"
                                            >
                                                {item?.title}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                {/* Icons Animation */}
                                <motion.div
                                    className="flex justify-center gap-5 pt-5"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="icon-style"><FaRegHeart /></div>
                                    <div className="icon-style"><FaRegUser /></div>
                                    <div className="icon-style"><PiShoppingCart /></div>
                                </motion.div>

                                {/* Button Animation */}
                                <motion.button
                                    className='btn-primary w-full'
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    Get A Quote
                                </motion.button>

                            </div>
                        </motion.div>
                    </>
                )}

            </AnimatePresence>
        </nav>
    )
}

export default Navber