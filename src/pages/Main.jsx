import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import Homepg from './Homepg'
import Sprots from './Sprots';
import Politics from './Politics';
import Business from './Business'


const Main = () => {
    return (
        <>

            <Navbar />
            <Routes>
                <Route path='/home' element={<Homepg />} />
                <Route path='/sport' element={<Sprots />} />
                <Route path='/Politics' element={<Politics />} />
                <Route path='/Business' element={< Business/>}/>
            </Routes>
            <Footer />

        </>

    )
}

export default Main
