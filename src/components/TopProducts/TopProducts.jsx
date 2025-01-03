import React from 'react'
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const TopProducts = () => {

    const ProductsData = [
        {
          id: 1,
          img: Img1,
          title: "Casual Wear",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 2,
          img: Img2,
          title: "Printed shirt",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          img: Img3,
          title: "Women shirt",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ];

  return (
    <div>
        <div className='container'>
            {/* header section */}
            <div className='text-left mb-24'>
                <p data-aos="fade-up" className='text-sm text-orange-500'>Top Rated Products For You</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold py-1'>Best Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            </div>
            {/* body section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                {
                    ProductsData.map((data)=>(
                        <div className='rounded-2xl bg-white hover:bg-black/80 hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                            <div className='h-[100px]'>
                                <img src={data.img} alt='img' className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
                            </div>
                            <div className='p-4 text-center'>
                                <div className='w-full flex items-center justify-center gap-1'>
                                    <FaStar className='text-yellow-400' />
                                    <FaStar className='text-yellow-400' />
                                    <FaStar className='text-yellow-400' />
                                    <FaStar className='text-yellow-400' />
                                </div>
                                <h1 className='text-xl font-bold'>{data.title}</h1>
                                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                                <button className='bg-orange-500 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full group-hover:bg-white group-hover:text-orange-500'>Order Now</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TopProducts