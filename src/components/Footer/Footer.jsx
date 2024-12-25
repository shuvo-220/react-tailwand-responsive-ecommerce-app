import React from 'react';
import footerLogo from '../../assets/logo.png';
import footerImg from '../../assets/website/footer-pattern.jpg';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';
import { FaLocationArrow } from 'react-icons/fa6';
import { FaMobile } from 'react-icons/fa6';

const Footer = () => {

    const footerBanner = {
        backgroundImage:`url(${footerImg})`,
        backgroundPosition:'buttom',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        height:'100%',
        width:'100%'
    }

    const FooterLinks = [
        {
          title: "Home",
          link: "/#",
        },
        {
          title: "About",
          link: "/#about",
        },
        {
          title: "Contact",
          link: "/#contact",
        },
        {
          title: "Blog",
          link: "/#blog",
        },
      ];

  return (
    <div style={footerBanner} className='text-white'>
        <div className='container'>
            <div className='grid md:grid-cols-3 pb-10 pt-5'>
                {/* company details */}
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>Market</h1>
                    <img src={footerLogo} alt='img' className='max-w-[50px]' />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                </div>
                {/* footer link */}
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left  text-justify mb-3 '>Important Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link)=>(
                                        <li className='cursor-pointer hover:text-orange-300 hover:translate-x-1 duration-300 text-gray-200' key={link.id}>
                                            <span>{link.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-3xl text-xl font-bold sm:text-left  text-justify mb-3 '>Important Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link)=>(
                                        <li className='cursor-pointer hover:text-orange-300 hover:translate-x-1 duration-300 text-gray-200' key={link.id}>
                                            <span>{link.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    {/* social links */}
                    <div>
                        <div className='flex items-center gap-3 mt-6'>
                           <a href='#' className='text-xl'>
                            <FaInstagram />
                           </a>
                           <a href='#' className='text-xl'>
                            <FaFacebook />
                           </a>
                           <a href='#' className='text-xl'>
                            <FaYoutube />
                           </a>
                        </div>
                        <div className='mt-6 '>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow />
                                <p>Dhaka, Bangladesh</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <FaMobile />
                                <p>123 456 789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer