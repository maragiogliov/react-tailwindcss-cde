import React from 'react'
import './Block1.css';

const olivesPicture = new URL ("../../assets/6848D3DB-B654-4941-8E26-6A75CA6A5AE3.JPG",import.meta.url)
const bottle = new URL ("../../assets/Group 90 1.png",import.meta.url)
    
    export default function Example() {
      return (
        <>
        
      <section className='Block1'>
          <img className='Block1__img1' src={bottle} alt='bottle picture' />
          <img className='Block1__img2' src={olivesPicture} alt='olives picture' />
      </section>
      <section className='Block1-text-button'>
        <h1> Natural Taste of Sicily</h1>
          <p>With over 50 years of family farm tradition, CDE elevate your cooking with our organic extra virgin olive oil.</p>
          <button>Shop Olives</button>
      </section>
        </>
        
      )
    }

