import React from 'react'
import { FiPhoneCall } from 'react-icons/fi';
import { LiaGiftSolid, LiaMoneyBillWaveSolid, LiaShippingFastSolid } from 'react-icons/lia';

const FooterGrid = () => {
  return (
    <>
        <div className="container pt-16 grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-between p-5 shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <LiaShippingFastSolid size={30} color="#184d47"/>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Free Shipping</h6>
            <p className="mb-3 text-sm text-gray-900">
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped old Big Bear.
            </p>
          </div>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <LiaMoneyBillWaveSolid size={30} color="#184d47"/>            
            </div>
            <h6 className="mb-2 font-semibold leading-5">Best Price Guarantee</h6>
            <p className="mb-3 text-sm text-gray-900">
              Rough pomfret lemon shark plownose chimaera southern sandfish
              kokanee northern sea.
            </p>
          </div>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <LiaGiftSolid size={30} color="#184d47"/>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Free Curbside Pickup</h6>
            <p className="mb-3 text-sm text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quo eligendi magni dolorum asperiores. Dolores
            </p>
          </div>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <FiPhoneCall size={30} color="#184d47"/>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Support 24/7</h6>
            <p className="mb-3 text-sm text-gray-900">
              Disrupt inspire and think tank, social entrepreneur but
              preliminary thinking think tank compelling.
            </p>
          </div>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
    </>
  );
}

export default FooterGrid