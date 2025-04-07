
import React from 'react'
import IMG from '../assets/images/image-header-mobile.jpg'
import Hero from './Hero'

export default function Main() {
   return (

<div className='flex items-center justify-center flex-col md:grid md:grid-cols-2 md:mt-20 md:flex-row-reverse'>
      <div className='span1'>
         <img
            className='opacity-40 w-[39em] h-[26em]'
            src={IMG} alt="" />

      </div>

         <Hero />
            </div>
   )
}
