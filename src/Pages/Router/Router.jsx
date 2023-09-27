import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import Navbar from '../../Components/Navbar/Navbar';
import FooterBar from '../../Components/FooterBar/FooterBar';
import './Router.css';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import Tatca from '../SanPham/TatCa/Tatca';

const Router = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Thêm sự kiện cuộn
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Loại bỏ sự kiện cuộn khi component bị hủy
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="main">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/topwayvn" element={<Homepage />} />
          <Route path="/all" element={<Tatca />} />
        </Routes>
      </div>
      <div className="footer">
        <FooterBar />
      </div>
      {/* Back to top */}
      {showBackToTop && (
        <div
          id="backtotop"
          className="backtotop"
          onClick={scrollToTop}
        >
          <BsFillArrowUpSquareFill />
        </div>
      )}
    </div>
  );
};

export default Router;
