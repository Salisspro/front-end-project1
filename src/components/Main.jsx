
import React from 'react'
import IMG from '../assets/images/image-header-mobile.jpg'

export default function Main() {
   return (
      <div className='text-slate-50 flex items-center justify-center'>

         <div className='box p-10 w-96'>
               <img
               className='' 
               src={IMG} alt="" />

               <h1 className='text-2xl text-center capitalize m-1 font-semibold' >get insights that help your bussiness grow</h1>

            <div className='text-center'>
               <p>Discovver the benefits of data analytics and renevue, customer experrience, and overall efficiency.</p>
            </div>

            <div className='flex items-center justify-center flex-col space-y-2 mt-10'>
               <span className='text-2xl font-bold'>10k+</span>
               <p>COMPANIES</p>

               <span className='text-2xl font-bold'>10k+</span>
               <p>TEMPLATE</p>

               <span className='text-2xl font-bold'>12M+</span>
               <p>QUERIES</p>

            </div>
         </div>
      </div>
   )
}
