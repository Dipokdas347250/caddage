"use client";
import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import herb from '../../../public/images/herb.png';
import slider01 from '../../../public/images/slider01.png';
import slider0 from '../../../public/images/slider.png';
import leaves from '../../../public/images/leaves01.png';
import leaves0 from '../../../public/images/leaves.png';
import box01 from '../../../public/images/box01.png';
import box02 from '../../../public/images/box02.png';
import box03 from '../../../public/images/box03.png';
import box04 from '../../../public/images/box04.png';
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import { FaArrowRight ,FaArrowLeft } from "react-icons/fa";





function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div className=" absolute h-10 w-10 bg-secondary rounded-full  text-[#fff] top-[50%] translate-y-[-50%] 2xl:-right-20 -right-2.5  cursor-pointer z-10 duration-300 ease-in-out  hover:bg-[#0A472E]" onClick={onClick}>
      <FaArrowRight className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]' />
     </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div className=" absolute h-10 w-10 bg-secondary rounded-full  text-[#fff] top-[50%] translate-y-[-50%] 2xl:-left-20 -left-2.5  cursor-pointer z-10 duration-300 ease-in-out  hover:bg-[#0A472E]" onClick={onClick}>
       <FaArrowLeft className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]' />
      </div>
     
    ); 
  }








