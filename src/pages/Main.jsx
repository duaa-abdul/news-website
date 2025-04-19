import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import Homepg from './Homepg'
import Sprots from './Sprots';
import Politics from './Politics';
import Business from './Business'
import DetailPage from './DetailPage';


const Main = () => {
    return (
        <>

            <Navbar />
            <Routes>
                <Route path='/home' element={<Homepg />} />
                <Route path='/sport' element={<Sprots />} />
                <Route path='/Politics' element={<Politics />} />
                <Route path='/busines' element={< Business/>}/>
                <Route path='/news/:id' element={<DetailPage/>}/>
            </Routes>
            <Footer />

        </>

    )
}

export default Main
