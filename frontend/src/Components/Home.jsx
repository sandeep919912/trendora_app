import React from 'react'
import Hero from '../Home-Pages/Hero'
import Category from '../Home-Pages/Category'
import BestProducts from '../Home-Pages/BestProducts'
import NewArrivals from '../Home-Pages/NewArrival'
import Testimonials from '../Home-Pages/FeedBack'
import Footer from './Common/Footer'

const Home = () => {
  return (
    <div className='bg-[#e9e9e5] container mx-auto'>
        <Hero/>
        <Category/>
        <BestProducts/>
        <NewArrivals/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home