import React from 'react';
import logo from '../../assets/logo.png';
import {IoMdSearch} from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';
import { FaCaretDown } from 'react-icons/fa6';

const Navbar = () => {

    const menu = [
        {
            id:1,
            name:'Home',
            link:'#home'
        },
        {
            id:2,
            name:'Top Rated',
            link:'#home'
        },
        {
            id:3,
            name:'Kids Wear',
            link:'#home'
        },
        {
            id:4,
            name:'Men Wear',
            link:'#home'
        },
    ]

    const dropdown = [
        {
            id:1,
            name:'Home',
            link:'#home'
        },
        {
            id:2,
            name:'Top Rated',
            link:'#home'
        },
        {
            id:3,
            name:'Kids Wear',
            link:'#home'
        },
        {
            id:4,
            name:'Men Wear',
            link:'#home'
        },
    ]


  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
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
                <div className='flex justify-between items-center gap-4'>
                    <div className='group relative hidden sm:block'>
                        <input type='text' placeholder='search'
                        className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary'/>
                        <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
                    </div>
                </div>
                <button onClick={()=>alert('order not available')}
                className='bg-orange-500 transition-all duration-300 text-white py-1 px-4 rounded-full flex items-center gap-3 group '>
                    <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                    <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
                </button>
                {/* dark mode button switch */}
                <div>
                    <DarkMode />
                </div>
            </div>
        </div>

        {/* lower navbar */}
        <div className='flex justify-center'>
            <ul className='sm:flex hidden items-center gap-4'>
            {
                menu.map((data)=>(
                    <li key={data.id} className='inline-block px-4 hover:text-orange-500 duration-200'>
                        <a href={data.link}>{data.name}</a>
                    </li>
                ))
            }
            <li className='group relative cursor-pointer'>
                <a href="#" className='flex items-center gap-[2px] py-2'>
                    Treanding Items
                    <span>
                        <FaCaretDown
                            className='transition-all duration-200 group-hover:rotate-180'
                         />
                    </span>
                </a>
                <div className='absolute z-[9999] hidden group-hover:block duration-300 w-[150px] rounded-md bg-white p-2 text-black shadow-md '>
                    <ul>
                       {
                        dropdown.map((data)=>(
                            <li key={data.id}>
                                <a href={data.link}
                                className='inline-block w-full rounded-md p-2 hover:bg-orange-300 hover:text-white'>{data.name}</a>
                            </li>
                        ))
                       }
                    </ul>
                </div>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar