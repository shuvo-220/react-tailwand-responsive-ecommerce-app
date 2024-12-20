import React, { useEffect, useState } from 'react';
import LightMode from '../../assets/website/light-mode-button.png';
import Darkmode from '../../assets/website/dark-mode-button.png';
const DarkMode = () => {

    const[theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    )

    const element = document.documentElement;
    console.log(element)

    useEffect(()=>{
        if('theme' === 'dark'){
            element.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }else{
            element.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    },['theme']);

  return (
    <div className='relative'>
        <img src={LightMode} alt='img' onClick={()=>setTheme(theme === 'light' ? 'dark':'light')} className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10' />
        <img src={Darkmode} alt='img' className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300'/>
    </div>
  )
}

export default DarkMode