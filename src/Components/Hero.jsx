import React from 'react'
import heroImg3 from '../assets/prdtImg3.jpg';
import { BsArrowRight } from 'react-icons/bs';

const Hero = () => {
  return (
    <>
        <div className="container">
            <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
                <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
                    <img 
                    className="w-full h-2/5 object-cover rounded-lg"
                    src={heroImg3} 
                    alt='hero image'/>

                    <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[25%] -translate-y-[50%] sm:space-y-4">
                        <p className="text-2xl hidden sm:block">
                            100% Farm Fresh Fruits
                        </p>
                        <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold'>
                            Best Healthy
                        </h2>
                        <p className="text-gray-500 text-xl pt-4 sm:pt-8">
                            Starting At
                        </p>
                        <div className='font-medium text-red-500 text-2xl sm:text-4xl pb-4 sm:pb-8'>
                        &#8358; 1,800
                        </div>
                        <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
                            Shop Now <BsArrowRight />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Hero