const Banner = () => {
    const settings = {
    dots: true,
    infinite: true,
     autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
    <section className='pt-30 pb-40 bg-[#F7F5EB] relative'>
       <Image className=' absolute top-0 left-0 ' src={leaves} alt="leaves"  /> 
       <Image className=' absolute  right-0 bottom-0 ' src={leaves0} alt="leaves"  /> 
      <Container>
      <div className=" relative">
          <Slider {...settings}>
          <div className="">
             <div className=" flex justify-between items-center relative z-10 px-3">
          <div className="">
            <div className="flex items-center">
             <Image src={herb} alt="herb"  /> 
             <h5 className='text-[18px] font-nunito font-bold text-primary'>100% genuine Products</h5>
          </div>
          <div className="">
            <h2 className='text-[70px] font-inter font-bold text-primary leading-[120%]'>Tasty & Healthy organic Food</h2>
            <button className=' flex items-center gap-2 bg-secondary border border-secondary text-white font-nunito font-bold text-[14px] px-7.5 py-4 uppercase cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary mt-8.5'>Explore Products <BsArrowRight/> </button>

          </div>
          </div>
          
          <div className="">
             <Image src={slider01} alt="herb"  /> 
          </div>
        </div>
          </div>
          <div className="">
             <div className=" flex justify-between items-center relative z-10 px-3">
          <div className="">
            <div className="flex items-center">
             <Image src={herb} alt="herb"  /> 
             <h5 className='text-[18px] font-nunito font-bold text-primary '>100% genuine Products</h5>
          </div>
          <div className="">
            <h2 className='text-[70px] font-inter font-bold text-primary leading-[120%]'>Tasty & Healthy organic Food</h2>
            <button className=' flex items-center gap-2 bg-secondary border border-secondary text-white font-nunito font-bold text-[14px] px-7.5 py-4 uppercase cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary mt-8.5'>Explore Products <BsArrowRight/> </button>

          </div>
          </div>
          
          <div className="">
             <Image src={slider0} alt="herb"  /> 
          </div>
        </div>
          </div>
          <div className="">
             <div className=" flex justify-between items-center relative z-10 px-3">
          <div className="">
            <div className="flex items-center">
             <Image src={herb} alt="herb"  /> 
             <h5 className='text-[18px] font-nunito font-bold text-primary'>100% genuine Products</h5>
          </div>
          <div className="">
            <h2 className='text-[70px] font-inter font-bold text-primary leading-[120%]'>Tasty & Healthy organic Food</h2>
            <button className=' flex items-center gap-2 bg-secondary border border-secondary text-white font-nunito font-bold text-[14px] px-7.5 py-4 uppercase cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary mt-8.5'>Explore Products <BsArrowRight/> </button>

          </div>
          </div>
          
          <div className="">
             <Image src={slider01} alt="herb"  /> 
          </div>
        </div>
          </div>
          <div className="">
             <div className=" flex justify-between items-center relative z-10 px-3">
          <div className="">
            <div className="flex items-center">
             <Image src={herb} alt="herb"  /> 
             <h5 className='text-[18px] font-nunito font-bold text-primary '>100% genuine Products</h5>
          </div>
          <div className="">
            <h2 className='text-[70px] font-inter font-bold text-primary leading-[120%]'>Tasty & Healthy organic Food</h2>
            <button className=' flex items-center gap-2 bg-secondary border border-secondary text-white font-nunito font-bold text-[14px] px-7.5 py-4 uppercase cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary mt-8.5'>Explore Products <BsArrowRight/> </button>

          </div>
          </div>
          
          <div className="">
             <Image src={slider0} alt="herb"  /> 
          </div>
        </div>
          </div>
          <div className="">
             <div className=" flex justify-between items-center relative z-10 px-3">
          <div className="">
            <div className="flex items-center">
             <Image src={herb} alt="herb"  /> 
             <h5 className='text-[18px] font-nunito font-bold text-primary'>100% genuine Products</h5>
          </div>
          <div className="">
            <h2 className='text-[70px] font-inter font-bold text-primary leading-[120%]'>Tasty & Healthy organic Food</h2>
            <button className=' flex items-center gap-2 bg-secondary border border-secondary text-white font-nunito font-bold text-[14px] px-7.5 py-4 uppercase cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary mt-8.5'>Explore Products <BsArrowRight/> </button>

          </div>
          </div>
          
          <div className="">
             <Image src={slider01} alt="herb"  /> 
          </div>
        </div>
          </div>
           

          </Slider>

          <div className="py-5.75 px-16.75 bg-white flex justify-between items-center shadow-md absolute -bottom-60 left-0 w-full">
           <div className="relative pr-10 after:absolute after:content-[''] after:w-0.5 after:h-full after:bg-[#707070] after:bottom-0 after:right-0 after:duration-300 after:ease-in-out ">
                   <Image className=' ' src={box01} alt="leaves"  /> 
                   <h3 className='text-[22px] text-primary font-bold font-inter'>Curated Products</h3>
                   <p className='text-[16px] text-tertiary font-normal font-nunito mt-3'>On all orders over $75.00</p>
            </div> 
           <div className="relative pr-10 after:absolute after:content-[''] after:w-0.5 after:h-full after:bg-[#707070] after:bottom-0 after:right-0 after:duration-300 after:ease-in-out">
                   <Image className=' ' src={box02} alt="leaves"  /> 
                   <h3 className='text-[22px] text-primary font-bold font-inter'>Handmade</h3>
                   <p className='text-[16px] text-tertiary font-normal font-nunito mt-3'>On all orders over $75.00</p>
            </div> 
           <div className="relative pr-10 after:absolute after:content-[''] after:w-0.5 after:h-full after:bg-[#707070] after:bottom-0 after:right-0 after:duration-300 after:ease-in-out">
                   <Image className=' ' src={box03} alt="leaves"  /> 
                   <h3 className='text-[22px] text-primary font-bold font-inter'>100% Natural</h3>
                   <p className='text-[16px] text-tertiary font-normal font-nunito mt-3'>On all orders over $75.00</p>
            </div> 
           <div className="">
                   <Image className='' src={box04} alt="leaves"  /> 
                   <h3 className='text-[22px] text-primary font-bold font-inter'>Shipping</h3>
                   <p className='text-[16px] text-tertiary font-normal font-nunito mt-3'>On all orders over $75.00</p>
            </div> 
          </div>
      </div>
       
      </Container>
    </section>
    </>
  )
}

export default Banner