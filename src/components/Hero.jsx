
import React from 'react'

export default function Hero() {
  return (
    <div className='hero text-slate-100 text-center md:h-[26em]  h-[34em] '>
      <h1 className='md:text-left mt-15 text-2xl  capitalize m-1 font-semibold md:ml-10'>get <span className='span2 '>insights </span>that <br /> help your bussiness grow</h1>
      <p className='md:text-left md:ml-10'>Discover the benefits of data analytics and renevue, customer experrience, and overall efficiency.</p>

      <div className=' md:gap-20 grid md:grid-cols-3 mt-10 gap-10 md:flex items-center justify-center md:-space-x-5 lg:mr-[5em] '>

               <div className='flex items-center justify-center flex-col '>
                  <p className='  text-2xl font-bold'>10k+</p>
                  <p className='text-slate-400 text-sm'>COMPANIES</p>

               </div>

               <div className='flex items-center flex-col '>
                  <p className='  text-2xl font-bold'>314</p>
                  <p className='text-slate-400 text-sm'>TEMPLATE</p>
               </div>

               <div className='flex items-center justify-center flex-col'>
                  <p className='  text-2xl font-bold'>12M+</p>
                  <p className='text-slate-400 text-sm'>QUERIES</p>
               </div>

            </div>
    </div>
  )
}
