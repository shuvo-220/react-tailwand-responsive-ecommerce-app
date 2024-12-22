import React from 'react';
import image1 from '../../assets/hero/women.png';
import image2 from '../../assets/hero/sale.png';
import image3 from '../../assets/hero/shopping.png';
import Slider from 'react-slick';

const Hero = () => {

    var settings={
        dots:false,
        arrows:false,
        infinite:true,
        speed:800,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true
    }

    const imageList = [
        {
            id:1,
            img:image1,
            title:"Upto 50% off on all men's wear",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            id:2,
            img:image2,
            title:"Upto 50% off on all men's wear",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            id:3,
            img:image3,
            title:"Upto 50% off on all men's wear",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
    ]

  return (
    <>
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center'>
            <div className='h-[700px] w-[700px] bg-orange-300 absolute -top-1/2 right-0 rounded-3xl rotate-45'>

            </div>
            <div className='container pb-8 sm:pb-0 '>
            <Slider {...settings} >
            {
                imageList.map((data)=>(
                    <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 z-[9999]'>
                        <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left'>
                            <h1 data-aos='zoom-out' data-aos-duration='500' data-aos-once='true' className='text-5xl sm:text-5xl lg:text-7xl font-bold'>{data.title}</h1>
                            <p>{data.description}</p>
                            <div>
                                <button className='bg-orange-500 text-white py-2 px-4 duration-300 hover:scale-105'>Oder Now</button>
                            </div>
                        </div>
                        <div>
                            <div data-aos='zoom-in' data-aos-once='true' className=''>
                                <img src={data.img} alt='img' className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-125 object-contain mx-auto' />
                            </div>
                        </div>
                    </div>
                </div>
                ))
            }
           
            </Slider>
               
            </div>
        </div>
    </>
  )
}

export default Hero