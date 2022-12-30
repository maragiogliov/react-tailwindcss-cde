import React from 'react'
import { PencilIcon } from '@heroicons/react/24/outline'

const olivesPicture = new URL (".././assets/6848D3DB-B654-4941-8E26-6A75CA6A5AE3.JPG",import.meta.url)


export default function Block1() {
  return (
    <section class="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32 tails-selected-element" contenteditable="true">
    <div class="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
        <div class="flex flex-col w-full md:flex-row">

            <div class="flex justify-between">
                <h1 class="relative flex flex-col text-6xl font-extrabold text-left text-black">
                    Natural
                    <span class="">Taste of</span>
                    <span class="">Sicily</span>
                </h1>
            </div>
            <div class="relative top-0 right-0 h-64 mt-12 md:-mt-16 md:absolute md:h-96">
            <img class="object-cover mt-3 mr-5 h-80 lg:h-96 " src={olivesPicture} alt="bg-image"/>
           
            </div>
        </div>

        <div class="my-16 border-b border-gray-300 lg:my-24"></div>

        <h2 class="text-left text-gray-500 xl:text-xl">
        With over 50 years of family farm tradition, CDE elevate your cooking with our organic Extra Virgin Olive Oil.
        </h2>
        <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
            Shop Olives
          </button>
    </div>

  
</section>

  )
}
