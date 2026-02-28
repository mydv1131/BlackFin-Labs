import React from 'react'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Products from './Pages/AllProducts'
import About2 from './Pages/About2'
const Router = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/products' element={<Products />} />
                <Route path='/about2' element={<About2 />} />

            </Routes>
        </>
    )
}

export default Router