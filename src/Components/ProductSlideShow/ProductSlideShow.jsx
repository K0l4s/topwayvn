import React, { useState, useEffect } from 'react';
import './ProductSlideShow.css';
import { useTranslation } from 'react-i18next';
import ViewSanPham from '../ViewSanPham/ViewSanPham';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ProductSlideShow = () => {
    const [t, i18n] = useTranslation("global");
    const products = [
        {
            name: t("product.product_1.name"),
            src: t("product.product_1.ImageUrl"),
        },
        {
            name: t("product.product_2.name"),
            src: t("product.product_2.ImageUrl"),
        },
        {
            name: t("product.product_3.name"),
            src: t("product.product_3.ImageUrl"),
        },
        {
            name: t("product.product_4.name"),
            src: t("product.product_4.ImageUrl"),
        },
        {
            name: t("product.product_5.name"),
            src: t("product.product_5.ImageUrl"),
        },
        {
            name: t("product.product_6.name"),
            src: t("product.product_6.ImageUrl"),
        },
        {
            name: t("product.product_7.name"),
            src: t("product.product_7.ImageUrl"),
        },
    ];

    const [currentProductIndex, setCurrentProductIndex] = useState(0);

    useEffect(() => {
        // Tự động chuyển đổi sản phẩm sau một khoảng thời gian
        const interval = setInterval(() => {
            setCurrentProductIndex((prevIndex) =>
                prevIndex === products.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Đổi sản phẩm mỗi 5 giây

        return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
    }, [products]);
    const navigate = useNavigate();
    return (
        <div className="show" onClick={()=>navigate("/gia-cong")}>
            <BsFillArrowLeftCircleFill className='pre' size={50} cursor="pointer" onClick={()=> {setCurrentProductIndex((prevIndex) =>
                prevIndex === products.length + 1 ? 0 : prevIndex - 1 && prevIndex === 0 ? products.length - 1 : prevIndex - 1
            );}}/>
            <div className="slideshow-container">
                <ViewSanPham
                    name={products[currentProductIndex].name}
                    src={products[currentProductIndex].src}
                />
            </div>
            <BsFillArrowRightCircleFill className='next' size={50} cursor="pointer" onClick={()=> {setCurrentProductIndex((prevIndex) =>
                prevIndex === products.length - 1 ? 0 : prevIndex + 1
            );}}/>
        </div>
    );
};

export default ProductSlideShow;
