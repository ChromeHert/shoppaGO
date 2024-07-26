import React from 'react'
import { LuMailOpen } from 'react-icons/lu'

const NewsLetter = () => {
  return (
    <>
        <div className="bg-accentDark mt-16">
            <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
                <div className="flex flex-shrink-0 items-center gap-4">
                    <LuMailOpen size={40}/>
                    <div>
                        <h3 className="text-lg font-semibold sm:text-2xl">Subscribe to our newsletter</h3>
                        <p className="text-sm">
                            Recieve coupons for first shipping & stay updated with the latest products, offers.</p>
                    </div>
                </div>

                <div className="w-full max-w-[500px] relative">
                    <input type="text"
                        className='py-4 px-6 w-full rounded-full subscribeInput'
                        placeholder='Enter Email Address' />
                        <button className="bg-accentDark absolute bottom-[50%] right-2 translate-y-[50%] rounded-full px-4 py-2 hover:bg-accent">Subscribe</button>
                </div>
            </div>
        </div>
    </>
)
}

export default NewsLetter