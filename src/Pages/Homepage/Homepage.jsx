import React from 'react'
import './Homepage.css'
import { useTranslation } from 'react-i18next';
import ProductSlideShow from '../../Components/ProductSlideShow/ProductSlideShow';
import ImageSlideShow from '../../Components/ImageSlideShow/ImageSlideShow';
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
    const [t, i18n] = useTranslation("global");
    
    return (
        <div className="homepage">
            {/* <img className="mainPhoto" src="https://ba23cd2041780287b02b.cdn6.editmysite.com/uploads/b/ba23cd2041780287b02b335bf182d9d7dc7b7c24cc899f1dd26f9f6020ee03f7/2023-08-23_14-47-53_1692776887.jpg?width=1200&dpr=1.25" alt="main" /> */}
            <ImageSlideShow />
            <h1>{t("home.aboutUs")}</h1>
            <hr />
            <div className="companyInfo">
                <img className='ciImage' src="https://ycc.com.vn/wp-content/uploads/2023/06/content.jpg" alt="" />
                <div className="ciText">
                    <h2>{t("home.history")}</h2>
                    <hr />
                    <div className="flipCard">
                        <p>{t("home.historyDetail")}</p>
                    </div>
                </div>
            </div>

            <div className="companyInfo">
                <div className="ciText">
                    <h2>{t("home.businessAreas")}</h2>
                    <hr />
                    <div className="flipCard">
                        <p>{t("home.businessAreasDetail")}</p>
                    </div>
                </div>
                <img src="https://winwinmedia.vn/wp-content/uploads/2019/11/dich-vu-viet-bai-content-tai-vinh-phuc.jpg" alt="" className="ciImage" />
            </div>
            <div className="partner">
                <h2>{t("home.partner")} TopWay VietNam</h2>
                <hr />
                <div className="imagelist">
                    <img src="https://sandbox.weebly.com/uploads/b/ba23cd2041780287b02b335bf182d9d7dc7b7c24cc899f1dd26f9f6020ee03f7/3_1692342284.png?width=1200&optimize=medium"
                        alt="Maxxit" loading='lazy' />
                    <img src="https://sandbox.weebly.com/uploads/b/ba23cd2041780287b02b335bf182d9d7dc7b7c24cc899f1dd26f9f6020ee03f7/2_1692342260.png?width=1200&optimize=medium"
                        alt="Sailun" loading='lazy' />
                    <img src="https://www.tireregistrationplus.com/images/Kumho-Tire-logo-2560x1440.png"
                        alt="Kumho Tire" loading='lazy' />
                    <img src="https://i.ibb.co/54WtZd3/6-1692342295-removebg-preview.png"
                        alt="Tai Tan" loading='lazy' />
                    <img src="https://sandbox.weebly.com/uploads/b/ba23cd2041780287b02b335bf182d9d7dc7b7c24cc899f1dd26f9f6020ee03f7/5_1692342292.png?width=1200&optimize=medium"
                        alt="Jinyu" loading='lazy' />
                    <img src="https://www.carlogos.org/tire-brands-logos/Kenda-Tires-logo-5000x2000.png"
                        alt="Kenda" loading='lazy' />
                </div>
            </div>
            <div className="showSlide">
                <h1>{t("home.view")}</h1>
                <div className="slide">
                    <ProductSlideShow />   
                    <ProductSlideShow />
                    <ProductSlideShow />
                </div>
            </div>

        </div>
    )
}

export default Homepage