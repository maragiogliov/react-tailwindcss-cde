import React, {useState} from 'react'

export default function Sidebar() {
    const [isOpen, setIsOpen]=useState(false)
    
    
    return (
    <>
    {/* conditionally render */}
    {!isOpen ?
        (
            <button 
            className='fixed  z-30 flex items-center cursor-pointer right-10 top-6'
            onClick={() => setIsOpen(!isOpen)}>
                <svg
                className=""
                fill="red"
                viewBox="0 0 100 80"
                width="40"
                height="40"
                >
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
                </svg>
            </button>
        ) :
        (
        <button className='text-xl text-white fixed top-4 right-4 z-10'
            onClick={()=> setIsOpen(!isOpen)}>
            x
        </button>
        )
    }
    <div className={`sm:hidden" id="mobile-menu" top-0 right-0 fixed bg-slate-400 w-[35vw] h-full 
    p-10 ${isOpen ? 'translate-x-0':'translate-x-full'} ease-in-out duration-500`}
    >
        <h2 className='text-1xl text-white  '>Sidebar</h2>
    </div>
    
    </>
  )
} 
