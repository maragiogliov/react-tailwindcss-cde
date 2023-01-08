import React from 'react'
import './Block7.css';

const botellaEnMano = new URL ("../../assets/BOTELLA EN MANO.jpg",import.meta.url)
const trailer = new URL ("../../assets/TRAILER.jpg", import.meta.url)
const trailerDay = new URL ("../../assets/TRAILER DAY.jpg", import.meta.url)
const basirico = new URL ("../../assets/BASIRICO.jpeg", import.meta.url)


export default function Block7() {
  return (
      <>
  <section class="overflow-hidden text-gray-700">
    <div class="container">
      <div class=" bg-black-300 flex flex-wrap -m-1 md:-m-2">
  

        <div class=" bg-black  flex flex-wrap w-1/2">
          <div class="w-full h-1/3 p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-full h-full "
            src={trailer} />
          </div>
         
          <div class="w-full h-1/3 p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-full h-full"
              src={trailerDay } />
          </div>
          <div class="w-full h-1/3 p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-full h-full"
              src={basirico}/>
          </div>
        </div>
      
        <div class=" bg-black flex flex-wrap w-1/2">
          <div class="w-full h-1/3 p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-full h-full "
            src={ botellaEnMano} />
          </div>
          <div class="w-full h-1/3 p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-full h-full "
            src={ botellaEnMano} />
          </div>
          <div class="w-full h-1/3 p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-full h-full "
            src={ botellaEnMano} />
          </div>
        </div>
      </div>
    </div>
</section>
      </>
    )
  }