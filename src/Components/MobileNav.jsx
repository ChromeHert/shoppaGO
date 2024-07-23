import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { IoIosMenu } from 'react-icons/io';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import logo from '../assets/shoppaLogo.svg';
import CartBadge from './CartBadge';

const MobileNav = () => {
  return (
    <>
        <div className="sticky top-0 bg-white z-10">
            <div className="container p-8 lg:hidden">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <IoIosMenu size={24}/>
                        <BsSearch size={18}/>
                    </div>

                    <a href='/' className='flex'>
                        <img src={logo} alt="website logo" />
                        <h1 className="text-xl font-medium ml-1">shoppaGO</h1>
                    </a>

                    <div className="flex gap-4 text-[25px]">
                            
                            <AiOutlineUser />
                          
                          <div className="relative cursor-pointer hover:bg-slate-500">
                              <AiOutlineShoppingCart />
                              <CartBadge size="w-[20px] h-[20px]" />
                          </div>
                      </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default MobileNav