import React from 'react'
import { PencilIcon } from '@heroicons/react/24/outline'

const olivesPicture = new URL (".././assets/6848D3DB-B654-4941-8E26-6A75CA6A5AE3.JPG",import.meta.url)


export default function Block1() {
  return (
  <div className='
      bg-slate-300 
      lg:flex 
      lg:flex-row 
      items-center  
      sm:place-content-center
      sm:bg-lime-400
    
  '>

      <div className="px-20 flex flex-col items-center justify-evenly w-1/2 h-3/4 sm:place-content-center">
          <h1 className='sm:text-4xl lg:text-8xl'>Natural Taste of Sicily</h1>
          <p>With over 50 years of family farm tradition, CDE elevate your cooking with our organic Extra Virgin Olive Oil.</p>
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
            Shop Olives
          </button>
      </div>
      {/* <img src="" alt="bottle" /> */}
      <div class=" h-3/4 w-1/2 object-cover">
      <img class=" object-cover h-3/4 w-full " src={olivesPicture} alt="bg-image"/>
      </div>
  </div>

  )
}
