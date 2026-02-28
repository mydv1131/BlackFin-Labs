import React from 'react'
import Crousal from './Pages/Crousal'
import Products from './Pages/Products'
import CreateStats from './Pages/Create Stats'
import Footer from './Pages/Footer'
import About from './Pages/About'
import WhyChoose from './Pages/Why'
import Testimonial from './Pages/ Testimonial'
const Home = () => {
    return (
        <div className='h-full w-full flex flex-col md:mt-60'>
            <Crousal />
            <CreateStats />
            <Products />
            <About />
            <WhyChoose />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default Home