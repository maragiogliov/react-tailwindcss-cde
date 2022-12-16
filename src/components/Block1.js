import React from 'react'

const olivesPicture = new URL (".././assets/6848D3DB-B654-4941-8E26-6A75CA6A5AE3.JPG",import.meta.url)


export default function Block1() {
  return (
  <section class=" bg-cyan-100 w- flex">
      <div class=" bg-blue-500 w-1/2">
          <h1>Natural Taste of Sicily</h1>
          <p>With over 50 years of family farm tradition, CDE elevate your cooking with our organic Extra Virgin Olive Oil.</p>
          <button>Shop Olives</button>
      </div>
      {/* <img src="" alt="bottle" /> */}
      <div class=" bg-yellow-100 w-1/2">
      <img class="h-33rem" src={olivesPicture} alt="bg-image"/>
      </div>
  </section>
  )
}
