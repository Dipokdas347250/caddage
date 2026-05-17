import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import need from '../../../public/images/need.png';
import needleft from '../../../public/images/needleft.png';
import Link from 'next/link';

const Visit_our_Shop = () => {
    return (
        <>
            <section className=' lg:py-17.5 py-10 px-2 bg-[#525355] relative'>
                <Image className=' absolute lg:top-47.5 left-0 lg:w-[8%] w-[10%] ' src={needleft} alt="needleft"  /> 
                <Container>
                    <div className=" lg:flex justify-between items-center">
                        <div className="lg:w-1/2 w-full">
                            <div className="lg:py-30 py-10">
                                <h4 className='text-[18px] text-secondary font-bold font-nunito'>VISIT OUR SHOP</h4>
                                <h2 className='lg:text-[50px] text-[32px] text-white font-bold font-inter leading-[120%]'>Need Any Organic Fresh Food ?</h2>
                                <p className='text-[18px] text-white font-normal font-nunito w-[90%] mt-5'>Cur tantas regiones barbarorum obiit, tot maria transmist summo bono fruitur id est voluptate barbarorum   </p>

                                <div className="flex gap-5 items-center mt-7.5">
                                    <Link href="/contact">
                                    
                                    <button className='bg-secondary border border-secondary text-white font-nunito font-bold text-[14px] px-11.5 py-4  cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary'>Contact Us</button>
                                    </Link>

                                </div>

                            </div>
                        </div>
                        <div className="lg:w-1/3 w-full">
                            <Image className=' w-full' src={need} alt="need" />

                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Visit_our_Shop
