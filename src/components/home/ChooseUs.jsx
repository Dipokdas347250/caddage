import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import us01 from '../../../public/images/us01.png';
import us02 from '../../../public/images/us02.png';
import us03 from '../../../public/images/us03.png';
import us04 from '../../../public/images/us04.png';
import left from '../../../public/images/left.png';
import right from '../../../public/images/right.png';

const ChooseUs = () => {
  return (
    <>
    <section className='lg:pt-26.75 pt-10 lg:pb-40 pb-20 px-2 bg-[#F7F5EB] relative'>
         <Image className=' absolute lg:-top-35 -top-14 left-0 lg:w-[10%] w-[20%] ' src={left} alt="left"  /> 
               <Image className=' absolute  right-0 top-0 lg:w-[10%] w-[20%] ' src={right} alt="right"  />   
        <Container>
            <div className="">
                <h2 className='lg:text-[48px] text-[36px] text-primary font-bold font-inter text-center'>Why Choose us</h2>
                <p className='text-[16px] text-tertiary font-normal font-nunito mt-5 text-center'>A highly efficient slip-ring scanner for today's diagnostic requirements.</p>
            </div>
            <div className=" lg:flex justify-between gap-7.5 mt-14">
                <div className="lg:w-1/2 w-full">
                <div className="group ">
                    <div className="duration-300 ease-in-out  group-hover:bg-secondary lg:py-13.5 py-5 lg:px-16 px-5 bg-white lg:flex items-center gap-6 shadow-xl">
                    <div className="duration-300 ease-in-out p-6 bg-secondary group-hover:bg-tertiary flex justify-center">
                         <Image className='' src={us01} alt="us01"  />  
                    </div>
                    <div className="lg:mt-0 mt-5">
                        <h3 className='duration-300 ease-in-out text-[22px] text-primary font-bold font-inter group-hover:text-white'>Eat More Healthfully</h3>
                        <p className='duration-300 ease-in-out text-[16px] text-tertiary font-normal font-nunito mt-4.5 group-hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p>
                    </div>
                </div>
                </div>
                </div>
                <div className="lg:w-1/2 w-full">
                 <div className="group ">
                    <div className="duration-300 ease-in-out  group-hover:bg-secondary lg:py-13.5 py-5 lg:px-16 px-5 bg-white lg:flex items-center gap-6 shadow-xl">
                    <div className="duration-300 ease-in-out p-6 bg-secondary group-hover:bg-tertiary flex justify-center">
                         <Image className='' src={us02} alt="us01"  />  
                    </div>
                    <div className="lg:mt-0 mt-5">
                        <h3 className='duration-300 ease-in-out text-[22px] text-primary font-bold font-inter group-hover:text-white'>Curated Products</h3>
                        <p className='duration-300 ease-in-out text-[16px] text-tertiary font-normal font-nunito mt-4.5 group-hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p>
                    </div>
                </div>
                </div></div>
            </div>
            <div className=" lg:flex justify-between gap-7.5 mt-7.5">
                <div className="lg:w-1/2 w-full">
                <div className="group ">
                    <div className="duration-300 ease-in-out  group-hover:bg-secondary lg:py-13.5 py-5 lg:px-16 px-5 bg-white lg:flex items-center gap-6 shadow-xl">
                    <div className="duration-300 ease-in-out p-6 bg-secondary group-hover:bg-tertiary flex justify-center">
                         <Image className='' src={us03} alt="us01"  />  
                    </div>
                    <div className="lg:mt-0 mt-5">
                        <h3 className='duration-300 ease-in-out text-[22px] text-primary font-bold font-inter group-hover:text-white'>Pesticide Free Goods</h3>
                        <p className='duration-300 ease-in-out text-[16px] text-tertiary font-normal font-nunito mt-4.5 group-hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p>
                    </div>
                </div>
                </div>
                </div>
                <div className="lg:w-1/2 w-full">
                 <div className="group ">
                    <div className="duration-300 ease-in-out  group-hover:bg-secondary lg:py-13.5 py-5 lg:px-16 px-5 bg-white lg:flex items-center gap-6 shadow-xl">
                    <div className="duration-300 ease-in-out p-6 bg-secondary group-hover:bg-tertiary flex justify-center">
                         <Image className='' src={us04} alt="us01"  />  
                    </div>
                    <div className="lg:mt-0 mt-5">
                        <h3 className='duration-300 ease-in-out text-[22px] text-primary font-bold font-inter group-hover:text-white'>Flexibility Returns</h3>
                        <p className='duration-300 ease-in-out text-[16px] text-tertiary font-normal font-nunito mt-4.5 group-hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p>
                    </div>
                </div>
                </div></div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default ChooseUs
