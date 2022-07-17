import React, { useEffect, useState } from 'react'
import Nav from '../container/Nav'
import NavMobile from '../container/NavMobile'
import Socials from '../container/Socials'

export const Header = () => {
  const [bg, setBg]= useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      return window.scrollY > 50 ? setBg(true):setBg(false);
    })
  })
  return (
    <header className={`${bg? 'h-20':'h-24'} bg-black flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
      <div className='container mx-auto h-full flex items-center justify-between'>
        
        <span className=' font-semibold text-2xl'><span className='font-bold text-3xl text-yellow-400 lg:text-4xl'>Jay</span>ant</span>
        

        <div className='hidden lg:block'>
          <Nav />
        </div>

        <div className='hidden lg:block'>
          <Socials />
        </div>

        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  )
}
