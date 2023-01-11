import './App.css';
import '@tailwindcss/forms'
import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact';
import { I18nProvider, LOCALES } from './i18n';
import { useState } from 'react';


function App() {
  const [locale, setLocale]=useState(LOCALES.ENGLISH)
  return (
    <I18nProvider locale={locale}>
      <section className='buttons-language-container'>
      <button onClick={()=> setLocale(LOCALES.ENGLISH)}>English</button>
      <button onClick={()=> setLocale(LOCALES.GERMAN)}>German</button>
      <button onClick={()=> setLocale(LOCALES.FRENCH)}>French</button>
      </section>
      <div className='general-container '>
        <Hero/>
        <Contact/>
      </div>

    </I18nProvider>
  );
}

export default App;
