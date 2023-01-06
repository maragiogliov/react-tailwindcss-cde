import React from 'react'
import './Block3.css';
const olivesPicture = new URL ("../../assets/OLIVES DARK GREEN.JPG",import.meta.url)
const guyPickingOlives = new URL ("../../assets/GUY PICKING OLIVES .jpg",import.meta.url)
const arbolConAlfombra = new URL ("../../assets/ARBOL CON ALFOMBRA.JPG",import.meta.url)
const arbolArropado = new URL ("../../assets/ARBOL ARROPADO.JPG",import.meta.url)
const arbolChill = new URL ("../../assets/ARBOL CHILL.JPG",import.meta.url)
const arbolRanch = new URL ("../..//assets/OLIVE RANCH.jpeg",import.meta.url)








export default function Block3() {
  return (
      <>
            <section class="overflow-hidden text-gray-700">
  <div class="container   mx-auto lg:pt-24 lg:px-32">
    
    <div class=" bg-black-300 flex flex-wrap -m-1 md:-m-2">
      <div class=" bg-black flex flex-wrap w-1/2">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full "
         src={arbolConAlfombra} />
        </div>
      </div>

      <div class=" bg-black  flex flex-wrap w-1/2">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full "
          src={guyPickingOlives} />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full"
            src={arbolArropado } />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full"
            src={arbolChill } />
        </div>
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full"
            src={arbolRanch}/>
        </div>
      </div>

    </div>
  </div>
</section>
      </>
    )
  }