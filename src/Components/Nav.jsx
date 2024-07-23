import React from 'react'
import logo from '../assets/shoppaLogo.svg';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import CartBadge from './CartBadge';



const Nav = () => {
  return (
      <>
          <div className="sticky top-0 bg-white z-10">
              <div className="container hidden lg:block">
                  <div className="flex justify-between items-center p-8">

                      <a className='flex'>
                          <img src={logo} alt="website logo" />
                          <h1 className="text-xl font-medium ml-1">shoppaGO</h1>
                      </a>

                      <div className="relative w-full max-w-[500px]">
                          <input type="text" className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" placeholder='Search Products...' />
                          <BsSearch className='absolute top-0 right-0 mt-4 mr-5' size={20} />
                      </div>

                      <div className="flex gap-4">
                          <div className="icon_wrap">
                              <AiOutlineUser />
                          </div>
                          <div className="icon_wrap relative hover:bg-slate-500">
                              <AiOutlineShoppingCart />
                              <CartBadge size="w-[25px] h-[25px]" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Nav