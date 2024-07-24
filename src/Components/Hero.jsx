import React from 'react'
import heroImg1 from '../assets/prdtImg1.jpg';
import heroImg2 from '../assets/prdtImg2.jpg';
import heroImg3 from '../assets/prdtImg3.jpg';
import heroImg4 from '../assets/prdtImg4.jpg';


const Hero = () => {
  return (
    <>
        <div class="bg-white h-full py-6 sm:py-8 lg:py-12">
    <div class="container mx-auto px-4 md:px-8">
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src={heroImg2} loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
            </a>

            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src={heroImg1} loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Groceries</span>
            </a>

            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src={heroImg4} loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Skin Care</span>
            </a>

            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src={heroImg3} loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Snack on!</span>
            </a>
        </div>
    </div>
</div>



        {/* <div className="container">
            <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
                <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
                    <img 
                    className="w-full h-2/4 object-cover rounded-lg"
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
                        <div className='font-medium text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-8'>
                        &#8358; 1,800
                        </div>
                        <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
                            Shop Now <BsArrowRight />
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <img className='w-full h-1/4 object-cover rounded-lg'
                    src={heroImg4} alt="" />
                </div>

                <div className="relative">
                    <img className='w-full h-1/4 object-cover rounded-lg'
                    src={heroImgb} alt="" />
                </div>


            </div>
        </div> */}
    </>
  )
}

export default Hero