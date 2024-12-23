import React from 'react';
import banner from '../../assets/website/orange-pattern.jpg';

const Subscribe = () => {

    const bannerImg = {
        backgroundImage:`URL(${banner})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeate',
        backgroundSize:'cover',
        height:'100%',
        width:'100%'
    }

  return (
    <div
        data-aos='zoom-in'
        className='mb-20 bg-gray-100' style={bannerImg}
    >
        <div className='container background-blur-sm py-10'>
            <div className='space-y-6 max-w-xl mx-auto'>
                <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New Products</h1>
                <input
                    data-aos='fade-up' type='text' placeholder='Enter Your Email'
                    className='w-full p-3'
                 />
            </div>
        </div>
    </div>
  )
}

export default Subscribe