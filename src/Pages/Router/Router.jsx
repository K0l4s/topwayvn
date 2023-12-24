import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import Navbar from '../../Components/Navbar/Navbar';
import FooterBar from '../../Components/FooterBar/FooterBar';
import './Router.css';
import { BsFillArrowUpSquareFill, BsFillPhoneVibrateFill } from 'react-icons/bs';
import Tatca from '../SanPham/TatCa/Tatca';
import { SiZalo } from 'react-icons/si';
import GiaCongChiTiet from '../SanPham/GiaCongChiTiet/GiaCongChiTiet';
import LinhKienMay from '../SanPham/LinhKienMay/LinhKienMay';
import KhauKim from '../SanPham/KhauKim/KhauKim';
import Contact from '../../Components/Contact/Contact';
import SampleScreen from '../../Components/SampleScreen/SampleScreen';
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
      <div className="sample">
        <SampleScreen />
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="zalo">
        <a href="https://zalo.me/0977842578">
          <SiZalo size={30}></SiZalo>
        </a>
      </div>
      <div className="phone">
        <a href="tel:0908793445">
          <BsFillPhoneVibrateFill size={30}></BsFillPhoneVibrateFill>
        </a>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/topwayvn" element={<Homepage />} />
          <Route path="/all" element={<Tatca />} />
          <Route path="/gia-cong" element={<GiaCongChiTiet/>} />
          <Route path="/linh-kien-may" element={<LinhKienMay/>} />
          <Route path="/khau-kim" element={<KhauKim/>} />
          <Route path="/contact" element={<Contact/>} />
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
