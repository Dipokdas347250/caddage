import React from 'react'
import Container from './Container'
import { GrLocation } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookF, FaBehance, FaPinterestP } from "react-icons/fa";
import Image from 'next/image'
import hea from '../../../public/images/hea.png';
import ban from '../../../public/images/ban1.png';






const Header = () => {
  return (
    <>
    <header className='py-4 bg-[#0A472E]'>
        <Container>
            <div className="flex justify-between items-center text-white">
                <div className="flex gap-4 items-center">
                    <div className=" flex gap-1 items-center">
                        <GrLocation className='text-secondary' />
                        <p className='text-[15px] font-normal font-nunito'>254 Lillian, Holbrook</p>
                    </div>
                    <div className=" flex gap-1 items-center border-l-2 border-secondary pl-4">
                        <TfiEmail className='text-secondary'/>
                        <p className='text-[15px] font-normal font-nunito'>info@santizex-site.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex">
                        <div className="flex items-center gap-2 mr-4">
                            <FaFacebookF />
                        <h4 className='text-[15px] font-normal font-nunito'>  facebook</h4>
                        </div>
                        <div className="flex items-center gap-2 mr-4">
                            <FaBehance />

                        <h4 className='text-[15px] font-normal font-nunito'>  behance</h4>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <FaPinterestP />
                        <h4 className='text-[15px] font-normal font-nunito'>  pinterest</h4>
                        </div>
                    </div>
                    <div className="flex gap-1 items-center border-l-2 border-secondary pl-4">
                        <div className="flex items-center gap-1 px-1 bg-secondary rounded opacity-90 transition-all hover:bg-[#0A472E] cursor-pointer">
                        <Image src={hea} alt="header img"   width={18} height={18}  />
                        <h2 className='text-[12px] font-normal font-nunito'>EN</h2>
                        </div>

                        <div className="flex items-center gap-1 px-1 bg-[#0A472E] rounded opacity-90 transition-all hover:bg-secondary cursor-pointer">

                        <Image src={ban} alt="header img" width={18} height={18}  />
                        <h2 className='text-[12px] font-normal font-nunito'>BAN</h2>
                        </div>

                        
                            
                      
                    </div>
                </div>
            </div>
        </Container>
    </header>
    </>
  )
}

export default Header