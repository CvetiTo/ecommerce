import React from 'react';
import Link from 'next/link.js';
import { AiOutlineShopping, AiFillHome } from 'react-icons/ai';

import { Card } from './';
import { useStateContext } from '../context/StateContext.js';

const NavBar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='navbar-container'> 
      <p className='logo'>
        <Link href="/" >Dresses</Link>
      </p>
      <button type='button' className='cart-icon'
       onClick={()=> setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

     {showCart && <Card />} 
    </div>
  )
}

export default NavBar