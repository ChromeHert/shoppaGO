import React from 'react';

const CartBadge = ({ size }) => {
  return (
    <>
      <div className={`absolute bg-rose-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}>
        12
      </div>
    </>
  );
};

export default CartBadge;
