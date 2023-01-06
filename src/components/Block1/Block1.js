import React from 'react'
import './Block1.css';

const olivesPicture = new URL ("../../assets/OLIVES DARK GREEN.JPG",import.meta.url)
    
    export default function Example() {
      return (
        <>
        
      <section className='Block1'>
          <img className='Block1__img2 lg:m-11' src={olivesPicture} alt='olives picture' />
      </section>
      <section className='Block1-2'>
        <h1> Natural Taste of Sicily</h1>
        <p>With over 50 years of family farm tradition, CDE elevate your cooking with our organic extra virgin olive oil.</p>
        <button>Shop Olives</button>
      </section>
        </>
        
      )
    }

