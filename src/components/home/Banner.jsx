"use client";
import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import herb from '../../../public/images/herb.png';
import slider01 from '../../../public/images/slider01.png';
import leaves from '../../../public/images/leaves01.png';
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import { FaArrowRight ,FaArrowLeft } from "react-icons/fa";





function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div className=" absolute h-10 w-10 bg-secondary rounded-full  text-[#fff] top-[50%] translate-y-[-50%] 2xl:-right-20 -right-2.5  cursor-pointer z-50 duration-300 ease-in-out  hover:bg-[#0A472E]" onClick={onClick}>
      <FaArrowRight className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]' />
     </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div className=" absolute h-10 w-10 bg-secondary rounded-full  text-[#fff] top-[50%] translate-y-[-50%] 2xl:-left-20 -left-2.5  cursor-pointer z-50 duration-300 ease-in-out  hover:bg-[#0A472E]" onClick={onClick}>
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
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
    <section className='pt-30 pb-40 bg-[#F7F5EB] relative'>
       <Image className=' absolute top-0 left-0 ' src={leaves} alt="leaves"  /> 
      <Container>
        <Slider {...settings}>
          <div className="">
             <div className=" flex justify-between items-center relative z-10">
          <div className="">
            <div className="flex items-center">
             <Image src={herb} alt="herb"  /> 
             <h5 className='text-[18px] font-nunito font-bold text-primary'>100% genuine Products</h5>
          </div>
          <div className="">
            <h2 className='text-[70px] font-inter font-bold text-primary'>Tasty & Healthy organic Food</h2>
            <button className=' flex items-center gap-2 bg-secondary border border-secondary text-white font-nunito font-bold text-[14px] px-7.5 py-4 uppercase cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary mt-8.5'>Explore Products <BsArrowRight/> </button>

          </div>
          </div>
          
          <div className="">
             <Image src={slider01} alt="herb"  /> 
          </div>
        </div>
          </div>
          <div className="">
             <div className=" flex justify-between items-center relative z-10">
          <div className="">
            <div className="flex items-center">
             <Image src={herb} alt="herb"  /> 
             <h5 className='text-[18px] font-nunito font-bold text-primary'>100% genuine Products</h5>
          </div>
          <div className="">
            <h2 className='text-[70px] font-inter font-bold text-primary'>Tasty & Healthy organic Food</h2>
            <button className=' flex items-center gap-2 bg-secondary border border-secondary text-white font-nunito font-bold text-[14px] px-7.5 py-4 uppercase cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary mt-8.5'>Explore Products <BsArrowRight/> </button>

          </div>
          </div>
          
          <div className="">
             <Image src={slider01} alt="herb"  /> 
          </div>
        </div>
          </div>
          <div className="">
             <div className=" flex justify-between items-center relative z-10">
          <div className="">
            <div className="flex items-center">
             <Image src={herb} alt="herb"  /> 
             <h5 className='text-[18px] font-nunito font-bold text-primary'>100% genuine Products</h5>
          </div>
          <div className="">
            <h2 className='text-[70px] font-inter font-bold text-primary'>Tasty & Healthy organic Food</h2>
            <button className=' flex items-center gap-2 bg-secondary border border-secondary text-white font-nunito font-bold text-[14px] px-7.5 py-4 uppercase cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary mt-8.5'>Explore Products <BsArrowRight/> </button>

          </div>
          </div>
          
          <div className="">
             <Image src={slider01} alt="herb"  /> 
          </div>
        </div>
          </div>
          <div className="">
             <div className=" flex justify-between items-center relative z-10">
          <div className="">
            <div className="flex items-center">
             <Image src={herb} alt="herb"  /> 
             <h5 className='text-[18px] font-nunito font-bold text-primary'>100% genuine Products</h5>
          </div>
          <div className="">
            <h2 className='text-[70px] font-inter font-bold text-primary'>Tasty & Healthy organic Food</h2>
            <button className=' flex items-center gap-2 bg-secondary border border-secondary text-white font-nunito font-bold text-[14px] px-7.5 py-4 uppercase cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary mt-8.5'>Explore Products <BsArrowRight/> </button>

          </div>
          </div>
          
          <div className="">
             <Image src={slider01} alt="herb"  /> 
          </div>
        </div>
          </div>
          <div className="">
             <div className=" flex justify-between items-center relative z-10">
          <div className="">
            <div className="flex items-center">
             <Image src={herb} alt="herb"  /> 
             <h5 className='text-[18px] font-nunito font-bold text-primary'>100% genuine Products</h5>
          </div>
          <div className="">
            <h2 className='text-[70px] font-inter font-bold text-primary'>Tasty & Healthy organic Food</h2>
            <button className=' flex items-center gap-2 bg-secondary border border-secondary text-white font-nunito font-bold text-[14px] px-7.5 py-4 uppercase cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-secondary mt-8.5'>Explore Products <BsArrowRight/> </button>

          </div>
          </div>
          
          <div className="">
             <Image src={slider01} alt="herb"  /> 
          </div>
        </div>
          </div>
           

          </Slider>
       
      </Container>
    </section>
    </>
  )
}

export default Banner