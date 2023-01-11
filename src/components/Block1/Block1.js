import React from 'react'
import {IntlProvider, FormattedMessage} from 'react-intl'

import './Block1.css';

const olivesPicture = new URL ("../../assets/OLIVES DARK GREEN.JPG",import.meta.url)
const messagesInItalian1 = {
  myMessage: "Sapore Naturale dalla Sicilia",
}
const messagesInItalian2 = {
  myMessage: "Con piu di 50 anni di tradizione, CDE porta giu la tua cucina con il nostro olio extra vergine di oliva",
}
const messagesInItalian3 = {
  myMessage: "Compra Olive",
}
    
    export default function Example() {
      return (
        <>
          <section className='Block1'>
              <img className='Block1__img2 lg:m-11' src={olivesPicture} alt='olives picture' />
          </section>
          <IntlProvider messages={messagesInItalian1} locale="it" defaultLocale="en">
              <section className='Block1-2'>
                <h1>
                <FormattedMessage
                    id="myMessage1"
                    defaultMessage="Natural Taste of Sicily"
                  />
                </h1>
                <p>
                  <FormattedMessage
                    id="myMessage2"
                    defaultMessage="With over 50 years of family farm tradition, CDE elevate your cooking with our organic extra virgin olive oil."
                  />
                </p>
                <button>
                <FormattedMessage
                  id="myMessage3"
                  defaultMessage="Shop Olives"
                />
                </button>
              </section>
           </IntlProvider>
        </>
        
      )
    }

