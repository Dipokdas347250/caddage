"use client"
import React from 'react'
import Container from '../common/Container'
import Drinks from '../product_list/Drinks';







const Products = () => {

  return (
    <>
      <section className='pt-26.25 pb-30 bg-white'>
        <Container>
          <div className="">
            <h2 className='text-[48px] text-primary font-bold font-inter text-center'>Our Products</h2>
            <p className='text-[16px] text-tertiary font-normal font-nunito mt-5 text-center'>
              A highly efficient slip-ring scanner for today's diagnostic requirements.
            </p>
          </div>
          <div className="">
             

              <div>
                <Drinks />
              </div>


          </div>

        </Container>
      </section>
    </>
  )
}

export default Products
