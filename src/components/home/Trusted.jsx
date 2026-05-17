import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import box from '../../../public/images/box.png';

const Trusted = () => {

  return (
   <>
   <section className='lg:pt-54 pt-150 lg:pb-40 pb-20 bg-white px-2'>
    <Container>
        <div className=" lg:flex justify-between items-center gap-13.75">
        <div className="lg:w-1/2 w-full">
             <div className=" flex lg:gap-11.25 gap-4 lg:justify-start justify-center ">
             <Image className='mb-10 lg:w-full w-[40%]' src={box} alt="herb"  />   
             <Image className='mt-10 lg:w-full w-[40%]' src={box} alt="herb"  />   
         </div>
        </div>
         <div className="lg:w-1/2 w-full lg:mt-0 mt-10">
            <h5 className='text-[18px] text-secondary font-bold font-nunito'>Know More About Shop</h5>
            <h2 className='lg:text-[50px] text-[30px] text-primary font-bold font-inter leading-[120%]'>Trusted Organic Food Store For People</h2>

            <p className='text-[18px] text-tertiary font-normal font-nunito lg:mt-8.75 mt-5.5'>Buy natural, sustainable and chemicalfree products from local the country. We are a strong community of 100,000+</p>
            <p className='text-[18px] text-tertiary font-normal font-nunito lg:mt-5.5 mt-5.5'>sellers who aspire to be good, do good, and spread goodness. We democratic, self-sustaining, two-sided marketplace which thrives on trust and is built on community and quality content.</p>

            <h3 className='text-[16px] text-tertiary font-bold font-nunito lg:mt-7.5 mt-7.5'>Jerry Henson</h3>
            <h5 className='text-[12px] text-tertiary font-normal font-nunito'> Shop Director</h5>
         </div>
        </div>
    </Container>
   </section>
   </>
  )
}

export default Trusted
