import React, { useState, useEffect } from 'react';
import './ImageSlideShow.css';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
const images = [
  'https://thuelens.com/wp-content/uploads/2020/08/iStock-517188688.jpg',
  'https://vector6.com/wp-content/uploads/2022/03/pikvn002712-tranh-phong-canh-tuyen-tap-dep-file-psd.jpg',
  'https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh-1920x1080.jpg',
  'https://lamquangphat.vn/uploads/tranh-dan-tuong-phong-canh/humandecor----1126.jpg'
  // Add more image URLs here
];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to advance to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go back to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically advance to the next image every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <button className='pre' onClick={prevImage}><BsArrowLeftCircle size={30}/></button>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="slideshow-image"
      />
      <button className='next' onClick={nextImage}><BsArrowRightCircle size={30}/></button>
    </div>
  );
}

export default App;
