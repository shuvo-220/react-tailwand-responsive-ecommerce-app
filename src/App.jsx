import { useEffect } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonials from './components/Testimonials/Testimonials'

function App() {

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:'ease-in-sine',
      delay:400
    })
    AOS.refresh()
  },[])

  return (
    <>
      <div>

        <Navbar />
        <Hero />
        <Products />
        <TopProducts />
        <Banner />
        <Subscribe />
        <Products />
        <Testimonials />

      </div>
    </>
  )
}

export default App
