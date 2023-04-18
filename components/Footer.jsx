import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  let date = new Date;
  return (
    <div className='footer-container'>
<p> { date.getFullYear() } All rights reserverd</p>
<p className='icons'>
    <AiFillInstagram />
    <AiOutlineTwitter />
</p>
    </div>
  )
}

export default Footer