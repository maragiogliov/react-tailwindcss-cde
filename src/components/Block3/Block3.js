import React from 'react'
import './Block3.css';
const olivesPicture = new URL ("../../assets/OLIVES DARK GREEN.JPG",import.meta.url)
const guyPickingOlives = new URL ("../../assets/GUY PICKING OLIVES .jpg",import.meta.url)



export default function Block3() {
  return (
      <>
            <section class="overflow-hidden text-gray-700">
  <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
    <div class=" bg-green-300 flex flex-wrap -m-1 md:-m-2">

      <div class=" bg-indigo-300 flex flex-wrap w-1/2">
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"


            src={olivesPicture}

           />

          
        </div>

 
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={guyPickingOlives} />
        </div>
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
        </div>
      </div>


      <div class=" bg-yellow-300 flex flex-wrap w-1/2">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    )
  }