import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Homepage/Homepage'
import Navbar from '../../Components/Navbar/Navbar'
import FooterBar from '../../Components/FooterBar/FooterBar'
import './Router.css'
const Router = () => {
    return (
        <div className="main">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </div>
            <div className="footer">
                <FooterBar/>
            </div>
        </div>
    )
}

export default Router