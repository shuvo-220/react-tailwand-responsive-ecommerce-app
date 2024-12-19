import React from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className='shadow-md'>
        {/* upper navbar */}
        <div className='bg-orange-200 py-2'>
            <div className='container flex justify-between items-center'>
                <div>
                    <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2'>
                        <img src={logo} alt='img'
                        className='w-10 uppercase'
                         />
                         market
                    </a>
                </div>
                {/* searchbar and order button */}
                <div>
                    <div className='group'>
                        <input type='text' placeholder='search'
                        className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary'/>
                    </div>
                </div>
            </div>
        </div>

        {/* lower navbar */}
        <div></div>
    </div>
  )
}

export default Navbar