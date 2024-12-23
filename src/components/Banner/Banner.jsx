import React from 'react';
import BannerImg from '../../assets/women/women2.jpg';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
            <div className='grid grid-col-1 sm:grid-cols-2 gap-6 items-center'>
                {/* image section */}
                <div data-aos='zoom-in' >
                    <img src={BannerImg} alt='img' className='max-w-[400px] h-[350px] w-full mx-auto shadow-xl object-cover' />
                </div>
                {/* text section */}
                <div className='flex flex-col justify-center gap-6 sm:pt-0' data-aos='fade-up'>
                  <h1 className='text-3xl sm:text-4xl font-bold' data-aos='fade-up'>Winter sale upto 50% off</h1>
                  <p className='text-sm text-gray-500 tracking-wide leading-5' data-aos='fade-up'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-4'>
                      <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100' />
                      <p>Quality Products</p>
                    </div>
                    <div className='flex items-center gap-4'>
                      <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100' />
                      <p>Fast Delivery</p>
                    </div>
                    <div className='flex items-center gap-4'>
                      <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100' />
                      <p>Fast Delivery</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner