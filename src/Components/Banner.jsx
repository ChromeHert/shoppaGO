import React from 'react'
import heroImg7 from "../assets/prdtImg7.jpg";
import heroImg5 from "../assets/prdtImg5.jpg";

const Banner = () => {
  return (
    <>
        <div className="container pt-16">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
                <div className="overflow-hidden rounded-lg">
                    <img src={heroImg7} alt=""
                    className='hover:scale-105 transition-transform' />
                </div>

                <div className="overflow-hidden rounded-lg">
                    <img src={heroImg5} alt=""
                    className='hover:scale-105 transition-transform' />
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner